import { getBaseConfig } from '../../shared/base-vite.config'

export default getBaseConfig({
  url: import.meta.url,
  name: "FormComponents",
  fileName: "form-components",
  entry: './src/vue.ts',
  clean: true,
  dts: true,
  external: ['@teranes/date', '@teranes/popper', '@teranes/short-unique-id', '@teranes/utils', '@teranes/vue-composables', 'reflect-metadata', 'flatpickr'],
  globals: {
    "@teranes/date": "DAY",
    '@teranes/popper': "POPPER",
    '@teranes/short-unique-id': "SHORT_UNIQUE_ID",
    '@teranes/utils': "UTILS",
    '@teranes/vue-composables': "VUE_COMPOSABLES",
    'Reflect': 'reflect-metadata',
    'flatpickr': 'Flatpickr'
  }
})
