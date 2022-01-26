import { Icon } from '@/types/index'
import { FC } from 'react'

const Globe: FC<Icon> = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="#000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.125 0A8.02 8.02 0 0 0 1.72 2.816h2.67c.118-.325.24-.642.38-.933C5.137 1.121 5.595.47 6.125 0Zm3.75 0c.53.47.988 1.121 1.356 1.883.14.29.262.608.38.933h2.67A8.019 8.019 0 0 0 9.875 0ZM7.447.45c-.591.246-1.188.88-1.685 1.909-.07.144-.134.3-.198.458h1.883V.449Zm1.106 0v2.367h1.883a8.311 8.311 0 0 0-.198-.458C9.74 1.33 9.144.696 8.553.449ZM.976 3.921A7.953 7.953 0 0 0 0 7.24h3.585c.038-1.19.2-2.308.458-3.318H.976Zm4.216 0c-.274.98-.459 2.108-.5 3.318h2.755V3.922H5.192Zm3.361 0V7.24h2.756a14.232 14.232 0 0 0-.501-3.318H8.553Zm3.404 0c.259 1.01.42 2.129.458 3.318H16a7.953 7.953 0 0 0-.976-3.318h-3.067ZM0 8.346a7.952 7.952 0 0 0 .977 3.317h3.067a15.459 15.459 0 0 1-.458-3.317H0Zm4.691 0c.042 1.21.226 2.338.502 3.317h2.254V8.346H4.691Zm3.862 0v3.317h2.255c.275-.98.459-2.107.5-3.317H8.554Zm3.862 0a15.45 15.45 0 0 1-.458 3.317h3.067A7.953 7.953 0 0 0 16 8.346h-3.585ZM1.719 12.769a8.019 8.019 0 0 0 4.406 2.816c-.53-.47-.988-1.121-1.356-1.883a9.894 9.894 0 0 1-.389-.933H1.72Zm3.845 0c.061.152.127.301.198.45.497 1.028 1.093 1.677 1.685 1.926v-2.376H5.564Zm2.989 0v2.376c.591-.25 1.188-.898 1.684-1.927.071-.148.137-.297.2-.45H8.552Zm3.067 0c-.119.327-.248.64-.389.933-.368.762-.826 1.413-1.356 1.883a8.02 8.02 0 0 0 4.406-2.816H11.62Z" />
  </svg>
)

export default Globe
