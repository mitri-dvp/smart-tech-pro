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
    phone: '',
    city: '',
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
                  <Phone />
                </div>
                <p>
                  (305) 440-6772
                </p>
                <div className={styles.icon}>
                  <Envelope />
                </div>
                <p>
                  <a href="mailto:jalizo@smarttechpro.net">jalizo@smarttechpro.net</a>
                </p>
                <div className={styles.icon}>
                  <Location />
                </div>
                <p>
                  1695 NW 110th Ave Ste 213 <br />
                  Miami, FL 33172, USA
                </p>
              </div>
            </div>
            <div className={styles.image}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.4355922519408!2d-80.37547734894368!3d25.78919978354391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bec9acbd8cf1%3A0xf5f001969fac263e!2s1695%20NW%20110th%20Ave%2C%20Doral%2C%20FL%2033172%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sco!4v1644958318714!5m2!1ses-419!2sco"
                width="100%"
                height="100%"
                allowFullScreen
                style={{ border: 0 }}
                loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
