module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cblue: {
          default: 'hsl(245, 75%, 52%)',
          100: 'hsl(225, 100%, 98%)',
          200: 'hsl(225, 100%, 94%)',
          300: 'hsl(224, 23%, 55%)',
          400: 'hsl(223, 47%, 23%)',
        },
        gray: {
          default: '#b0b8c6',
        },
      },
    },
  },
  plugins: [],
}
