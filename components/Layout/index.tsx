import Head from 'next/head'
import { FC } from 'react'
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
          <h1>
            Tatiana Inama <small>Javascript Developer</small>
          </h1>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainContainer}>{children}</div>
      </main>
    </div>
  )
}

export default Layout
