import { getBaseConfig } from '../../shared/base-vite.config'

export default getBaseConfig({
  url: import.meta.url,
  name: "FormComponents",
  fileName: "form-components",
  entry: './src/vue.ts',
  clean: true,
  dts: true,
  external: ['@teranes/basic-components', '@teranes/popper-components', '@teranes/date', '@teranes/popper', '@teranes/short-unique-id', '@teranes/utils', '@teranes/vue-composables', 'flatpickr'],
  globals: {
    '@teranes/basic-components': "BasicComponents",
    "@teranes/popper-components": "PopperComponents",
    "@teranes/date": "DAY",
    '@teranes/popper': "POPPER",
    '@teranes/short-unique-id': "SHORT_UNIQUE_ID",
    '@teranes/utils': "UTILS",
    '@teranes/vue-composables': "VUE_COMPOSABLES",
    'flatpickr': 'flatpickr'
  }
})
