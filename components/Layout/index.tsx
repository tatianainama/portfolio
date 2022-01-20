import Head from 'next/head'
import { FC } from 'react'
import Navigation from '@/components/Navigation'
import Avatar from '@/components/Avatar'
import styles from './Layout.module.css'

type Layout = {
  title?: string
  description?: string
}

const Layout: FC<Layout> = ({
  title = `Tatiana Inama - Javascript developer`,
  description = '',
  children,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Avatar />
        </div>
      </header>

      <main className={styles.main}>
        <Navigation />
        <div className={styles.mainContainer}>{children}</div>
      </main>
    </div>
  )
}

export default Layout
