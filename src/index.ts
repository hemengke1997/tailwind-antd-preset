import { type Config } from 'tailwindcss'
import theme from './generate/theme'

const TailwindAntdPreset = {
  theme: {
    extend: theme,
  },
} as unknown as Config

export default TailwindAntdPreset
