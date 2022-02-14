import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from '../styles/Header.module.scss'

export default function Header() {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const [showMobileNav, setShowmobileNav] = useState(false)

  if(!isHome) return (
    <>
      <header className={`${styles.header} ${styles.desktop}`}>
        <nav>
          <Link href="/">
            <a></a>
          </Link>
        </nav>
      </header>
    </>
  )

  return (
    <>
      <header className={styles.container}>
        <nav>
          <Link href="/">
            <a className={styles.logo}>
              <img src="/brand/logo.png" alt="" />
            </a>
          </Link>
          <Link href="/">
            <a>home</a>
          </Link>
          <Link href="/about">
            <a>about</a>
          </Link>
          <Link href="/service">
            <a>service</a>
          </Link>
          <Link href="/contact">
            <a>contact</a>
          </Link>
        </nav>
      </header>
    </>
  )
}
