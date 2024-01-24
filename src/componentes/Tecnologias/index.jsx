import React from 'react';
import Link from 'next/link';
import styles from './Tecnologias.module.css';

//array com as tecnologias
const tecData = [
  {
    title: 'HTML 5',
    description: 'Possuo habilidades avançadas em HTML, focando na criação de estruturas semânticas e acessíveis para páginas web. Minha expertise abrange o uso eficaz de tags, elementos e atributos, garantindo uma apresentação consistente e interpretável pelos navegadores.',
    image: '/assets/html.png',
  },
  {
    title: 'CSS3',
    description: 'A estilização é a alma de uma boa interface, e meu conhecimento em CSS3 permite que eu crie designs visuais atraentes e responsivos. Utilizo técnicas avançadas, como Flexbox, Grid, animações e transições para garantir layouts elegantes em diversas plataformas.',
    image: '/assets/css.png',
  },
  {
    title: 'JavaScript',
    description: 'Tenho amplo conhecimento em JavaScript, abrangendo desde a manipulação eficaz do DOM até o desenvolvimento de lógica complexa para interações dinâmicas em páginas web. ',
    image: '/assets/js.png',
  },
  {
    title: 'React',
    description: 'Mergulhei profundamente no ecossistema React, construindo aplicações de página única (SPAs) que proporcionam uma navegação suave e interações dinâmicas. Componentização é a chave, e eu sou especialista em criar componentes reutilizáveis para garantir a manutenibilidade e escalabilidade do código.',
    image: '/assets/react.png',
  },

  {
    title: 'Next.js',
    description: 'Impulsionando minhas aplicações React com Next.js, otimizo a performance e a experiência do usuário. O servidor renderizado e as capacidades de geração estática tornam minhas aplicações rápidas e eficientes.',
    image: '/assets/next.png',
  },

  {
    title: 'API REST',
    description: 'Aprimoramento do Consumo de APIs REST com Express.js, enfatizando a criação eficiente de endpoints, adoção de boas práticas de desenvolvimento, implementação de testes e otimização de desempenho.',
    image: '/assets/api.png',
  },
  
];

const Tecnologias = () => {
  return (
    <main id="tecnologias" className={styles.principal}>
            {/* Título da seção */}
                <h1>Tecnologias</h1>

        {/* Container para as tecnologias */}
            <section className={styles.container}>
                {tecData.map((tec, index) => (

                <div key={index} className={styles.tec}>
                    
                    <img src={tec.image} alt={tec.title} />
                    <h3>{tec.title}</h3>
                    <p>{tec.description}</p>  

                </div>
                ))}
            </section>
      
      
    </main>
  );
};

export default Tecnologias;