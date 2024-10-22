import { getBaseConfig } from '../../shared/base-vite.config'

export default getBaseConfig({
  url: import.meta.url,
  name: "DataGridComponents",
  fileName: "data-grid-components",
  entry: './src/vue.ts',
  clean: true,
  dts: true,
  external: ['@teranes/utils', '@teranes/vue-composables', '@teranes/basic-components', '@teranes/form-components'],
  globals: {
    '@teranes/utils': 'UTILS',
    '@teranes/basic-components': 'BasicComponents',
    '@teranes/form-components': 'FormComponents',
    '@teranes/vue-composables': "VUE_COMPOSABLES",
  }
})
