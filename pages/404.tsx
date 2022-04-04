import Seo from "@components/Seo";
import Header from "@components/Header";
import Footer from "@components/Footer";

import styles from '@styles/NotFound.module.scss'
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Seo
        metaTitle="Smart Tech Pro"
        metaDescription="Bienvenido a Smart Tech Pro"
        shareImage=""
      />

      <Header />

      <div className={styles.container}>

        <main>
          <h1>404 - Page Not Found</h1>
          <h1 className="button_pill">
            <Link href="/">
              <a>Go To Homepage</a>
            </Link>
          </h1>
        </main>

        <Footer />
      </div>
    </div>

  )
}