import { FC } from 'react'
import styles from './Content.module.css'

const About: FC<{ content: string }> = ({ content }) => (
  <div
    className={[styles.contentContainer, styles.aboutContent].join(' ')}
    dangerouslySetInnerHTML={{ __html: content }}
  ></div>
)

export default About
