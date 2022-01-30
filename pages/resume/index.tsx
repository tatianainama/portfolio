import Head from 'next/head'
import Navigation from '@/components/Navigation'

import styles from './Resume.module.css'
import { GetStaticProps, NextPage } from 'next/types'
import { File, JobData } from '@/types/index'
import { jobsData } from '@/lib/files'
import { parsePeriod } from '@/components/Period'
type JobsProps = {
  jobs: File<JobData>[]
}

const Resume: NextPage<JobsProps> = ({ jobs }) => (
  <div className={styles.resumeContainer}>
    <Head>
      <title>Tatiana Inama - Resume</title>
      <meta property="og:title" content="Tatiana Inama - Resume" />
      <meta
        name="description"
        content="Hey! I'm a Sr. frontend developer, born in Argentina now based in The Netherlands. Love making websites and solving problems"
      />
      <meta property="og:type" content="website" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta property="og:url" content={`https://tatiana.inama.dev/resume`} />
      <meta property="og:image" content="/OG.png" />
    </Head>
    <div className={styles.resume}>
      <Navigation />
      <h1>Resume</h1>
      {jobs.map(
        ({
          id,
          data: {
            company,
            from,
            to,
            jobTitle,
            resume,
            jobTitleStatus,
            project,
          },
        }) => {
          const { from: fromDate, to: toDate } = parsePeriod(from, to)
          return (
            <div key={id}>
              <header>
                <h2>
                  {project ? `${project} - ` : ''}
                  {company}
                </h2>
                <h3>
                  {jobTitle} {jobTitleStatus && <small>{jobTitleStatus}</small>}
                </h3>
                <p>{`${fromDate} - ${toDate}`}</p>
              </header>
              <p>{resume}</p>
            </div>
          )
        }
      )}
    </div>
  </div>
)

export const getStaticProps: GetStaticProps<JobsProps> = async () => {
  return {
    props: {
      jobs: jobsData,
    },
  }
}

export default Resume
