import { Icon } from '@/types/index'
import { FC } from 'react'

const Briefcase: FC<Icon> = ({ size = 12, ...props }) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    fill="#fff"
    {...props}
  >
    <path d="M4.667 1.75h4.666v2.333h3.5v8.167H1.167V4.083h3.5V1.75Zm1.166 2.333h2.334V2.917H5.833v1.166Zm-3.5 1.167v5.833h9.334V5.25H2.333Z" />
  </svg>
)

export default Briefcase
