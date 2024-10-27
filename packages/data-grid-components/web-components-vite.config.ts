import { getBaseConfig } from '../../shared/base-vite.config'

export default getBaseConfig({
  url: import.meta.url,
  name: "DataGridWebComponents",
  fileName: "data-grid-web-components",
  entry: './src/web-components.ts',
  customElement: true,
  external: ['@teranes/utils'],
  globals: {
    '@teranes/utils': 'UTILS'
  },
  formats: ['umd']
})
