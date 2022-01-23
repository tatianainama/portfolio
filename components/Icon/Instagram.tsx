import { Icon } from '@/types/index'
import { FC } from 'react'

const Instagram: FC<Icon> = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.444 0A4.445 4.445 0 0 0 0 4.444v7.112A4.445 4.445 0 0 0 4.444 16h7.112A4.445 4.445 0 0 0 16 11.556V4.444A4.445 4.445 0 0 0 11.556 0H4.444Zm8.89 1.778a.89.89 0 1 1-.001 1.778.89.89 0 0 1 0-1.778ZM8 3.556a4.445 4.445 0 1 1-.001 8.89A4.445 4.445 0 0 1 8 3.555Zm0 1.777a2.667 2.667 0 1 0 0 5.334 2.667 2.667 0 0 0 0-5.334Z"
      fill="#000"
      fillOpacity="1"
    />
  </svg>
)

export default Instagram
