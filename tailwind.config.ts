import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2c3e50',
        secondary: '#c0392b',
        background: '#f8f9fa',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}
export default config
