import { Icon } from '@/types/index'
import { FC } from 'react'

const Pin: FC<Icon> = ({ size = 12, ...props }) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    fill="#fff"
    {...props}
  >
    <path d="M4.083 1.167h5.834v1.166H4.083V1.167ZM2.917 3.5V2.333h1.166V3.5H2.917Zm0 4.667H1.75V3.5h1.167v4.667Zm1.166 1.166H2.917V8.167h1.166v1.166ZM5.25 10.5H4.083V9.333H5.25V10.5Zm1.167 1.167H5.25V10.5h1.167v1.167Zm1.166 0v1.166H6.417v-1.166h1.166ZM8.75 10.5v1.167H7.583V10.5H8.75Zm1.167-1.167V10.5H8.75V9.333h1.167Zm1.166-1.166v1.166H9.917V8.167h1.166Zm0-4.667h1.167v4.667h-1.167V3.5Zm0 0V2.333H9.917V3.5h1.166ZM8.167 4.667H5.833V7h2.334V4.667Z" />
  </svg>
)

export default Pin
