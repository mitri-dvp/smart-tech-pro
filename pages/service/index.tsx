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
              <h1>We Provide Awesome Services</h1>
              <ul>
                <li><Checkmark />Structured cabling</li>
                <li><Checkmark />Security camera system (CCTV)</li>
                <li><Checkmark />Access control for personnel and vehicles</li>
                <li><Checkmark />Audio and Video for interiors and exteriors</li>
                <li><Checkmark />Smart Home.</li>
              </ul>
            </div>
            <div className={styles.image}>
              <img src="/assets/products/CCTV/004.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services_2}>
        <div>
          <h1>Our Services</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div
                className={styles.image_container}
                style={{ backgroundImage: "url(/assets/products/structured-cabling/001.jpg)" }}
              />
              <img src="/assets/products/structured-cabling/001.jpg" alt="structured-cabling" />
              <div className={styles.content}>
                <h1>Structured Cabling</h1>
                <p>
                  System of cables, connectors, pipes and devices that allow you to establish a telecommunications infrastructure in your home. We guarantee an adequate installation to the needs of the system to be established with compliance with the most advanced standards.
                </p>
                <button className='button_pill'>Learn More</button>
              </div>
            </div>
            <div className={styles.card}>
              <div
                className={styles.image_container}
                style={{ backgroundImage: "url(/assets/products/CCTV/002.jpg)" }}
              />
              <img src="/assets/products/CCTV/002.jpg" alt="products/CCTV" />
              <div className={styles.content}>
                <h1>Security Camera System (CCTV)</h1>
                <p>
                  A CCTV or closed-circuit television is an installation of connected equipment that generates a circuit of images that can only be seen by a certain group of people, these are personalized to adapt to the needs of each client, whether they are oriented to security, surveillance or service improvement.
                </p>
                <button className='button_pill'>Learn More</button>
              </div>
            </div>
            <div className={styles.card}>
              <div
                className={styles.image_container}
                style={{ backgroundImage: "url(/assets/products/access-control/002.jpg)" }}
              />
              <img src="/assets/products/access-control/002.jpg" alt="access-control" />
              <div className={styles.content}>
                <h1>Access Control for Personnel and Vehicles</h1>
                <p>
                  We provide solutions in electromechanical automation for parking systems and parking barriers of medium and large dimensions. Powerful and versatile solutions that fully represent the reliability and technology of the best vehicle access controls in the world. We design systems for the most complex requirements, such as intensive use, typical of applications in community or industrial facilities.
                </p>
                <button className='button_pill'>Learn More</button>
              </div>
            </div>
            <div className={styles.card}>
              <div
                className={styles.image_container}
                style={{ backgroundImage: "url(/assets/products/audio-video/004.jpg)" }}
              />
              <img src="/assets/products/audio-video/004.jpg" alt="audio-video" />
              <div className={styles.content}>
                <h1>Audio and Video for Interiors and Exteriors</h1>
                <p>
                  0
                </p>
                <button className='button_pill'>Learn More</button>
              </div>
            </div>
            <div className={styles.card}>
              <div
                className={styles.image_container}
                style={{ backgroundImage: "url(/assets/products/smart-home/001.jpg)" }}
              />
              <img src="/assets/products/smart-home/001.jpg" alt="smart-home" />
              <div className={styles.content}>
                <h1>Smart Home</h1>
                <p>
                  A home equipped with lighting, heating, and electronic devices that can be controlled remotely by smartphone or computer. You can contact your smart home on the internet to make sure the dinner is cooked, the central heating is on, the curtains are drawn, and a gas fire is roaring in the grate when you get home
                </p>
                <button className='button_pill'>Learn More</button>
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
