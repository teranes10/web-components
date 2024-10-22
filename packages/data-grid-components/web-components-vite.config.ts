import { getBaseConfig } from '../../shared/base-vite.config'

export default getBaseConfig({
  url: import.meta.url,
  name: "DataGridWebComponents",
  fileName: "data-grid-web-components",
  entry: './src/web-components.ts',
  customElement: true,
  external: ['@teranes/utils', '@teranes/basic-components', '@teranes/form-components'],
  globals: {
    '@teranes/utils': 'UTILS',
    '@teranes/basic-components': 'BasicComponents',
    '@teranes/form-components': 'FormComponents',
  },
  formats: ['umd']
})
