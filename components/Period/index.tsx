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

export const parsePeriod = (from: string, to?: string) => {
  const fromDate = new Date(from)
  const toDate = to ? new Date(to) : undefined
  const dateToString = (date?: Date) =>
    date ? `${MONTHS[date.getMonth()]} ${date.getFullYear()}` : `present`
  return {
    from: dateToString(fromDate),
    to: dateToString(toDate),
  }
}

const Period: FC<{ from: string; to?: string }> = ({ from, to }) => {
  const { from: fromDate, to: toDate } = parsePeriod(from, to)
  return (
    <p className={styles.period}>
      <span>{fromDate}</span>
      <span>{toDate}</span>
    </p>
  )
}

export default Period
