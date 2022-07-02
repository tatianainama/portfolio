module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      listStyleType: {
        square: 'square',
      },
      fontSize: {
        xxs: '0.5rem',
      },
      colors: {
        background: {
          DEFAULT: '#212934',
          light: '#29323F',
        },
        foreground: {
          DEFAULT: '#E6E6DC',
          dark: '#6A6971',
        },
        orange: '#F5A221',
        cyan: '#6FF3D9',
        pink: '#FC83A3',
      },
      screens: {
        tall: {
          raw: '(min-height: 550px)',
        },
      },
      gridTemplateRows: {
        layout: 'minmax(0, auto) minmax(0, 1fr)',
      },
    },
  },
  plugins: [],
}
