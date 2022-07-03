import { Icon } from '@/types/index'
import { FC } from 'react'

const Email: FC<Icon> = ({ size = 12, ...props }) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    fill="#fff"
    {...props}
  >
    <path d="M12.833 2.333H1.167v9.334h11.666V2.333ZM2.333 10.5v-7h9.334v7H2.333Zm2.334-5.833H3.5v1.166h1.167V7h1.166v1.167h2.334V7h1.166V5.833H10.5V4.667H9.333v1.166H8.167V7H5.833V5.833H4.667V4.667Z" />
  </svg>
)

export default Email
