import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Projetos.module.css';

const projectsData = [
  {
    title: 'Lafeto Confeitaria',
    description: 'Bem-vindo à nossa página de confeitaria, onde destacamos nosso cardápio irresistível. Nosso projeto se destaca pela exibição dinâmica de produtos, usando props e variáveis de estado. Oferecemos uma busca intuitiva por nome ou categoria, construída com JavaScript, proporcionando uma interação ágil e personalizada para o usuário. Clique na imagem e explore nossas delícias e experimente uma jornada digital deliciosa conosco!',
    image: '/assets/lafeto.png',
    linkSite:'https://lafeto.vercel.app/',
    link: 'https://github.com/janser74/lafeto',
  },
  {
    title: 'Portifolio',
    description: 'Bem-vindo ao meu portfólio desenvolvido em Next.js, uma página web que destaca informações sobre mim. Essa plataforma se destaca pela criação de um layout responsivo, adaptável a diversas telas, garantindo uma experiência consistente. O grande diferencial está na exibição dinâmica de componentes, proporcionando uma navegação envolvente e interativa.',
    image: '/assets/portifolio.png',
    link: 'https://github.com/janser74',
  },
  {
    title: 'Jogo Palavra Secreta',
    description: 'Bem-vindo ao "Jogo Secret Words", uma experiência interativa desenvolvida em React. Os jogadores caçam palavras, digitando letras aleatórias para acumular pontuações ao acertar. Destaque do projeto é a eficaz utilização de Hooks, proporcionando uma experiência dinâmica e eficiente. Explore a combinação única de diversão e tecnologia, onde a interação do usuário e a implementação de Hooks elevam a qualidade do jogo.',
    image: '/assets/jogo.png',
    linkSite:'https://palavras-secretas1.vercel.app/',
    link: 'https://github.com/janser74/palavrasSecretas1',
  },
  {
    title: 'Sorveteria',
    description: 'Apresento um projeto de sorveteria desenvolvido em React, destacando-se pela implementação de uma Single Page Application (SPA) e pelo uso eficiente da biblioteca React Router Dom. Explore este projeto para vivenciar a combinação única de eficiência técnica e estética que cria uma jornada digital envolvente.',
    image: '/assets/sorveteria.png',
    linkSite:'https://sorveteria-vert.vercel.app/',
    link: 'https://github.com/janser74/sorveteria',
  },
];

const Projetos = () => {

  //logica para o efeito carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  // troca de imagens automaticas
        autoplaySpeed: 3000, //tempo para troca de imagens
    };

  return (
    <main id="projetos" className={styles.principal}>

                <h1>Projetos de Desenvolvimento</h1>

        
            <Slider {...settings} className={styles.container}>
                {projectsData.map((project, index) => (

                <div key={index} className={styles.project}>

                     <a href={project.linkSite} target="_blank" rel="noreferrer">
                            <img src={project.image} alt={project.title} />
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>  
                    </a>

                     <a  className={styles.linkGit} href={project.link} target="_blank" rel="noreferrer">
                            <img src='assets/github.png' alt='github'/>
                     </a>

                </div>
                ))}
            </Slider>
      
      
    </main>
  );
};

export default Projetos;



