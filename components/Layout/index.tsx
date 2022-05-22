import Head from 'next/head'
import { FC } from 'react'
import Profile from '@/components/Profile'
import styles from './Layout.module.css'

type Layout = {
  title?: string
  description?: string
  section?: string
}

const Layout: FC<Layout> = ({
  title = `Tatiana Inama - Sr. Frontend Developer`,
  description = `Hey! I'm a Sr. frontend developer, born in Argentina now based in The Netherlands. I love making websites and solving problems`,
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

      <div>
        <header className="">
          <div className=""></div>
        </header>

        <main className="">
          <div className="">
            <div className="">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout
