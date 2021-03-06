import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import Footer from './layouts/footer'
//import HomeLayout from './layouts/home-layout'
import Logo from '../public/img/repositorio_web-05.png'
import Logo_guia_de_gestion from '../public/img/repositorio_web-01.png'
import Logo_buenas_practicas from '../public/img/repositorio_web-02.png'
import Logo_etapas from '../public/img/repositorio_web-03.png'

const Home = () => {

  return (
    <>
      <div className={styles.headerHome}>
        <Image src={Logo} placeholder="blur" width='488' height='87'></Image>
      </div>
    <div className={styles.containerRoot}>
      <Head>
        <title>Guía de gestión</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <div className={styles.grid}>
              <Link href="/guia_de_gestion"><a className={styles.rootHover}><Image src={Logo_guia_de_gestion} placeholder="blur" width='500' height='500' alt="Guía"></Image></a></Link>
          
              <Link href="/buenas_practicas"><a><Image src={Logo_buenas_practicas} placeholder="blur" width='350' height='350' alt="Buenas prácticas"></Image></a></Link>
          
              <Link href="/etapas"><a><Image src={Logo_etapas} placeholder="blur" width='350' height='350' alt="Etapas"></Image></a></Link>
          </div>
      </main>

    </div>
      <Footer />
    </>
  
  )
};

export default Home;