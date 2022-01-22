import { ProjectData } from '@/types/index'
import { FC } from 'react'

const Project: FC<{ data: ProjectData; content: string }> = ({
  content,
  data,
}) => (
  <div>
    <h2>{data.project}</h2>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
)

export default Project
