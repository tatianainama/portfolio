import type { GetStaticProps, NextPage } from 'next'
import Layout from '@/components/Layout'
import { AboutData, File } from '@/types/index'
import { aboutData } from '@/lib/files'

type HomeProps = {
  about: File<AboutData>
}

const Home: NextPage<HomeProps> = ({ about }) => {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: about.content }} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      about: aboutData,
    },
  }
}

export default Home
