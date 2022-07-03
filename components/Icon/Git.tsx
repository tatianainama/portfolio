import { Icon } from '@/types/index'
import { FC } from 'react'

const Git: FC<Icon> = ({ size = 12, ...props }) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    fill="#fff"
    {...props}
  >
    <path d="M1.167 1.167h4.666v4.666h-1.75v7H2.917v-7h-1.75V1.167Zm1.166 1.166v2.334h2.334V2.333H2.333ZM7 2.917h4.136v5.25h1.697v4.666H8.167V8.167h1.802V4.083H7V2.917Zm2.333 6.416v2.334h2.334V9.333H9.333Z" />
  </svg>
)

export default Git
