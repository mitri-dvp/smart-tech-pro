import Footer from '@components/Footer'
import Header from '@components/Header'
import Seo from '@components/Seo'
import Checkmark from '@components/svgs/Checkmark'
import type { NextPage } from 'next'
import styles from '@styles/Home.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRigth } from '@components/svgs/Arrows'
import { MutableRefObject, ReactChild, useRef } from 'react'
import Link from 'next/link'

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

      <section className={styles.hero}>
        <div>
          <div className={styles.content}>
            <h1>
              Get control of your safety home
            </h1>
            <p>
              Improve your quality of life and protect your loved ones with our electronic security systems. Request your quote now.
            </p>
            <div className={styles.buttons}>
              <button className='button_pill'>
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
              <h1>What We Do?</h1>
              <p>
                We generate energy savings by managing equipment and smart devices from remote locations, optimizing security schemes through home automation. Count on our support and use technology to your advantage.
              </p>
            </div>
            <div className={styles.image}>
              <img src="/assets/products/CCTV/003-1.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div>
          <h1>We Provide Awesome Services</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div
                className={styles.image_container}
                style={{ backgroundImage: "url(/assets/products/structured-cabling/001.jpg)" }}
              />
              <img src="/assets/products/structured-cabling/001.jpg" alt="structured-cabling" />
              <h1>Structured Cabling</h1>
            </div>

            <div className={styles.card}>
              <div
                className={styles.image_container}
                style={{ backgroundImage: "url(/assets/products/CCTV/002.jpg)" }}
              />
              <img src="/assets/products/CCTV/002.jpg" alt="CCTV" />
              <h1>Security Camera System (CCTV)</h1>
            </div>

            <div className={styles.card}>
              <div
                className={styles.image_container}
                style={{ backgroundImage: "url(/assets/products/access-control/002.jpg)" }}
              />
              <img src="/assets/products/access-control/002.jpg" alt="access-control" />
              <h1>Access Control for Personnel and Vehicles</h1>
            </div>

            <div className={styles.card}>
              <div
                className={styles.image_container}
                style={{ backgroundImage: "url(/assets/products/audio-video/004.jpg)" }}
              />
              <img src="/assets/products/audio-video/004.jpg" alt="audio-video" />
              <h1>Audio and Video for Interiors and Exteriors</h1>
            </div>

            <div className={styles.card}>
              <div
                className={styles.image_container}
                style={{ backgroundImage: "url(/assets/products/smart-home/001.jpg)" }}
              />
              <img src="/assets/products/smart-home/001.jpg" alt="smart-home" />
              <h1>Smart Home</h1>
            </div>

          </div>
        </div>
      </section>

      <section className={`${styles.large_card} ${styles.mirror}`}>
        <div>
          <div className={styles.card}>
            <div className={styles.content}>
              <h1>What We Provide</h1>
              <p>
                We help improve the quality of life of people and processes in companies, providing accessibility for managing equipment and smart devices from remote locations.
              </p>
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
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
              type: "custom"
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
                />
                <img src="/assets/products/structured-cabling/001.jpg" alt="" />
                <div className={styles.content}>
                  <h1>Structured Cabling</h1>
                  <button className='button_pill'>
                    <Link href="/service">
                      <a>Learn More</a>
                    </Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <div
                  className={styles.image_container}
                  style={{ backgroundImage: "url(/assets/products/CCTV/002.jpg)" }}
                />
                <img src="/assets/products/CCTV/002.jpg" alt="" />
                <div className={styles.content}>
                  <h1>Security Camera System (CCTV)</h1>
                  <button className='button_pill'>
                    <Link href="/service">
                      <a>Learn More</a>
                    </Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <div
                  className={styles.image_container}
                  style={{ backgroundImage: "url(/assets/products/access-control/002.jpg)" }}
                />
                <img src="/assets/products/access-control/002.jpg" alt="" />
                <div className={styles.content}>
                  <h1>Access Control for Personnel and Vehicles</h1>
                  <button className='button_pill'>
                    <Link href="/service">
                      <a>Learn More</a>
                    </Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <div
                  className={styles.image_container}
                  style={{ backgroundImage: "url(/assets/products/audio-video/004.jpg)" }}
                />
                <img src="/assets/products/audio-video/004.jpg" alt="" />
                <div className={styles.content}>
                  <h1>Audio and Video for Interiors and Exteriors</h1>
                  <button className='button_pill'>
                    <Link href="/service">
                      <a>Learn More</a>
                    </Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <div
                  className={styles.image_container}
                  style={{ backgroundImage: "url(/assets/products/smart-home/001.jpg)" }}
                />
                <img src="/assets/products/smart-home/001.jpg" alt="" />
                <div className={styles.content}>
                  <h1>Smart Home</h1>
                  <button className='button_pill'>
                    <Link href="/service">
                      <a>Learn More</a>
                    </Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={styles.buttons}>
            <button ref={slidePrev} className="swiper-button-prev">
              <ArrowLeft />
            </button>
            <button ref={slideNext} className="swiper-button-next">
              <ArrowRigth />
            </button>
          </div>
        </div>
      </section>

      <section className={styles.how_it_works}>
        <div>
          <h1>How It Works</h1>
          <div className={styles.line} />
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.number}>1</div>
              <h1>Order a Service</h1>
            </div>
            <div className={styles.card}>
              <div className={styles.number}>2</div>
              <h1>Installation</h1>
            </div>
            <div className={styles.card}>
              <div className={styles.number}>3</div>
              <h1>Enjoy Your Safety</h1>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
