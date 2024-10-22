import { getBaseConfig } from '../../shared/base-vite.config'

export default getBaseConfig({
  url: import.meta.url,
  name: "BasicWebComponents",
  fileName: "basic-web-components",
  entry: './src/web-components.ts',
  customElement: true,
  external: ['@popperjs/core', '@teranes/utils', '@teranes/popper', 'tippy.js'],
  globals: {
    '@popperjs/core': 'popper',
    '@teranes/utils': 'UTILS',
    '@teranes/popper': 'POPPER',
    'tippy.js': 'tippy'
  },
  formats: ['umd']
})
