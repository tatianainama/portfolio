import { Icon } from '@/types/index'
import { FC } from 'react'

const Heart: FC<Icon> = ({ size = 12, ...props }) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    fill="#fff"
    {...props}
  >
    <path d="M5.938 4H3.97v.985h-.984v.984H2v2.954h.985v.984h.984v.985h.985v.984h.984v.985h.985v.984h.984v-.984h.985v-.985h.984v-.984h.985v-.985h.984v-.984h.985V5.969h-.985v-.984h-.984V4H8.89v.985h-.984v.984h-.984v-.984h-.985V4Zm0 .985v.984h.985v.985h.984v-.985h.985v-.984h1.969v.984h.984v2.954h-.984v.984h-.985v.985h-.984v.984h-.985v.985h-.984v-.985h-.985v-.984h-.984v-.985h-.985v-.984h-.984V5.969h.984v-.984h1.97Z" />
  </svg>
)

export default Heart
