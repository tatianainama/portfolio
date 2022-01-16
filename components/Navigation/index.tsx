import Link from 'next/link'
import { FC } from 'react'
import { useRouter } from 'next/router'

import styles from './Navigation.module.css'

const NAV = [
  {
    path: '/',
    label: 'home',
  },
  {
    path: '/jobs',
    label: 'jobs',
  },
  {
    path: '/projects',
    label: 'personal projects',
  },
]

const Navigation: FC = () => {
  const { asPath } = useRouter()
  return (
    <nav className={styles.navigation}>
      <ul>
        {NAV.map(({ path, label }) => (
          <li key={path}>
            <Link href={path}>
              <a className={asPath === path ? styles.active : ''}>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
