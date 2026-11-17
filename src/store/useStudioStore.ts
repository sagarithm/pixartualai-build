import { create } from 'zustand';
import { ExperienceAST, SectionNode, ViewportMode, ExperienceTheme } from '@/types/ast';
import { PRESET_TEMPLATES, DEFAULT_LIGHT_THEME, DEFAULT_DARK_THEME } from '@/lib/templates';
import { generateExperienceFromPrompt } from '@/lib/ai-generator';
import { DEFAULT_SANDBOX_FILES } from '@/lib/studio/default-files';
import { parseFilesFromMarkdown } from '@/lib/ai/stream-parser';
import { SupportedModelId, DEFAULT_MODEL } from '@/lib/ai/openrouter';

interface StudioState {
  // AST state (for visual block canvas)
  experience: ExperienceAST;
  selectedSectionId: string | null;
  viewport: ViewportMode;
  isAiModalOpen: boolean;
  isTemplateModalOpen: boolean;
  isShareModalOpen: boolean;
  isChatOpen: boolean;
  chatMessages: { id: string; role: 'user' | 'assistant'; text: string }[];
  history: ExperienceAST[];
  future: ExperienceAST[];

  // Sandpack Code-Gen Sandbox state
  files: Record<string, string>;
  activeFile: string;
  selectedModel: SupportedModelId;
  isGenerating: boolean;
  canvasMode: 'ast' | 'sandpack';

  // Actions
  setExperience: (exp: ExperienceAST) => void;
  loadTemplate: (templateId: string) => void;
  generateFromPrompt: (prompt: string) => void;
  setSelectedSectionId: (id: string | null) => void;
  setViewport: (vp: ViewportMode) => void;
  toggleTheme: () => void;
  updateThemeColor: (color: string) => void;
  updateSectionProps: (sectionId: string, props: Record<string, any>) => void;
  updateSectionText: (sectionId: string, field: 'title' | 'subtitle', text: string) => void;
  deleteSection: (sectionId: string) => void;
  addSection: (type: SectionNode['type']) => void;
  setIsAiModalOpen: (open: boolean) => void;
  setIsTemplateModalOpen: (open: boolean) => void;
  setIsShareModalOpen: (open: boolean) => void;
  setIsChatOpen: (open: boolean) => void;
  sendChatMessage: (message: string) => void;
  undo: () => void;
  redo: () => void;

  // Sandpack actions
  setCanvasMode: (mode: 'ast' | 'sandpack') => void;
  setSelectedModel: (model: SupportedModelId) => void;
  setActiveFile: (path: string) => void;
  updateFile: (path: string, content: string) => void;
  setFiles: (files: Record<string, string>) => void;
  generateCodeFromPrompt: (prompt: string) => Promise<void>;
}

