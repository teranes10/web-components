import { getBaseConfig } from '../../shared/base-vite.config'

export default getBaseConfig({
  url: import.meta.url,
  name: "DbComponents",
  fileName: "db-components",
  entry: './src/vue.ts',
  clean: true,
  dts: true,
  external: ['@teranes/utils', '@teranes/vue-composables'],
  globals: {
    '@teranes/utils': 'UTILS',
    '@teranes/vue-composables': 'VUE_COMPOSABLES'
  }
})
