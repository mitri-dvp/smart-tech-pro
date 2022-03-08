import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from '../styles/Header.module.scss'

import { useScrollPosition } from '@hooks/useScrollPosition.jsx'
import Burger from './svgs/Burger'


export default function Header() {
  const router = useRouter()
  const [showMobileLinks, setShowMobileLinks] = useState(false)
  const [fixed, setFixed] = useState(false)

  useScrollPosition(({ currPos }: any) => {
    if ((currPos.y * -1) > window.innerHeight - 16 * 7) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  })

  return (
    <>
      <header className={`${styles.container} ${fixed ? styles.fixed : ""}`}>
        <nav className={styles.desktop_nav}>
          <Link href="#">
            <a className={styles.logo}>
              <img src="/brand/logo.png" alt="" />
            </a>
          </Link>
          <Link href="#">
            <a>home</a>
          </Link>
          <Link href="#about">
            <a>about</a>
          </Link>
          <Link href="#services">
            <a>services</a>
          </Link>
          <Link href="#contact">
            <a>contact</a>
          </Link>
        </nav>

        <nav className={styles.mobile_nav} >
          <Link href="#">
            <a className={styles.logo}>
              <img src="/brand/logo.png" alt="" />
            </a>
          </Link>
          <button
            className={styles.burger}
            onClick={() => setShowMobileLinks(!showMobileLinks)}
            onBlur={() => setTimeout(() => {
              setShowMobileLinks(false)
            }, 0)}
          >
            <Burger />
          </button>
          <div className={`${styles.mobile_nav_links} ${showMobileLinks ? styles.active : ""}`}>
            <a onMouseDown={() => { router.push("#"); }}>home</a>
            <a onMouseDown={() => { router.push("#about"); }}>about</a>
            <a onMouseDown={() => { router.push("#services"); }}>services</a>
            <a onMouseDown={() => { router.push("#contact"); }}>contact</a>
          </div>
        </nav>
      </header>
    </>
  )
}
