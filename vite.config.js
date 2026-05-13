import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function copyRootStaticAssets() {
  return {
    name: 'copy-root-static-assets',
    closeBundle() {
      const rootDir = process.cwd();
      const outDir = path.resolve(rootDir, 'dist');
      const files = ['logoweb.png', 'sitemap.xml', 'robots.txt'];

      if (!fs.existsSync(outDir)) {
        return;
      }

      for (const file of files) {
        const from = path.resolve(rootDir, file);
        const to = path.resolve(outDir, file);

        if (fs.existsSync(from)) {
          fs.copyFileSync(from, to);
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyRootStaticAssets()],
  base: './',
});
