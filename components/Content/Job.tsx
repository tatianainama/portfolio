import { FC } from 'react'
import { JobData } from '@/types/index'
import Period from '@/components/Period'
import styles from './Content.module.css'

const Job: FC<{ content: string; data: JobData }> = ({
  data: { company, jobTitle, tags, from, to, jobTitleStatus, project },
  content,
}) => (
  <div className={styles.job}>
    <header>
      <h2>
        {project && `${project} - `}
        {company}
        <small>
          {jobTitle}
          {jobTitleStatus && <span> [{jobTitleStatus}]</span>}
        </small>
      </h2>
      <Period from={from} to={to} />
    </header>
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className={styles.jobContent}
    />
  </div>
)

export default Job
