import { FC } from 'react'
import styles from './Period.module.css'

const MONTHS = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
]

const Period: FC<{ from: string; to?: string }> = ({ from, to }) => {
  const fromDate = new Date(from)
  const toDate = to ? new Date(to) : undefined
  const dateToString = (date?: Date) =>
    date ? `${MONTHS[date.getMonth()]} ${date.getFullYear()}` : `present`

  return (
    <p className={styles.period}>
      <span>{dateToString(fromDate)}</span>
      <span>{dateToString(toDate)}</span>
    </p>
  )
}

export default Period
