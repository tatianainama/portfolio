module.exports = {
  darkMode: 'class',
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
          DEFAULT: 'rgb(var(--background) / <alpha-value>)',
          alt: 'rgb(var(--background-alt) / <alpha-value>)',
        },
        foreground: {
          DEFAULT: 'rgb(var(--foreground) / <alpha-value>)',
          alt: 'rgb(var(--foreground-alt) / <alpha-value>)',
        },
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--tertiary) / <alpha-value>)',
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
