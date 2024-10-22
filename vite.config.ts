import { defineConfig } from "vite";
import path, { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";

export default defineConfig(() => {
  return {
    root: path.resolve(__dirname, ""),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    build: {
      outDir: "build",
      lib: {
        entry: resolve(__dirname, "src/ckeditor.ts"),
        name: "MarkdownEditor",
        fileName: (format) => `ckeditor.${format}.js`,
        formats: ["es", "umd"],
      },
      rollupOptions: {
        output: {
          exports: "named",
          globals: {
            ckeditor: "MarkdownEditor",
          },
        },
        input: {
          main: resolve(__dirname, "src/ckeditor.ts"), // No index.html or main.ts as entry points
        },
      },
    },
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: "node_modules/ckeditor5/build/translations/**",
            dest: "translations",
          },
        ],
      }),
    ],
    css: {
      postcss: {
        plugins: [postcssImport(), autoprefixer()],
      },
    },
  };
});
