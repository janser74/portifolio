import React, { useState, useEffect } from 'react';
import styles from './Inicio.module.css';
import { motion } from 'framer-motion';

/* Componente Inicio.
 * Exibe uma seção inicial com uma imagem que muda ao ser clicada.
 */

  const Inicio = () => {
    const [imagemAtual, setImagemAtual] = useState("../../assets/janser1.png"); // Estado para controlar a imagem exibida

    const imagens = [ // Lista de imagens disponíveis
      "../../assets/janser1.png",
      "../../assets/janserlogo.png",
      "../../assets/janser4.png",
      "../../assets/janser2.png",
    ];
  
    const handleClick = () => {
      // Ciclo de imagens ao clicar
      const indexAtual = imagens.indexOf(imagemAtual);
      const proximaImagem = imagens[(indexAtual + 1) % imagens.length];
      setImagemAtual(proximaImagem);
    };

  return (
    <section id="inicio" className={styles.inicio}>
        <section>
        <motion.img
          className={styles.logo}
          src={imagemAtual}
          alt="Minha Imagem"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }} // Ajuste a duração conforme necessário
          onClick={handleClick}
        />
           
            <section className={styles.titulo}>
                
                <h2>Bem-vindo ao Meu Portfólio</h2>
                <h4>Prazer, sou o Janser Souza </h4>
      
                <div className={styles.container}> 
                    <div>
                    <a href='https://www.linkedin.com/in/jansersouza/' target="_blank" rel="noreferrer"><img src='assets/linkedin.png' alt='linkedin'/></a>
                    </div>

                    <div>
                    <a href='https://github.com/janser74' target="_blank" rel="noreferrer"><img src='assets/github.png' alt='github'/></a>
                    </div>

                    <div>
                    <a href=" https://drive.google.com/file/d/1A7_vJIquvtIGNzbT9r4E3_1Kuj2ptDik/view?usp=sharing" target="_blank" rel="noreferrer" ><img src='assets/curriculo.png' alt='curriculo' /></a>
                    </div>
                   

                </div>

            </section>


        </section>

        
       
     <div className={styles.paragrafo}>
        <p>
            Sou um desenvolvedor front-end web com experiência em HTML, CSS, JavaScript, React.js, Next.js e consumo de APIs REST. 
            Atualmente, estou cursando Análise e Desenvolvimento de Sistemas, e ao longo dessa jornada acadêmica,
            tenho buscado conhecimentos nas tecnologias fundamentais para o desenvolvimento web, ampliando continuamente meu conjunto de habilidades.
        </p>
        <p>
            Ao navegar pelo meu portfólio, você encontrará uma variedade de projetos que refletem meu compromisso no desenvolvimento web. 
            Estou constantemente buscando oportunidades para aprender e crescer, explorando novas tecnologias e adotando as melhores práticas para oferecer soluções digitais de alta qualidade.
            Se você está em busca de um desenvolvedor web comprometido, estou pronto para enfrentar novos desafios e contribuir para o sucesso do seu projeto. 
            Vamos colaborar e transformar suas ideias em realidade!
        </p>
      </div>
    </section>
  );
};

export default Inicio;



