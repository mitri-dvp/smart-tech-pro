import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from '../styles/Header.module.scss'

export default function Header() {
  const { pathname } = useRouter()
  const [showMobileNav, setShowmobileNav] = useState(false)

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
            <a className={pathname === '/' ? styles.active : ''}>home</a>
          </Link>
          <Link href="/about">
            <a className={pathname === '/about' ? styles.active : ''}>about</a>
          </Link>
          <Link href="/service">
            <a className={pathname === '/service' ? styles.active : ''}>service</a>
          </Link>
          <Link href="/contact">
            <a className={pathname === '/contact' ? styles.active : ''}>contact</a>
          </Link>
        </nav>
      </header>
    </>
  )
}
