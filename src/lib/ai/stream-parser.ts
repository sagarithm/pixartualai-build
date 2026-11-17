/**
 * Parses streaming markdown code blocks containing `file="<path>"`
 * and extracts virtual files in real time.
 */

export interface VirtualFileMap {
  [filePath: string]: string;
}

export function parseFilesFromMarkdown(text: string): VirtualFileMap {
  const files: VirtualFileMap = {};
  
  // Regex to match ```language file="path" \n content \n ```
  const regex = /```[a-zA-Z0-9_-]*\s+file=["']([^"']+)["']\n([\s\S]*?)(?:```|$)/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const filePath = match[1].startsWith('/') ? match[1] : `/${match[1]}`;
    const content = match[2];
    files[filePath] = content;
  }

  return files;
}

/**
 * Extracts active file currently being streamed (even if closing ``` is not yet received)
 */
export function extractStreamingFile(text: string): { path: string; partialContent: string } | null {
  const openFenceIndex = text.lastIndexOf('```');
  if (openFenceIndex === -1) return null;

  const fenceLine = text.slice(openFenceIndex);
  const match = /```[a-zA-Z0-9_-]*\s+file=["']([^"']+)["']\n([\s\S]*)$/.exec(fenceLine);
  if (!match) return null;

  const path = match[1].startsWith('/') ? match[1] : `/${match[1]}`;
  const partialContent = match[2];

  return { path, partialContent };
}
