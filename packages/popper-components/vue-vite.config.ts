import { getBaseConfig } from '../../shared/base-vite.config'

export default getBaseConfig({
  url: import.meta.url,
  name: "PopperComponents",
  fileName: "popper-components",
  entry: './src/vue.ts',
  clean: true,
  dts: true,
  external: ['@teranes/utils', '@teranes/vue-composables', '@teranes/basic-components'],
  globals: {
    '@teranes/utils': 'UTILS',
    '@teranes/vue-composables': 'VUE_COMPOSABLES',
    '@teranes/basic-components': 'BasicComponents'
  }
})
