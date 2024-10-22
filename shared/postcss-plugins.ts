import { type Plugin } from "postcss";
import postcssImport from "postcss-import";
import postcssCustomMedia from "postcss-custom-media";
import postcssVariables from '@teranes/postcss-variables'
import tailwindcss from "tailwindcss";
import tailwindcssNesting from "tailwindcss/nesting/index.js";
import tailwindPlugin from "tailwindcss/plugin.js";
import autoprefixer from "autoprefixer";
import cssnano from 'cssnano'
import { colors as defaultColors, getColors, getComponentColors, type ColorOptions } from './colors'

export interface PostcssPluginOptions {
  prefix?: string
  content?: string[]
  colors?: Partial<ColorOptions>
  plugins?: any
  tailwindPlugins?: any
  globalCss?: string[]
}

export function postcssPlugins({ prefix = '', content = [], tailwindPlugins = [], plugins = [], colors, globalCss = [] }: PostcssPluginOptions = {}): Plugin[] {
  const _colors = { ...defaultColors, ...(colors && colors as any) }
  const _tailwindPlugins = [...(tailwindPlugins ? tailwindPlugins : [])]

  const _tailwindcss = tailwindcss({
    content: content,
    theme: {
      extend: { colors: _colors },
    },
    plugins: _tailwindPlugins,
  })

  return [
    postcssGlobalCss(globalCss), postcssImport, postcssCustomMedia,
    postcssVariables({ variables: { prefix }, functions: { getItem, getColors, getComponentColors } }),
    ...(plugins || []), tailwindcssNesting, _tailwindcss, autoprefixer, cssnano,
  ]
}

function getItem(value: any | any[], index: string) {
  if (!value || !index) {
    return ''
  }

  return JSON.parse(value)[index]
}

export function postcssGlobalCss(files: string[]): Plugin {
  return {
    postcssPlugin: 'postcss-global-css',
    Once(root) {
      for (const file of files) {
        root.prepend(`@import '${file}';`)
      }
    },
  }
}

export function generateCssVariablesPlugin(colors: ColorOptions) {
  return tailwindPlugin(function ({ addUtilities }) {
    const colorVariables: Record<string, string> = {}

    for (const colorName of Object.keys(colors)) {
      const color = colors[colorName]

      if (typeof color === 'string') {
        colorVariables[`--color-${colorName}`] = color
      }

      if (typeof color === 'object') {
        for (const shadeName of Object.keys(color)) {
          const variableName = shadeName === 'DEFAULT' ? `--color-${colorName}` : `--color-${colorName}-${shadeName}`
          const colorShade = color[shadeName]
          if (colorShade) {
            colorVariables[variableName] = colorShade
          }
        }
      }
    }

    addUtilities({ ':root': colorVariables })
  })
}
