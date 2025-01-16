import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#800000',
        secondary: '#c0392b',
        background: '#a0522d',
       
      },
      'maroon': {
        '50': '#ffeeee',
        '100': '#ffdada',
        '200': '#ffbbbb',
        '300': '#ff8b8b',
        '400': '#ff4949',
        '500': '#ff1111',
        '600': '#ff0000',
        '700': '#e70000',
        '800': '#be0000',
        '900': '#800000',
        '950': '#560000',
    },
      'paarl': {
        '50': '#fbf8ef',
        '100': '#f4e9d1',
        '200': '#e7d1a0',
        '300': '#dbb56e',
        '400': '#d29e4d',
        '500': '#c98337',
        '600': '#b1652e',
        '700': '#a0522d',
        '800': '#793d27',
        '900': '#643423',
        '950': '#381a10',
    },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}
export default config
