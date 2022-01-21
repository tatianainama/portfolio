import type { GetStaticProps, NextPage } from 'next'
import Layout from '@/components/Layout'
import { File, ProjectData } from '@/types/index'

import { projectsData } from '@/lib/files'

type ProjectsProps = {
  projects: File<ProjectData>[]
}

const Jobs: NextPage<ProjectsProps> = ({ projects }) => {
  return (
    <Layout>
      {projects.map(({ id, data, content }) => (
        <div key={id}>
          <h2>{data.project}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  return {
    props: {
      projects: projectsData,
    },
  }
}

export default Jobs
