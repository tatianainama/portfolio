import { ThemeContext } from 'context/theme'
import { FC, useContext, useEffect, useRef } from 'react'
import ThemeSwitch from './ThemeSwitch'

type Props = {
  className?: string
}

const Media: FC<Props> = ({ className }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    videoRef.current?.load()
  }, [theme])

  return (
    <div className={`relative ${className}`}>
      <video
        autoPlay
        loop
        muted
        className="object-cover object-right h-full md:min-h-[280px]"
        ref={videoRef}
      >
        <source src={`/video/theme-${theme}.webm`} type="video/webm" />
      </video>
      <ThemeSwitch className="absolute right-2 bottom-2" />
    </div>
  )
}

export default Media
