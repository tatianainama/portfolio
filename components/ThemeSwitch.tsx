import { ThemeContext, themeOptions } from 'context/theme'
import { FC, useContext } from 'react'
import Sun from './Icon/Sun'
import Moon from './Icon/Moon'

const iconProps = {
  className: 'fill-tertiary',
  size: 24,
}

const ThemeSwitch: FC<{ className?: string }> = ({ className }) => {
  const { theme, toggle } = useContext(ThemeContext)
  return (
    <button
      onClick={toggle}
      type="button"
      title={`Toggle ${theme} theme`}
      className={`bg-background bg-opacity-50 border-2 border-solid border-background-alt p-1 ${className}`}
    >
      {theme === themeOptions.light ? (
        <Moon {...iconProps} />
      ) : (
        <Sun {...iconProps} />
      )}
    </button>
  )
}

export default ThemeSwitch
