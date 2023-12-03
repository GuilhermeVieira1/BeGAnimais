import React from 'react';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import styles from '../styles/pages.module.css';

function Objetos({ animais }) {
    return (
        <div className={styles.home}>
            <Navbar/>

            <h1 className={styles.titulo}> Objetos dos Animais </h1>

            {animais.map((animal) => (
                <div key={animal.id}>
                    <h2 className={styles.objeto}> {animal.nome} </h2>
                </div>
            ))}

            <a href='/' className={styles.voltar}> Voltar </a>

            <Footer/>
        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal');
    const repo = await res.json();
    const animais = await repo;
    return {
        props: { animais }
    }
})

export default Objetos;