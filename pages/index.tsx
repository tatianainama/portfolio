import type { GetStaticProps, NextPage } from 'next'
import { AboutData, File, JobData } from '@/types/index'
import { aboutData, jobsData } from '@/lib/files'

import Head from 'next/head'
import Profile from '@/components/Icon/Profile'
import Briefcase from '@/components/Icon/Briefcase'
import Pin from '@/components/Icon/Pin'
import Git from '@/components/Icon/Git'
import Email from '@/components/Icon/Email'
import Heart from '@/components/Icon/Heart'
import JobArticle from '@/components/JobArticle'
import Media from '@/components/Media'

type HomeProps = {
  about: File<AboutData>
  jobs: File<JobData>[]
}

const Home: NextPage<HomeProps> = ({ about, jobs }) => {
  return (
    <div className="layout">
      <Head>
        <title>{`${about.data.name} - ${about.data.title}`}</title>
        <meta
          property="og:title"
          content={`${about.data.name} - ${about.data.title}`}
        />
        <meta
          name="description"
          content="Hi! I'm a Sr. frontend developer, born in Argentina now based in The Netherlands. I love making websites, solving problems and training fox terriers"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta property="og:url" content="https://tatiana.inama.dev/" />
        <meta property="og:image" content="/OG.png" />
      </Head>

      <Media className="video md:col-span-2 bg-background" />
      <header className="about p-4 md:p-10 md:col-span-3 bg-background">
        <h2 className="text-secondary">About</h2>
        <div dangerouslySetInnerHTML={{ __html: about.content }} />
      </header>
      <aside className="aside md:col-span-2 bg-background p-4 md:p-10">
        <ul className="space-y-2">
          <li>
            <Profile
              className="inline-block mr-2 mb-1 fill-tertiary"
              size={14}
            />
            <h1 className="text-tertiary inline-block">{about.data.name}</h1>
          </li>
          <li>
            <Briefcase
              className="inline-block mr-2 mb-1 fill-foreground"
              size={12}
            />
            {about.data.title}
          </li>
          <li>
            <Pin className="inline-block mr-2 mb-1 fill-foreground" size={14} />
            {about.data.location}
          </li>
          <li>
            <Git className="inline-block mr-2 mb-1 fill-foreground" size={14} />
            <a
              href={`https://${about.data.github}`}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
              title={about.data.github}
            >
              {about.data.github}
            </a>
          </li>
          <li>
            <Email
              className="inline-block mr-2 mb-1 fill-foreground"
              size={14}
            />
            {about.data.email}
          </li>
          <li>
            <Heart
              className="inline-block mr-2 mb-1 fill-foreground"
              size={14}
            />
            <ul className="inline-block align-top">
              {about.data.loves.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        </ul>
      </aside>
      <main className="main p-4 md:p-10 md:col-span-3 bg-background overflow-y-scroll">
        <h2 className="text-secondary mb-4">Experience</h2>
        <div className="">
          {jobs.map((job) => (
            <JobArticle
              key={job.id}
              job={job}
              className="border-background-alt border-b-4 border-dotted pb-4 mb-4 md:pb-8 md:mb-8 last:pb-0 last:mb-0 last:border-0"
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      about: aboutData,
      jobs: jobsData,
    },
  }
}

export default Home
