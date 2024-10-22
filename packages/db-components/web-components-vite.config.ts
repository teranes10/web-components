import { getBaseConfig } from '../../shared/base-vite.config'

export default getBaseConfig({
  url: import.meta.url,
  name: "DbWebComponents",
  fileName: "db-web-components",
  entry: './src/web-components.ts',
  customElement: true,
  external: ['@teranes/utils', '@teranes/vue-composables'],
  globals: {
    '@teranes/utils': 'UTILS',
    '@teranes/vue-composables': 'VUE_COMPOSABLES'
  }
})
