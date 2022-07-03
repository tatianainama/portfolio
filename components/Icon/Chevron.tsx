import { Icon } from '@/types/index'
import { FC } from 'react'

const Chevron: FC<Icon> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#FC83A3" {...props}>
    <path d="M17 16L19 16L19 14L17 14L17 12L15 12L15 10L13 10L13 8L11 8L11 10L9 10L9 12L7 12L7 14L5 14L5 16L7 16L7 14L9 14L9 12L11 12L11 10L13 10L13 12L15 12L15 14L17 14L17 16Z" />
  </svg>
)

export default Chevron
