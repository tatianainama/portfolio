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

type HomeProps = {
  about: File<AboutData>
  jobs: File<JobData>[]
}

const Home: NextPage<HomeProps> = ({ about, jobs }) => {
  return (
    <div className="md:my-4 md:grid w-full mx-auto max-w-lg md:grid-cols-5 md:max-w-7xl shadow-lg">
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

      <aside className="md:col-span-2 border-4 border-background-light md:border-r-0">
        <div className="border-b-4 border-background-light">
          <video
            autoPlay
            loop
            muted
            className="object-cover object-right h-full md:min-h-[280px]"
          >
            <source
              src="/video/d915929b937c9d90fb0ee7077c42672e.webm"
              type="video/webm"
            />
          </video>
        </div>
        <div className="p-10">
          <ul className="space-y-2">
            <li>
              <Profile
                className="inline-block mr-2 mb-1 fill-orange"
                size={12}
              />
              <h1 className="text-orange inline-block">{about.data.name}</h1>
            </li>
            <li>
              <Briefcase
                className="inline-block mr-2 mb-1 fill-foreground"
                size={12}
              />
              {about.data.title}
            </li>
            <li>
              <Pin
                className="inline-block mr-2 mb-1 fill-foreground"
                size={12}
              />
              {about.data.location}
            </li>
            <li>
              <Git
                className="inline-block mr-2 mb-1 fill-foreground"
                size={12}
              />
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
                size={12}
              />
              {about.data.email}
            </li>
            <li>
              <Heart
                className="inline-block mr-2 mb-1 fill-foreground"
                size={13}
              />
              <ul className="inline-block align-top">
                {about.data.loves.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </aside>

      <main className="md:col-span-3 border-4 border-background-light">
        <header className="border-b-4 border-background-light p-10">
          <h2 className="text-cyan">About</h2>
          <div dangerouslySetInnerHTML={{ __html: about.content }} />
        </header>
        <div className="p-10">
          <h2 className="text-cyan">Experience</h2>
          <div className="">
            {jobs.map((job) => (
              <article key={job.id}>{job.data.company}</article>
            ))}
          </div>
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
