import Head from 'next/head'
import { FC } from 'react'
import Navigation from '@/components/Navigation'
import Profile from '@/components/Profile'
import styles from './Layout.module.css'

type Layout = {
  title?: string
  description?: string
  section?: string
}

const Layout: FC<Layout> = ({
  title = `Tatiana Inama - Sr. Frontend Developer`,
  description = `Hey! I'm a Sr. frontend developer, born in Argentina now based in The Netherlands. Love making websites and solving problems`,
  section = '',
  children,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          property="og:url"
          content={`https://tatiana.inama.dev/${section}`}
        />
        <meta property="og:image" content="/OG.png" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Profile />
        </div>
        <ul className={styles.headerBio}>
          <li>Breakfast devotee</li>
          <li>Espresso aficionado</li>
          <li>
            Mother of foxes <i>terrier</i>
          </li>
          <li>Master of some</li>
        </ul>
      </header>

      <main className={styles.main}>
        <div className={styles.mainContent}>
          <Navigation />
          <div className={styles.content}>{children}</div>
        </div>
      </main>
    </div>
  )
}

export default Layout
