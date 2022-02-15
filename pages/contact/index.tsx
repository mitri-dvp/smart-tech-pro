import React, { FormEventHandler, FormHTMLAttributes, useState } from 'react'
import type { NextPage } from 'next'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Seo from '@components/Seo'
import styles from '@styles/Contact.module.scss'
import Location from '@components/svgs/Location'
import Phone from '@components/svgs/Phone'
import Envelope from '@components/svgs/Envelope'

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }


  return (
    <div className={styles.container}>
      <Seo
        metaTitle="Smart Tech Pro | Contact"
        metaDescription="Bienvenido a Smart Tech Pro"
        shareImage=""
      />

      <Header />

      <section className={styles.hero}>
        <div>
          <h1>Contact</h1>
          <h2>home<span>/</span>service</h2>
        </div>
      </section>

      <section className={`${styles.large_card}`}>
        <div>
          <div className={styles.card}>
            <div className={styles.content}>
              <h1>Contact Us</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem maiores molestias velit rem fugit! Sint fugiat numquam nesciunt. Tempora ea, in nostrum ipsa expedita sunt officiis.
              </p>
              <div className={styles.contact_details}>
                <div className={styles.icon}>
                  <Phone/>
                </div>
                <p>
                  +01 (000) 234 765 <br />
                  +01 (000) 234 765
                </p>
                <div className={styles.icon}>
                  <Envelope/>
                </div>
                <p>
                  contactus@gmail.com <br />
                  anothermailus@gmail.com
                </p>
                <div className={styles.icon}>
                  <Location/>
                </div>
                <p>
                  3010 Lauler Lee <br />
                  Blaine, MN 55414, USA
                </p>
              </div>
            </div>
            <div className={styles.image}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91597873747!2d-74.12010676022567!3d40.69740302639834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNueva%20York%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sco!4v1644899247741!5m2!1ses-419!2sco"
                width="100%"
                height="100%"
                allowFullScreen
                style={{border: 0}}
                loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.form}>
        <div>
          <h1>Our Services</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                type="text"
                required
              />
            </label>
            <label>
              <span>Email</span>
              <input
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                type="email"
                required
              />
            </label>
            <label style={{gridColumn: "span 2"}}>
              <span>Message</span>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                cols={30}
                rows={10}
                required
              ></textarea>
            </label>
            <button
              className='button_pill'
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
