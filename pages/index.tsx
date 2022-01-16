import type { GetStaticProps, NextPage } from 'next'
import Layout from '@/components/Layout'
import { File, JobData, ProjectData } from '@/types/index'
import { jobsData, projectsData } from '@/lib/files'

type HomeProps = {
  jobs: File<JobData>[]
  projects: File<ProjectData>[]
}

const Home: NextPage<HomeProps> = ({ jobs, projects }) => {
  return (
    <Layout>
      {jobs.map(({ id, data, content }) => (
        <div key={id}>
          <h2>{data.company}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      ))}
      {projects.map(({ id, data, content }) => (
        <div key={id}>
          <h3>{data.project}</h3>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      jobs: jobsData,
      projects: projectsData,
    },
  }
}

export default Home
