import type { GetStaticProps, NextPage } from 'next'
import Layout from '@/components/Layout'
import { File, JobData } from '@/types/index'

import { jobsData } from '@/lib/files'
import Job from '@/components/Content/Job'

type JobsProps = {
  jobs: File<JobData>[]
}

const Jobs: NextPage<JobsProps> = ({ jobs }) => {
  return (
    <Layout>
      {jobs.map(({ id, data, content }) => (
        <Job key={id} data={data} content={content} />
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
