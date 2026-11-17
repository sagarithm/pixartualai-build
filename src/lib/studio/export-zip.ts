import JSZip from 'jszip';

export async function exportProjectToZip(files: Record<string, string>, projectName: string = 'pixartual-app') {
  const zip = new JSZip();

  // Add all files from virtual file system
  for (const [path, content] of Object.entries(files)) {
    // Strip leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    zip.file(cleanPath, content);
  }

  // Ensure standard Vite config exists if not present
  if (!files['/vite.config.ts'] && !files['vite.config.ts']) {
    zip.file(
      'vite.config.ts',
      `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
`
    );
  }

  // Ensure standard package.json exists if not present
  if (!files['/package.json'] && !files['package.json']) {
    zip.file(
      'package.json',
      JSON.stringify(
        {
          name: projectName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
          private: true,
          version: '0.1.0',
          type: 'module',
          scripts: {
            dev: 'vite',
            build: 'tsc && vite build',
            preview: 'vite preview',
          },
          dependencies: {
            react: '^18.3.1',
            'react-dom': '^18.3.1',
            'lucide-react': '^0.468.0',
            clsx: '^2.1.1',
            'tailwind-merge': '^2.5.5',
          },
          devDependencies: {
            '@types/react': '^18.3.12',
            '@types/react-dom': '^18.3.1',
            '@vitejs/plugin-react': '^4.3.4',
            typescript: '^5.6.3',
            vite: '^6.0.1',
            tailwindcss: '^3.4.17',
            autoprefixer: '^10.4.20',
            postcss: '^8.4.49',
          },
        },
        null,
        2
      )
    );
  }

  // Add README
  zip.file(
    'README.md',
    `# ${projectName}

Generated with [PixartualAI](https://pixartual.ai) — Turn Ideas into Interactive Software.

## Getting Started

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Start the local development server:
\`\`\`bash
npm run dev
\`\`\`

3. Build for production:
\`\`\`bash
npm run build
\`\`\`
`
  );

  // Generate ZIP blob and download
  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${projectName}.zip`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
