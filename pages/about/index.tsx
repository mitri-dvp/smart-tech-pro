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
              <h1>Who We Are</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem maiores molestias velit rem fugit! Sint fugiat numquam nesciunt. Tempora ea, in nostrum ipsa expedita sunt officiis cum hic sit quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est itaque, deserunt, minus molestiae amet provident impedit illo, nisi ea labore nemo eligendi vel aut autem sapiente voluptatum atque non cumque!
              </p>
            </div>
            <div className={styles.image}>
              <img src="/assets/camara.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div>
          <h1>What We Do</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img src="/brand/icon.png" alt="" />
              <h1>Security Systems</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati cumque quia, in cupiditate iusto nulla ea soluta neque temporibus necessitatibus.</p>
            </div>
            <div className={styles.card}>
              <img src="/brand/icon.png" alt="" />
              <h1>Central Station Monitoring</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati cumque quia, in cupiditate iusto nulla ea soluta neque temporibus necessitatibus.</p>
            </div>
            <div className={styles.card}>
              <img src="/brand/icon.png" alt="" />
              <h1>File Alarm Systems</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati cumque quia, in cupiditate iusto nulla ea soluta neque temporibus necessitatibus.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
