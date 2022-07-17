import { FC, useState } from 'react'
import { JobData, File } from '../types'
import Chevron from './Icon/Chevron'

const JobArticle: FC<{ job: File<JobData>; className?: string }> = ({
  job,
  className,
}) => {
  const [expanded, setExpand] = useState(false)

  return (
    <article className={className}>
      <header className="text-lg">
        <h3
          className={`py-1 flex justify-between items-center transition-opacity text-primary cursor-pointer hover:opacity-90 ${
            expanded ? 'opacity-100' : 'opacity-75'
          }`}
          onClick={() => setExpand(!expanded)}
        >
          {job.data.company}{' '}
          {job.data.jobTitleStatus ? (
            <small className="ml-1 flex-1 opacity-75">
              [{job.data.jobTitleStatus}]
            </small>
          ) : (
            ''
          )}
          <Chevron
            className={`fill-primary transition-transform transform ${
              expanded ? 'rotate-0' : 'rotate-180'
            }`}
          />
        </h3>
        <h4 className="flex flex-col md:flex-row md:justify-between md:items-center opacity-75 text-sm">
          <span>{job.data.jobTitle}</span>
          <span>
            {job.data.from.replace('-', '.')}
            {' → '}
            {job.data.to?.replace('-', '.') || 'PRESENT'}
          </span>
        </h4>
      </header>
      <div
        className={`overflow-hidden transition-all ${
          expanded ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <aside className="text-sm">
          <ul className="flex items-center opacity-50">
            {job.data.tags.map((tag) => (
              <li
                key={tag}
                className="after:content-['*'] after:mx-2 last:after:content-['']"
              >
                {tag}
              </li>
            ))}
          </ul>
        </aside>
        <section dangerouslySetInnerHTML={{ __html: job.content }} />
      </div>
    </article>
  )
}

export default JobArticle
