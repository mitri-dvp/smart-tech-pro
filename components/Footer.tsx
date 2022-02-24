import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Footer.module.scss'
import { Facebook, Instagram } from './svgs/Socials'

export default function Footer() {
  const { pathname } = useRouter()

  return (
    <footer className={styles.container}>
      <div>
        <img src="/brand/logo.png" alt="" />
        <div className={styles.info}>
          <div className={styles.contact}>
            <div className={styles.address}>
              1695 NW 110th Ave Ste 213
              Miami, FL 33172, USA
            </div>
            <div>
              (305) 440-6772
            </div>
            <div>
              <a href="mailto:jalizo@smarttechpro.net">jalizo@smarttechpro.net</a>
            </div>
          </div>
          <div className={styles.socials}>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Facebook />
            </a>
          </div>
        </div>
        <div className={styles.copy}>
          <div>
            {new Date().getFullYear()} © Smart Tech Pro. All rights reserved.
          </div>

          <nav>
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
        </div>
      </div>
    </footer>
  )
}
