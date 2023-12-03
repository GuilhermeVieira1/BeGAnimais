import React from 'react';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import styles from '../styles/pages.module.css';

function Objetos({ animais }) {
    return (
        <div className={styles.home}>
            <Navbar/>
            <h1 className={styles.titulo}> Descrição dos Objetos </h1>
            {animais.map((animal) => (
                <div key={animal.id}>
                    <h2 className={styles.objeto}> {animal.nome} </h2>
                    <h3 className={styles.user}> {animal.usuario} </h3>
                    <p> {animal.descricao} </p>
                    <hr/>
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