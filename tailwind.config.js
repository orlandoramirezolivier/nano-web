/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', '-apple-system', 'BlinkMacSystemFont', 'Arial', 'sans-serif'],
      },
      colors: {
        nano: {
          black:   '#0A0A0A',
          g1:      '#1C1C1C',
          g2:      '#3C3C3C',
          g3:      '#787878',
          g4:      '#ABABAB',
          g5:      '#D8D8D8',
          g6:      '#F0F0F0',
          surface: '#FFFFFF',
          bg:      '#F5F5F5',
        },
      },
      borderRadius: {
        'nano-sm': '8px',
        'nano':    '12px',
        'nano-lg': '18px',
        'nano-xl': '24px',
      },
    },
  },
  plugins: [],
}