export const useStudioStore = create<StudioState>((set, get) => ({
  experience: PRESET_TEMPLATES[0],
  selectedSectionId: null,
  viewport: 'desktop',
  isAiModalOpen: false,
  isTemplateModalOpen: false,
  isShareModalOpen: false,
  isChatOpen: false,
  chatMessages: [
    {
      id: 'welcome',
      role: 'assistant',
      text: "Hi, I'm your PixartualAI Copilot! I can generate full-stack React + Tailwind applications, tweak components, or write custom logic. What would you like to build?",
    },
  ],
  history: [],
  future: [],

  // Initial Sandpack Virtual File System
  files: DEFAULT_SANDBOX_FILES,
  activeFile: '/App.tsx',
  selectedModel: DEFAULT_MODEL,
  isGenerating: false,
  canvasMode: 'sandpack',

  setCanvasMode: (mode) => set({ canvasMode: mode }),
  setSelectedModel: (model) => set({ selectedModel: model }),
  setActiveFile: (activeFile) => set({ activeFile }),
  updateFile: (path, content) => {
    set((state) => ({
      files: {
        ...state.files,
        [path]: content,
      },
    }));
  },
  setFiles: (files) => set({ files }),

  generateCodeFromPrompt: async (prompt: string) => {
    set({ isGenerating: true });

    // Append user prompt to chat
    const userMsg = { id: `user-${Date.now()}`, role: 'user' as const, text: prompt };
    set((state) => ({ chatMessages: [...state.chatMessages, userMsg] }));

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          modelId: get().selectedModel,
          existingFiles: get().files,
        }),
      });

      if (!response.ok) {
        throw new Error(`Generation failed with HTTP ${response.status}`);
      }

      if (!response.body) {
        throw new Error('ReadableStream not supported by response');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        accumulatedText += decoder.decode(value, { stream: true });

        // Parse any completed or in-progress files
        const extracted = parseFilesFromMarkdown(accumulatedText);
        if (Object.keys(extracted).length > 0) {
          set((state) => ({
            files: {
              ...state.files,
              ...extracted,
            },
          }));
        }
      }

      // Final pass on full stream
      const finalFiles = parseFilesFromMarkdown(accumulatedText);
      if (Object.keys(finalFiles).length > 0) {
        set((state) => ({
          files: {
            ...state.files,
            ...finalFiles,
          },
        }));
      }

      set((state) => ({
        chatMessages: [
          ...state.chatMessages,
          {
            id: `asst-${Date.now()}`,
            role: 'assistant',
            text: `✨ Successfully generated and mounted code for: "${prompt}". Check the Preview and Code tabs!`,
          },
        ],
      }));
    } catch (err: any) {
      console.error('Error generating code:', err);
      set((state) => ({
        chatMessages: [
          ...state.chatMessages,
          {
            id: `err-${Date.now()}`,
            role: 'assistant',
            text: `⚠️ Generation error: ${err.message || 'Could not connect to model'}`,
          },
        ],
      }));
    } finally {
      set({ isGenerating: false });
    }
  },

  setExperience: (exp) => {
    const current = get().experience;
    set({
      experience: exp,
      history: [...get().history, current],
      future: [],
    });
  },

  loadTemplate: (templateId) => {
    try {
      const decoded = decodeURIComponent(templateId);
      const found = PRESET_TEMPLATES.find(
        (t) => t.id === templateId || t.name.toLowerCase() === decoded.toLowerCase()
      );
      if (found) {
        get().setExperience(JSON.parse(JSON.stringify(found)));
        set({ isTemplateModalOpen: false });
      } else {
        const generated = generateExperienceFromPrompt({
          prompt: `A polished ${decoded} website template with hero, interactive features, bento grid, and contact`,
          themePreference: get().experience.theme.mode,
        });
        generated.name = decoded;
        get().setExperience(generated);
        set({
          isTemplateModalOpen: false,
          chatMessages: [
            ...get().chatMessages,
            {
              id: `msg-${Date.now()}`,
              role: 'assistant',
              text: `✨ Cloned the "${decoded}" template into your workspace!`,
            },
          ],
        });
      }
    } catch (e) {
      console.error(e);
    }
  },

  generateFromPrompt: (prompt) => {
    const generated = generateExperienceFromPrompt({
      prompt,
      themePreference: get().experience.theme.mode,
    });
    get().setExperience(generated);
    set({
      isAiModalOpen: false,
      chatMessages: [
        ...get().chatMessages,
        {
          id: `msg-${Date.now()}`,
          role: 'assistant',
          text: `✨ Generated your new interactive experience for: "${prompt}". You can click any section to edit or ask me to make adjustments!`,
        },
      ],
    });
  },

  setSelectedSectionId: (id) => set({ selectedSectionId: id }),
  setViewport: (viewport) => set({ viewport }),

  toggleTheme: () => {
    const current = get().experience;
    const newMode = current.theme.mode === 'light' ? 'dark' : 'light';
    const baseTheme = newMode === 'dark' ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME;
    const updated: ExperienceAST = {
      ...current,
      theme: {
        ...baseTheme,
        primaryColor: current.theme.primaryColor,
      },
    };
    get().setExperience(updated);
  },

  updateThemeColor: (color) => {
    const current = get().experience;
    const updated: ExperienceAST = {
      ...current,
      theme: {
        ...current.theme,
        primaryColor: color,
      },
    };
    get().setExperience(updated);
  },

  updateSectionProps: (sectionId, props) => {
    const current = get().experience;
    const updatedSections = current.sections.map((sec) =>
      sec.id === sectionId ? { ...sec, props: { ...sec.props, ...props } } : sec
    );
    get().setExperience({ ...current, sections: updatedSections });
  },

  updateSectionText: (sectionId, field, text) => {
    const current = get().experience;
    const updatedSections = current.sections.map((sec) =>
      sec.id === sectionId ? { ...sec, [field]: text } : sec
    );
    get().setExperience({ ...current, sections: updatedSections });
  },

  deleteSection: (sectionId) => {
    const current = get().experience;
    const updatedSections = current.sections.filter((s) => s.id !== sectionId);
    get().setExperience({ ...current, sections: updatedSections });
    if (get().selectedSectionId === sectionId) {
      set({ selectedSectionId: null });
    }
  },

  addSection: (type) => {
    const current = get().experience;
    const newSection: SectionNode = {
      id: `${type}-${Date.now()}`,
      type,
      title: `New ${type.replace('-', ' ').toUpperCase()}`,
      subtitle: 'Add a helpful description or subtitle here.',
      props: {},
    };
    get().setExperience({
      ...current,
      sections: [...current.sections, newSection],
    });
    set({ selectedSectionId: newSection.id });
  },

  setIsAiModalOpen: (open) => set({ isAiModalOpen: open }),
  setIsTemplateModalOpen: (open) => set({ isTemplateModalOpen: open }),
  setIsShareModalOpen: (open) => set({ isShareModalOpen: open }),
  setIsChatOpen: (open) => set({ isChatOpen: open }),

  sendChatMessage: (message) => {
    // Check if we are in sandpack mode: if so, stream via generateCodeFromPrompt!
    if (get().canvasMode === 'sandpack') {
      get().generateCodeFromPrompt(message);
      return;
    }

    const userMsg = { id: `user-${Date.now()}`, role: 'user' as const, text: message };
    set((state) => ({ chatMessages: [...state.chatMessages, userMsg] }));

    setTimeout(() => {
      const lower = message.toLowerCase();
      const current = get().experience;
      let replyText = "I've applied your changes to the canvas!";

      if (lower.includes('dark') || lower.includes('night') || lower.includes('black')) {
        if (current.theme.mode !== 'dark') get().toggleTheme();
        replyText = 'Switched your experience to Dark Mode!';
      } else if (lower.includes('light') || lower.includes('white')) {
        if (current.theme.mode !== 'light') get().toggleTheme();
        replyText = 'Switched your experience to Light Mode!';
      } else if (lower.includes('hero') || lower.includes('headline') || lower.includes('title')) {
        const hero = current.sections.find((s) => s.type === 'hero');
        if (hero) {
          get().updateSectionText(hero.id, 'title', message.replace(/^(change|make|update) (the )?(hero|headline|title) (to )?/i, ''));
          replyText = `Updated the hero headline!`;
        }
      } else {
        replyText = `Processed: "${message}". What else would you like to refine?`;
      }

      set((state) => ({
        chatMessages: [
          ...state.chatMessages,
          { id: `asst-${Date.now()}`, role: 'assistant', text: replyText },
        ],
      }));
    }, 600);
  },

  undo: () => {
    const { history, experience, future } = get();
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    const newHistory = history.slice(0, -1);
    set({
      experience: prev,
      history: newHistory,
      future: [experience, ...future],
    });
  },

  redo: () => {
    const { history, experience, future } = get();
    if (future.length === 0) return;
    const next = future[0];
    const newFuture = future.slice(1);
    set({
      experience: next,
      history: [...history, experience],
      future: newFuture,
    });
  },
}));
