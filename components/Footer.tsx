import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Footer.module.scss'

export default function Footer() {
  const router = useRouter()
  const isHome = router.pathname === '/'

  return (
    <footer className={styles.container}>
      <div>
        <img src="/brand/logo.png" alt="" />
        <div className={styles.socials}>

        </div>
        <div className={styles.copy}>
          {new Date().getFullYear()} © Smart Tech Pro. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
