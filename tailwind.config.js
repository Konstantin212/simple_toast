/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: colors.lime['500'], light: colors.lime['400'] },
        secondary: { DEFAULT: colors.blue['950'], light: colors.blue['900'] },
        white: { DEFAULT: colors.stone['50'] },
        lightGray: { DEFAULT: colors.gray['400'], light: colors.gray['300'] },
        black: { DEFAULT: colors.gray['950'], light: colors.gray['900'] },
        error: { DEFAULT: colors.red['600'], light: colors.red['500'] }
      }
    }
  },
  plugins: []
}
