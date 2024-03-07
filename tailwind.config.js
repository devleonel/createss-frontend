/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      // Colors Createss
      colors: {
        blue1: '#00ADF8',
        blue2: '#00151E',
        black1: '#1E1E1E',
        white1: '#FFFFFF',
        white2: '#FAFAFA',
        white3: '#F0F0F0',
        grey1: '#D8D8D8',
        grey2: '#A3A3A3',
        grey3: '#8A8A8A',
        green1: '#339900',
        red1: '#CC3300',
        yellow1: '#FFCC00',

        grey1: '#D8D8D8',
        grey1: '#D8D8D8',
      },
    },
  },
  plugins: [],
}


