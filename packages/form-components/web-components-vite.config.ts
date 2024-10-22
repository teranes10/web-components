import { getBaseConfig } from '../../shared/base-vite.config'

export default getBaseConfig({
  url: import.meta.url,
  name: "FormWebComponents",
  fileName: "form-web-components",
  entry: './src/web-components.ts',
  customElement: true,
  external: ['@teranes/basic-components', '@teranes/popper-components', '@teranes/date', '@teranes/popper', '@teranes/short-unique-id', '@teranes/utils', 'flatpickr'],
  globals: {
    '@teranes/basic-components': "BasicComponents",
    "@teranes/popper-components": "PopperComponents",
    "@teranes/date": "DAY",
    '@teranes/popper': "POPPER",
    '@teranes/short-unique-id': "SHORT_UNIQUE_ID",
    '@teranes/utils': "UTILS",
    'flatpickr': 'flatpickr'
  },
  formats: ['umd']
})
