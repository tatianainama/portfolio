import { ThemeContext } from 'context/theme'
import { FC, useContext } from 'react'
import Sun from './Icon/Sun'
import Moon from './Icon/Moon'

const iconProps = {
  className: 'fill-tertiary z-10',
  size: 24,
}

const ThemeSwitch: FC<{ className?: string }> = ({ className }) => {
  const { isDark, theme, toggle } = useContext(ThemeContext)

  return (
    <div className={className}>
      <input
        type="checkbox"
        id="theme-switch"
        className="absolute h-0 w-0 invisible peer"
        onChange={toggle}
      />
      <label
        htmlFor="theme-switch"
        title={`Toggle ${theme} theme`}
        className={`block cursor-pointer bg-background bg-opacity-50 border-2 border-solid border-background-alt p-1 z-10 w-[35px] h-[35px]`}
      >
        {isDark ? <Sun {...iconProps} /> : <Moon {...iconProps} />}
      </label>
    </div>
  )
}

export default ThemeSwitch
