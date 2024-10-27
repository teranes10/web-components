import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { URL, fileURLToPath } from "node:url";
import { PostcssVite, resolvePath } from "./vite-plugin";
import typedCssModules from '@teranes/vite-typed-css-modules'
import dtsPlugin from 'vite-plugin-dts'

type BaseConfigOptions = {
  url?: string,
  name?: string,
  fileName?: string,
  entry: string,
  clean?: boolean,
  customElement?: boolean,
  dts?: boolean,
  external?: string[]
  globals?: { [key: string]: string },
  formats?: ('es' | 'umd')[]
}

export function getBaseConfig({ url = import.meta.url, name, fileName, entry, clean = false,
  customElement = false, dts = false, external = [], globals = {}, formats = ['es'] }: BaseConfigOptions) {
  return defineConfig({
    plugins: [
      vue({
        ...(customElement && {
          customElement,
          isCustomElement: (tag: any) => tag.includes('t-')
        })
      }),
      vueJsx(),
      PostcssVite({
        url,
        content: [
          "./src/**/*{vue,js,cjs,mjs,ts,jsx,tsx}"
        ],
        globalCss: [
          "../../shared/assets/css/_media-queries.css",
          "../../shared/assets/css/_mixins.css"
        ],
      }),
      typedCssModules(),
      ...(dts ? [dtsPlugin({ insertTypesEntry: true, outDir: resolvePath(url, 'dist/types') })] : [])
    ],
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      rollupOptions: {
        external: ["vue", ...external],
        output: {
          globals: {
            'vue': "Vue",
            ...globals
          },
          interop: 'auto',
          preserveModules: formats.includes('es'),
          inlineDynamicImports: !formats.includes('es'),
          assetFileNames: (info) => {
            if (info?.name?.endsWith('.css')) {
              return `${fileName}-style.css`;
            }
            return '[name].[ext]';
          },
        },
        treeshake: {
          moduleSideEffects: false,
          propertyReadSideEffects: false,
        },
      },
      lib: {
        entry: entry,
        name: name,
        fileName: (format) =>
          format === "umd"
            ? `${fileName}.umd.js`
            : format === "es"
              ? `${fileName}.mjs`
              : `${fileName}.js`,
        formats
      },
      emptyOutDir: clean,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  });
}
