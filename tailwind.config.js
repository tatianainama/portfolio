module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        lekton: ['Lekton', 'Courier', 'monospace'],
      },
      fontSize: {
        xxs: '0.5rem',
      },
      colors: {
        'new-york-pink': '#da9089',
      },
    },
  },
  plugins: [],
}
