import { createContext, FC, useEffect, useState } from 'react'

export const themeOptions = {
  dark: 'dark',
  light: 'light',
} as const

export type Theme = typeof themeOptions
export type ThemeOptions = keyof Theme

export const ThemeContext = createContext<{
  theme: ThemeOptions
  isDark: boolean
  toggle: () => void
}>({
  theme: themeOptions.light,
  isDark: false,
  toggle: () => {},
})

export const ThemeProvider: FC = ({ children }) => {
  const [isDark, setDark] = useState<boolean>(false)

  useEffect(() => {
    if (
      localStorage.theme === themeOptions.dark ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDark(true)
    } else {
      setDark(false)
    }
  }, [])

  useEffect(() => {
    const html = document.documentElement
    if (isDark) {
      html.classList.add(themeOptions.dark)
      localStorage.setItem('theme', themeOptions.dark)
    } else {
      html.classList.remove(themeOptions.dark)
      localStorage.setItem('theme', themeOptions.light)
    }
  }, [isDark])

  const toggle = () => setDark(!isDark)

  return (
    <ThemeContext.Provider
      value={{
        theme: isDark ? themeOptions.dark : themeOptions.light,
        toggle,
        isDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
