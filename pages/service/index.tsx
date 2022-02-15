import type { NextPage } from 'next'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Seo from '@components/Seo'
import styles from '@styles/Service.module.scss'
import Checkmark from '@components/svgs/Checkmark'

const Service: NextPage = () => {
  return (
    <div className={styles.container}>
      <Seo
        metaTitle="Smart Tech Pro | Service"
        metaDescription="Bienvenido a Smart Tech Pro"
        shareImage=""
      />

      <Header />

      <section className={styles.hero}>
        <div>
          <h1>Service</h1>
          <h2>home<span>/</span>service</h2>
        </div>
      </section>

      <section className={`${styles.large_card} ${styles.mirror}`}>
        <div>
          <div className={styles.card}>
            <div className={styles.content}>
              <h1>What we provide</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem maiores molestias velit rem fugit! Sint fugiat numquam nesciunt. Tempora ea, in nostrum ipsa expedita sunt officiis cum hic sit quibusdam.
              </p>
              <ul>
                <li><Checkmark/>Best Professional</li>
                <li><Checkmark/>Always Honest</li>
                <li><Checkmark/>Provide Our Special Service</li>
                <li><Checkmark/>24/7 Hours Support</li>
              </ul>
            </div>
            <div className={styles.image}>
              <img src="/assets/camara.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services_2}>
        <div>
          <h1>Our Services</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img src="/assets/service.jpg" alt="" />
              <div className={styles.content}>
                <h1>Security For Home</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati cumque quia, in cupiditate.</p>
                <button className='button_pill'>Read More</button>
              </div>
            </div>
            <div className={styles.card}>
              <img src="/assets/service.jpg" alt="" />
              <div className={styles.content}>
                <h1>Security For Home</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati cumque quia, in cupiditate.</p>
                <button className='button_pill'>Read More</button>
              </div>
            </div>
            <div className={styles.card}>
              <img src="/assets/service.jpg" alt="" />
              <div className={styles.content}>
                <h1>Security For Office</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati cumque quia, in cupiditate.</p>
                <button className='button_pill'>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Service
