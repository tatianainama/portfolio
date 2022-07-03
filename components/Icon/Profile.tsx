import { Icon } from '@/types/index'
import { FC } from 'react'

const Profile: FC<Icon> = ({ size = 14, ...props }) => (
  <svg
    width={size}
    height={size + 1}
    viewBox="0 0 14 15"
    fill="#FFFFFF"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8.75001 1.66666H5.25001V2.83333H4.08334V6.33333H5.25001V2.83333H8.75001V1.66666ZM8.75001 6.33333H5.25001V7.5H8.75001V6.33333ZM8.75001 2.83333H9.91668V6.33333H8.75001V2.83333ZM2.33334 9.83333H3.50001V8.66666H10.5V9.83333H3.50001V12.1667H10.5V9.83333H11.6667V13.3333H2.33334V9.83333Z" />
  </svg>
)

export default Profile
