import { getBaseConfig } from '../../shared/base-vite.config'

export default getBaseConfig({
  url: import.meta.url,
  name: "FormWebComponents",
  fileName: "form-web-components",
  entry: './src/web-components.ts',
  customElement: true,
  external: ['@teranes/date', '@teranes/popper', '@teranes/short-unique-id', '@teranes/utils', 'reflect-metadata', 'flatpickr'],
  globals: {
    "@teranes/date": "DAY",
    '@teranes/popper': "POPPER",
    '@teranes/short-unique-id': "SHORT_UNIQUE_ID",
    '@teranes/utils': "UTILS",
    'Reflect': 'reflect-metadata',
    'flatpickr': 'Flatpickr'
  },
  formats: ['umd']
})
