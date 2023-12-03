import Head from 'next/head';
import styles from '../styles/pages.module.css';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title> Projeto SSG </title>
      </Head>

      <Navbar />

      <div className={styles.links}>
        <p className={styles.introducao1}> Olá, somos a B&G animais, e aqui temos diversos objetos que representam animais que existem no nosso planeta, para ter acesso a eles clique na palavra abaixo: </p>
        <a href='/objetos' className={styles.objetos}> Objetos </a>
        <p className={styles.introducao2}> Para uma descrição mais aprofundada de cada um deles, clique na palavra abaixo: </p>
        <a href='/descricao ' className={styles.descricao}> Descrição </a>
      </div>

      <Footer />
    </div>
  )
}