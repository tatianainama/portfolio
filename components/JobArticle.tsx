import { FC } from 'react'
import { JobData, File } from '../types'

const JobArticle: FC<{ job: File<JobData> }> = ({ job }) => (
  <article>
    <h3>{job.data.company}</h3>
    <div>
      <aside>
        <ul className="flex items-center">
          {job.data.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </aside>
      <section dangerouslySetInnerHTML={{ __html: job.content }} />
    </div>
  </article>
)

export default JobArticle
