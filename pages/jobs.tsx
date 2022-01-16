import type { GetStaticProps, NextPage } from 'next'
import Layout from '@/components/Layout'
import { File, JobData } from '@/types/index'

import { jobsData } from '@/lib/files'

type JobsProps = {
  jobs: File<JobData>[]
}

const Jobs: NextPage<JobsProps> = ({ jobs }) => {
  return (
    <Layout>
      {jobs.map(({ id, data, content }) => (
        <div key={id}>
          <h2>{data.company}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<JobsProps> = async () => {
  return {
    props: {
      jobs: jobsData,
    },
  }
}

export default Jobs
