import type { GetStaticProps, NextPage } from 'next'
import Layout from '@/components/Layout'
import Project from '@/components/Content/Project'
import { File, ProjectData } from '@/types/index'

import { projectsData } from '@/lib/files'

type ProjectsProps = {
  projects: File<ProjectData>[]
}

const Jobs: NextPage<ProjectsProps> = ({ projects }) => {
  return (
    <Layout section="projects">
      {projects.map(({ id, data, content }) => (
        <Project key={id} data={data} content={content} />
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
