import { Icon } from '@/types/index'
import { FC } from 'react'

const Moon: FC<Icon> = ({ size = 12, ...props }) => (
  <svg
    fill="#000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    {...props}
  >
    <path d="M7 3h7v2H7zM7 19h10v2H7zM19 9h2v8h-2zM3 7h2v10H3zM5 5h2v2H5zM5 17h2v2H5zM17 17h2v2h-2zM12 5h2v2h-2zM10 7h2v2h-2zM10 9h2v2h-2zM12 11h2v2h-2zM14 11h2v2h-2z" />
    <path d="M15 11h2v2h-2zM17 9h2v2h-2z" />
  </svg>
)

export default Moon
