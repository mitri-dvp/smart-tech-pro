import { useRef } from 'react'
import Link from 'next/link'
import type { NextPage } from 'next'

import Footer from '@components/Footer'
import Header from '@components/Header'
import Seo from '@components/Seo'
import Checkmark from '@components/svgs/Checkmark'
import { ArrowLeft, ArrowRigth, CaretLeft, CaretRigth } from '@components/svgs/Arrows'
import { Honest, Professional, Service, Support } from '@components/svgs/Services'

import styles from '@styles/Home.module.scss'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Phone from '@components/svgs/Phone'
import Envelope from '@components/svgs/Envelope'
import Location from '@components/svgs/Location'
import { Whatsapp } from '@components/svgs/Socials'

const Home: NextPage = () => {
  const slidePrev = useRef() as React.MutableRefObject<HTMLButtonElement>
  const slideNext = useRef() as React.MutableRefObject<HTMLButtonElement>
  return (
    <div className={styles.container}>
      <Seo
        metaTitle="Smart Tech Pro"
        metaDescription="Bienvenido a Smart Tech Pro"
        shareImage=""
      />

      <Header />

      <section id="hero" className={styles.hero}>
        <div>
          <div className={styles.content}>
            <h1>
              Take Control Of Your
              Home And Business
            </h1>
            <p>
              Transform your home or business with a personalized
              smart automation system and make it work for you with just a press of a
              button! Request you free quote now!
            </p>
            <div className={styles.buttons}>
              <button className='button_pill'>
                contact us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={`${styles.large_card}`}>
        <div>
          <div className={styles.card}>
            <div className={styles.content}>
              <h1>What We Can Do For You</h1>
              <p>
                We help you generate energy savings by managing equipment and
                smart devices from remote locations, optimizing control schemes
                through automation. Count on our support and use technology to
                your advantage.
              </p>
            </div>
            <div className={styles.image_container}>
              <Swiper
                slidesPerView={1}
                autoplay={{
                  delay: 2000
                }}
                loop={true}
                modules={[Autoplay]}
                className={styles.image_slider}
              >
                {["url(/assets/products/CCTV/003-1.jpg)", "url(/assets/products/CCTV/004-1.png)", "url(/assets/products/CCTV/005.jpg)", "url(/assets/products/CCTV/001.webp)", "url(/assets/products/CCTV/002-1.jpg)"].map((url, i) => (<SwiperSlide key={url}>
                  <div
                    className={styles.image}
                    style={{ backgroundImage: url }}
                  >
                  </div>
                </SwiperSlide>))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div>
          <h1>What We Provide</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Professional />
              <h1>Professional Staff</h1>
            </div>

            <div className={styles.card}>
              <Honest />
              <h1>License Contractor</h1>
            </div>

            <div className={styles.card}>
              <Service />
              <h1>Insurance</h1>
            </div>

            <div className={styles.card}>
              <Support />
              <h1>OSHA Certified</h1>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.large_card} ${styles.mirror}`}>
        <div>
          <div className={styles.card}>
            <div className={styles.content}>
              <h1>Our Services Include</h1>
              <ul>
                <li><Checkmark />Structured Cabling</li>
                <li><Checkmark />Security Camera System (CCTV)</li>
                <li><Checkmark />Access Control Systems</li>
                <li><Checkmark />Audio and Video for Interiors and Exteriors</li>
                <li><Checkmark />Smart Home</li>
              </ul>
            </div>
            <div className={styles.image_container}>
              <Swiper
                slidesPerView={1}
                autoplay={{
                  delay: 2000
                }}
                loop={true}
                modules={[Autoplay]}
                className={styles.image_slider}
              >
                {["url(/assets/products/CCTV/003-1.jpg)", "url(/assets/products/CCTV/004-1.png)", "url(/assets/products/CCTV/005.jpg)", "url(/assets/products/CCTV/001.webp)", "url(/assets/products/CCTV/002-1.jpg)"].map((url, i) => (<SwiperSlide key={url}>
                  <div
                    className={styles.image}
                    style={{ backgroundImage: url }}
                  >
                  </div>
                </SwiperSlide>))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className={styles.services_slider}>
        <div>
          <h1>Our Services</h1>
          <Swiper
            breakpoints={
              {
                320: {
                  slidesPerView: 1,
                  spaceBetween: 32
                },
                993: {
                  slidesPerView: 1,
                  spaceBetween: 32
                }
              }
            }
            pagination={{
              clickable: true,
              type: "bullets",
              bulletClass: styles.bullet,
              bulletActiveClass: styles.active
            }}
            navigation={{
              nextEl: slideNext.current || ".swiper-button-next",
              prevEl: slidePrev.current || ".swiper-button-prev",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={styles.card}>
                <div
                  className={styles.image_container}
                  style={{ backgroundImage: "url(/assets/products/structured-cabling/001.jpg)" }}
                >
                  <div className={styles.content}>
                    <h1>Structured Cabling</h1>
                    <p>
                      Cabling Systems, connectors and rackable devices that allow you to establish a telecommunications infrastructure in your home. We guarantee an adequate installation to the needs of the system to be established with compliance with the most advanced standards.
                    </p>
                    <a
                      href="https://api.whatsapp.com/send?phone=17866700578&text=123"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button className='button_pill'>
                        More Information
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <div
                  className={styles.image_container}
                  style={{ backgroundImage: "url(/assets/products/CCTV/002.jpg)" }}
                >
                  <div className={styles.content}>
                    <h1>Security Camera System (CCTV)</h1>
                    <p>
                      A CCTV or closed-circuit television is an installation of connected equipment that generates a circuit of images that can only be seen by a certain group of people, these are personalized to adapt to the needs of each client, whether they are oriented to security, surveillance or service improvement.
                    </p>
                    <a
                      href="https://api.whatsapp.com/send?phone=17866700578&text=123"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button className='button_pill'>
                        More Information
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <div
                  className={styles.image_container}
                  style={{ backgroundImage: "url(/assets/products/access-control/002.jpg)" }}
                >
                  <div className={styles.content}>
                    <h1>Access Control Systems</h1>
                    <p>
                      At Smart Tech Pro we work with advanced Access Control Systems,
                      which allow you to strengthen and protect the security of your home or
                      business. Automatically manage the opening and closing of doors,
                      elevators or turnstiles, validate the user&apos;s identity through passwords by
                      keyboard, card reading or biometrics, manage access, allowing or
                      restricting entry to a specific area.
                    </p>
                    <a
                      href="https://api.whatsapp.com/send?phone=17866700578&text=123"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button className='button_pill'>
                        More Information
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <div
                  className={styles.image_container}
                  style={{ backgroundImage: "url(/assets/products/audio-video/004.jpg)" }}
                >
                  <div className={styles.content}>
                    <h1>Audio and Video for Interiors and Exteriors</h1>
                    <p>
                      We present a broad range of the best audio components for enjoying the
                      music you love. Our selection dedicated to sound reproduction include
                      some of the highest performing products out there. Let us help you choose
                      the right audio components that will offer you excellent sound quality, suit
                      your decor and be simple to operate. We can design any system to fit every
                      application, taste and budget.
                    </p>
                    <a
                      href="https://api.whatsapp.com/send?phone=17866700578&text=123"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button className='button_pill'>
                        More Information
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <div
                  className={styles.image_container}
                  style={{ backgroundImage: "url(/assets/products/smart-home/001.jpg)" }}
                >
                  <div className={styles.content}>
                    <h1>Smart Home</h1>
                    <p>
                      A home equipped with lighting, heating, and electronic devices that can be controlled remotely by smartphone or computer. You can contact your smart home on the internet to make sure the dinner is cooked, the central heating is on, the curtains are drawn, and a gas fire is roaring in the grate when you get home
                    </p>
                    <a
                      href="https://api.whatsapp.com/send?phone=17866700578&text=123"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button className='button_pill'>
                        More Information
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className={styles.button_prev}>
              <button ref={slidePrev} className="swiper-button-prev">
                <CaretLeft />
              </button>
            </div>
            <div className={styles.button_next}>
              <button ref={slideNext} className="swiper-button-next">
                <CaretRigth />
              </button>
            </div>
          </Swiper>
        </div>
      </section >

      <section className={styles.how_it_works}>
        <div>
          <h1>How It Works</h1>
          <div className={styles.line} />
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.number}>1</div>
              <h1>Order a Service</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut aperiam quidem.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.number}>2</div>
              <h1>Installation</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut aperiam quidem.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.number}>3</div>
              <h1>Enjoy Your Safety</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut aperiam quidem.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.brands}>
        <div>
          <h1>Brands We Work With</h1>
          <div className={styles.logos}>
            <Swiper
              slidesPerView={5}
              autoplay={{
                delay: 2000
              }}
              loop={true}
              modules={[Autoplay]}
            >
              {["https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"].map((url, i) => (<SwiperSlide key={url + i}>
                <div className={styles.logo}>
                  <img src={url} />
                </div>
              </SwiperSlide>))}
            </Swiper>

          </div>
        </div>
      </section>

      <section id="contact" className={`${styles.large_card}`}>
        <div>
          <div className={styles.card}>
            <div className={styles.content}>
              <h1>Contact Us</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem maiores molestias velit rem fugit! Sint fugiat numquam nesciunt. Tempora ea, in nostrum ipsa expedita sunt officiis.
              </p>
              <div className={styles.contact_details}>
                <div className={styles.icon}>
                  <Location />
                </div>
                <p>
                  1695 NW 110th Ave Ste 213 <br />
                  Miami, FL 33172, USA
                </p>

                <div className={styles.icon}>
                  <Phone />
                </div>
                <p>
                  <a
                    href="tel:17862387080"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    +1 786 238-7080
                  </a>
                </p>

                <div className={styles.icon}>
                  <Whatsapp />
                </div>
                <p>
                  <a
                    href="https://api.whatsapp.com/send?phone=17866700578&text=123"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    +1 786 670-0578
                  </a>
                </p>

                <div className={styles.icon}>
                  <Envelope />
                </div>
                <p>
                  <a href="mailto:info@smarttechpro.net">info@smarttechpro.net</a>
                </p>
              </div>
            </div>
            <div className={styles.image_container}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4406.3467811215205!2d-80.37547734894368!3d25.78919978354391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bec9acbd8cf1%3A0xf5f001969fac263e!2s1695%20NW%20110th%20Ave%2C%20Doral%2C%20FL%2033172%2C%20EE.%20UU.!5e1!3m2!1ses-419!2sco!4v1647151892428!5m2!1ses-419!2sco"
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
    </div >
  )
}

export default Home
