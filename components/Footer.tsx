import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Footer.module.scss'
import { Facebook, Instagram, LinkedIn } from './svgs/Socials'

export default function Footer() {
  const { pathname } = useRouter()

  return (
    <footer className={styles.container}>
      <div>
        <div className={styles.mobile_logo}>
          <img src="/brand/logo.png" alt="" />
        </div>

        <div className={styles.info}>
          <div className={styles.logo}>
            <img src="/brand/logo.png" alt="" />
          </div>

          <div className={styles.socials}>
            <h3>Follow</h3>
            <a
              href="https://www.facebook.com/Smart-Tech-Pro-LLC-111976191421624/?ref=pages_you_manage"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Facebook /> <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/smarttechpro22/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Instagram /> <span>Instagram</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedIn /> <span>LinkedIn</span>
            </a>
          </div>

          <div className={styles.contact}>
            <h3>Contact</h3>
            <div className={styles.address}>
              1695 NW 110th Ave Ste 213
              Miami, FL 33172, USA
            </div>
            <div>
              <a
                href="tel:17862387080"
                target="_blank"
                rel="noreferrer noopener"
              >
                +1 786 238-7080
              </a>
              <br />
              <a
                href="https://api.whatsapp.com/send?phone=17866700578&text=123"
                target="_blank"
                rel="noreferrer noopener"
              >
                +1 786 670-0578
              </a>
            </div>
            <div>
              <a href="mailto:info@smarttechpro.net">info@smarttechpro.net</a>
            </div>
          </div>
        </div>
        <div className={styles.copy}>
          <div>
            {new Date().getFullYear()} © Smart Tech Pro. All rights reserved.
          </div>

          <nav>
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
        </div>
      </div>
    </footer>
  )
}
