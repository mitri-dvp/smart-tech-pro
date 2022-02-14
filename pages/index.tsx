import Footer from '@components/Footer'
import Header from '@components/Header'
import Seo from '@components/Seo'
import Checkmark from '@components/svgs/Checkmark'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Seo
        metaTitle="Smart Tech Pro"
        metaDescription="Bienvenido a Smart Tech Pro"
        shareImage=""
      />

      <Header />

      <section className={styles.hero}>
        <div>
          <div className={styles.content}>
            <h1>
              Smart Tech Pro Helps Your Business Succeed
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nostrum eveniet odio ullam totam dolorem excepturi hic, labore commodi temporibus maiores nihil mollitia, delectus in corrupti debitis sed quod doloremque.
            </p>
            <div className={styles.buttons}>
              <button className='button_pill'>
                buy product
              </button>
              <button className='button_pill inverted'>
                contact us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.large_card}`}>
        <div>
          <div className={styles.card}>
            <div className={styles.content}>
              <h1>Our Story</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem maiores molestias velit rem fugit! Sint fugiat numquam nesciunt. Tempora ea, in nostrum ipsa expedita sunt officiis cum hic sit quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore beatae saepe perspiciatis eius magnam, quidem repellendus pariatur nemo libero error nulla obcaecati.
              </p>
              <button className='button_pill'>
                Read More
              </button>
            </div>
            <div className={styles.image}>
              <img src="/assets/camara.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div>
          <h1>We Provide Awesome Services</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img src="/brand/icon.png" alt="" />
              <h1>Service</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati cumque quia, in cupiditate iusto nulla ea soluta neque temporibus necessitatibus.</p>
            </div>
            <div className={styles.card}>
              <img src="/brand/icon.png" alt="" />
              <h1>Service</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati cumque quia, in cupiditate iusto nulla ea soluta neque temporibus necessitatibus.</p>
            </div>
            <div className={styles.card}>
              <img src="/brand/icon.png" alt="" />
              <h1>Service</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati cumque quia, in cupiditate iusto nulla ea soluta neque temporibus necessitatibus.</p>
            </div>
          </div>
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
                <h1>Service</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati cumque quia, in cupiditate.</p>
                <button className='button_pill'>Read More</button>
              </div>
            </div>
            <div className={styles.card}>
              <img src="/assets/service.jpg" alt="" />
              <div className={styles.content}>
                <h1>Service</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati cumque quia, in cupiditate.</p>
                <button className='button_pill'>Read More</button>
              </div>
            </div>
            <div className={styles.card}>
              <img src="/assets/service.jpg" alt="" />
              <div className={styles.content}>
                <h1>Service</h1>
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

export default Home
