import type { NextPage } from 'next'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Seo from '@components/Seo'
import styles from '@styles/About.module.scss'

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Seo
        metaTitle="Smart Tech Pro | About"
        metaDescription="Bienvenido a Smart Tech Pro"
        shareImage=""
      />

      <Header />

      <section className={styles.hero}>
        <div>
          <h1>About</h1>
          <h2>home<span>/</span>about us</h2>
        </div>
      </section>

      <section className={`${styles.large_card}`}>
        <div>
          <div className={styles.card}>
            <div className={styles.content}>
              <h1>What We Do?</h1>
              <p>
                We generate energy savings by managing equipment and smart devices from remote locations, optimizing security schemes through home automation. Count on our support and use technology to your advantage.
              </p>
            </div>
            <div className={styles.image}>
              <img src="/assets/camara.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
