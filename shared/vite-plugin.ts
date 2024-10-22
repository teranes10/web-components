import { fileURLToPath } from "node:url";
import { postcssPlugins, type PostcssPluginOptions } from "./postcss-plugins";
import { dirname, join } from "node:path";

export function resolvePath(url: string, filePath: string) {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);

  return join(__dirname, filePath)
}


export type PostcssViteOptions = PostcssPluginOptions & {
  url?: string
};

export function PostcssVite({
  url,
  content,
  colors,
  plugins,
  tailwindPlugins,
  globalCss,
}: PostcssViteOptions = {}) {
  if (!url) {
    throw new Error('Url is required!')
  }

  const _plugins = postcssPlugins({
    content: content?.map((x) => resolvePath(url, x)),
    globalCss: globalCss?.map((x) => resolvePath(url, x)),
    colors,
    tailwindPlugins,
    plugins,
  });

  return {
    name: "vue-components",
    config(config: any) {
      config.css ??= {};
      config.css.postcss = { plugins: _plugins };
    },
  };
}

export type PluginOptions = PostcssViteOptions & {
  importsDts?: string;
  importsDirs?: string[];
  componentsDts?: string;
  componentsDirs?: string[];
};
