import type { NextPage } from 'next'
import Image from 'next/image'
import groupEllipse from '../../assets/group.png'
import styles from './styles.module.scss'

const Logo: NextPage = () => {
  return (
    <div className={styles.logoWrapper}>
      <div className={styles.groupEllipse}>
        <div>
          <Image src={groupEllipse} alt="Ellipse 1 Logo Styre" />
        </div>
      </div>
      <div className={styles.textStyre}>
        <h2>Styre</h2>
      </div>
    </div>
  )
}

export default Logo
