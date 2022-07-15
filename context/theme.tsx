import { createContext, FC, useEffect, useState } from 'react'

export const themeOptions = {
  dark: 'dark',
  light: 'light',
} as const

export type Theme = typeof themeOptions
export type ThemeOptions = keyof Theme

export const ThemeContext = createContext<{
  theme: ThemeOptions
  setTheme: (theme: ThemeOptions) => void
  toggle: () => void
}>({
  theme: themeOptions.light,
  setTheme: (theme: ThemeOptions) => {},
  toggle: () => {},
})

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeOptions>(themeOptions.light)

  useEffect(() => {
    if (
      localStorage.theme === themeOptions.dark ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme(themeOptions.dark)
    } else {
      setTheme(themeOptions.light)
    }
  }, [])

  useEffect(() => {
    const html = document.documentElement
    if (theme === themeOptions.light) {
      html.classList.remove(themeOptions.dark)
      localStorage.setItem('theme', themeOptions.light)
    } else {
      html.classList.add(themeOptions.dark)
      localStorage.setItem('theme', themeOptions.dark)
    }
  }, [theme])

  const toggle = () => {
    setTheme(
      theme === themeOptions.dark ? themeOptions.light : themeOptions.dark
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
