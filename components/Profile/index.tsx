import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profile from '../../public/images/pf.jpg'

import styles from './Profile.module.css'
import Github from '../Icon/Github'
import Instagram from '../Icon/Instagram'
import Globe from '../Icon/Globe'

const Profile: FC = () => (
  <div className={styles.profileContainer}>
    <Image
      className={styles.profilePicture}
      src={profile}
      alt="Tatiana Inama profile picture"
      width={64}
      height={64}
    />
    <div>
      <h1 className={styles.profileTitle}>Tatiana Inama</h1>
      <nav className={styles.profileNav}>
        <ul>
          <li>
            <a
              href="https://github.com/tatianainama/"
              target="_blank"
              rel="noreferrer"
              title="Github"
            >
              <Github size={16} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/inamatatiana/"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <Instagram size={16} />
            </a>
          </li>
          <li>
            <Link href="/">
              <a title="Website">
                <Globe size={16} />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Profile
