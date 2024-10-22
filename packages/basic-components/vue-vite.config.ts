import { getBaseConfig } from '../../shared/base-vite.config'

export default getBaseConfig({
  url: import.meta.url,
  name: "BasicComponents",
  fileName: "basic-components",
  entry: './src/vue.ts',
  clean: true,
  dts: true,
  external: ['@popperjs/core', '@teranes/utils', '@teranes/vue-composables', '@teranes/popper', 'tippy.js'],
  globals: {
    '@popperjs/core': 'popper',
    '@teranes/utils': 'UTILS',
    '@teranes/vue-composables': "VUE_COMPOSABLES",
    '@teranes/popper': 'POPPER',
    'tippy.js': 'tippy'
  }
})
