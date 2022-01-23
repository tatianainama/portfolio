import { FC } from 'react'
import { JobData } from '@/types/index'
import Period from '@/components/Period'
import styles from './Content.module.css'

const Job: FC<{ content: string; data: JobData }> = ({
  data: { company, website, jobTitle, tags, from, to, jobTitleStatus, project },
  content,
}) => (
  <div className={styles.contentContainer}>
    <header className={styles.contentHeader}>
      <h2>
        {project && `${project} - `}
        <a
          href={website}
          target="_blank"
          rel="noreferrer"
          className={styles.externalLink}
        >
          {company}
        </a>
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
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  </div>
)

export default Job
