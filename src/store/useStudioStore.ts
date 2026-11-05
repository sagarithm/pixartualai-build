import { create } from 'zustand';
import { ExperienceAST, SectionNode, ViewportMode, ExperienceTheme } from '@/types/ast';
import { PRESET_TEMPLATES, DEFAULT_LIGHT_THEME, DEFAULT_DARK_THEME } from '@/lib/templates';
import { generateExperienceFromPrompt } from '@/lib/ai-generator';

interface StudioState {
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
      text: "Hi, I'm your PixartualAI Copilot! I can help you modify copy, tweak styling, add interactive calculators, or change your theme. What would you like to refine?",
    },
  ],
  history: [],
  future: [],

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
        // Dynamically instantiate experience for this template
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
              text: `✨ Cloned the "${decoded}" template into your workspace! You can click any section to edit or use Copilot chat to customize it.`,
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
    const userMsg = { id: `user-${Date.now()}`, role: 'user' as const, text: message };
    set((state) => ({ chatMessages: [...state.chatMessages, userMsg] }));

    // Local AI refinement logic
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
      } else if (lower.includes('blue') || lower.includes('purple') || lower.includes('green') || lower.includes('red')) {
        const colorMap: Record<string, string> = {
          blue: '#2563EB',
          purple: '#9333EA',
          green: '#059669',
          red: '#E11D48',
        };
        for (const [key, val] of Object.entries(colorMap)) {
          if (lower.includes(key)) {
            get().updateThemeColor(val);
            replyText = `Updated your primary brand accent to ${key}!`;
            break;
          }
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

