import { ProjectData } from '@/types/index'
import { FC } from 'react'
import Github from '../Icon/Github'
import Globe from '../Icon/Globe'
import styles from './Content.module.css'

const Project: FC<{ data: ProjectData; content: string }> = ({
  content,
  data: { project, website, github },
}) => (
  <div className={styles.contentContainer}>
    <header className={styles.contentHeader}>
      <h2>{project}</h2>
      <nav className={styles.contentHeaderNav}>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className={styles.iconLink}
          title="github"
          aria-label="Github repository"
        >
          <Github size={18} className={styles.icon} />
        </a>
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className={styles.iconLink}
            title="website"
            aria-label="See it live"
          >
            <Globe size={18} />
          </a>
        )}
      </nav>
    </header>
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className={styles.projectContent}
    />
  </div>
)

export default Project
