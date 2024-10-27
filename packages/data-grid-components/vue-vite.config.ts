import { getBaseConfig } from '../../shared/base-vite.config'

export default getBaseConfig({
  url: import.meta.url,
  name: "DataGridComponents",
  fileName: "data-grid-components",
  entry: './src/vue.ts',
  clean: true,
  dts: true,
  external: ['@teranes/utils', '@teranes/vue-composables', 'reflect-metadata'],
  globals: {
    '@teranes/utils': 'UTILS',
    '@teranes/vue-composables': "VUE_COMPOSABLES",
    'Reflect': 'reflect-metadata'
  }
})
