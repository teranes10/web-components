import { getBaseConfig } from '../../shared/base-vite.config'

export default getBaseConfig({
  url: import.meta.url,
  name: "PopperWebComponents",
  fileName: "popper-web-components",
  entry: './src/web-components.ts',
  customElement: true,
  external: ['@teranes/utils', '@teranes/basic-components'],
  globals: {
    '@teranes/utils': 'UTILS',
    '@teranes/basic-components': 'BasicComponents'
  },
  formats: ['umd']
})
