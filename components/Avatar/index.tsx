import { FC } from 'react'
import Image from 'next/image'
import profile from '../../public/images/pf.jpg'

import styles from './Avatar.module.css'

const Avatar: FC = () => (
  <div className={styles.avatarContainer}>
    <Image
      className={styles.profilePicture}
      src={profile}
      alt="Tatiana Inama profile picture"
      width={50}
      height={50}
    />
    <h1 className={styles.avatarTitle}>
      Tatiana Inama<small>Javascript Developer</small>
    </h1>
  </div>
)

export default Avatar
