import { FC } from 'react'
import styles from './Card.module.css'

const Card: FC<{ className?: string }> = ({ children, className }) => (
  <div className={[styles.card, className].join(' ').trim()}>{children}</div>
)

export default Card
