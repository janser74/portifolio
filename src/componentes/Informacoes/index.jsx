import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './Informacoes.module.css';
import Link from 'next/link';

const Informacoes = () => {
  
  const contatos = [
    
    { 
      name:'janser-10@hotmail.com',
      imagem:'/assets/email.png',
    },
    {
      name:'Entre em contato',
      imagem:'/assets/whatsapp.png',
      link: 'https://api.whatsapp.com/send/?phone=5531971401038&text&type=phone_number&app_absent=0',
    },
  ]
  
  const softSkills = [
    
    { 
      name:'Relacionamento Interpessoal',
      imagem:'/assets/interpessoal.jpg',
    },
    { 
      name:'Trabalho em equipe',
      imagem:'/assets/equipe.png',
    },
    { 
      name:'Resolução de Problemas',
      imagem:'/assets/resolucao.png',
    },
    { 
      name:'Adaptabilidade',
      imagem:'/assets/adaptabilidade.png',
    },
    { 
      name:'Persistencia',
      imagem:'/assets/persistencia.jpg',
    },
    { 
      name:'Aprendizado Continuo',
      imagem:'/assets/aprendizado.png',
    },
    
     ];

  
  const certificado = [

    {
      title: ' Algoritimos - DevMedia',
      link: 'https://www.devmedia.com.br/certificado/unificado/algoritmo/janser-souza-silva',
      imagem: '/assets/algoritimo.png',
    },
    {
      title: ' React - DevMedia',
      link: 'https://www.devmedia.com.br/certificado/unificado/react/janser-souza-silva',
      imagem: '/assets/react.png',
    },
    {
      title: ' Front-End - DevMedia',
      link: 'https://www.devmedia.com.br/certificado/unificado/front-end-web/janser-souza-silva',
      imagem: '/assets/front.png',
    },
    {
      title: ' JavaScript - DevMedia',
      link: 'https://www.devmedia.com.br/certificado/unificado/javascript/janser-souza-silva',
      imagem: '/assets/js.png',
    },
    {
      title: ' Dev Web - Udedmy',
      link: 'https://www.udemy.com/certificate/UC-0f8ffdbe-0e1f-4093-811d-bc686bf5c42e/',
      imagem: '/assets/udemy.png',
    },

  ];


  const formacao = [
    
    { 
      name:'Técnologo em Análise e desenvolvimento de sistemas - 4º Periodo',
      imagem:'/assets/faculdade.png',
    },
  ];





  const contatoRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => { // Função para lidar com o scroll e animações
    const handleScroll = () => {
      const element = contatoRef.current;
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100;

      if (isVisible) {
        controls.start({ opacity: 1, x: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.main
      id="contato"
      className={styles.principal}
      initial={{ opacity: 0, x: -20 }}
      animate={controls}
      transition={{ delay: 0.2 }}
    >
      <h1>Informações</h1>
      <motion.section
        ref={contatoRef}
        className={styles.container}
        initial={{ opacity: 0, x: -20 }}
        animate={controls}
        transition={{ delay: 0.3 }}
      >
        {/* Seção de informações de contato */}
        <motion.section
          className={`${styles.card} ${styles.aparecer}`}
          initial={{ opacity: 0, x: -20 }}
          animate={controls}
          transition={{ delay: 0.4 }}
        >
          <h2>Contato</h2>

          <ul className={styles.alinhar}>
              {contatos.map((contatos, index) => (
                <li key={index}>
                  
                  <a href={contatos.link} target="_blank" rel="noreferrer">
                  <img src={contatos.imagem} alt="Contato" />
                  {contatos.name}
                  </a>
                </li>
              ))}
            </ul>
      
        </motion.section>
        {/* Seção de habilidades interpessoais */}
        <motion.section
          className={`${styles.card} ${styles.aparecer}`}
          initial={{ opacity: 0, x: -20 }}
          animate={controls}
        >
          <h2>Soft Skills</h2>
          <motion.ul>
            {softSkills.map((skill, index) => (
              <motion.li key={index}>
                <img src={skill.imagem}/> 
                {skill.name}</motion.li>
            ))}
          </motion.ul>
        </motion.section>

              {/* Seção de certificados */}
        <motion.section
          className={`${styles.card} ${styles.aparecer}`}
          initial={{ opacity: 0, x: -20 }}
          animate={controls}
        >
          <h2>Certificados</h2>
          
            <ul>
              {certificado.map((certificado, index) => (
                <li key={index}> 
                  <a href={certificado.link} target="_blank" rel="noreferrer">
                  <img src={certificado.imagem}/>
                  {certificado.title}
                  </a>
                </li>
              ))}
            </ul>
          
        </motion.section>
        
                {/* Seção de formação acadêmica */}
        <motion.section
          className={`${styles.card} ${styles.aparecer}`}
          initial={{ opacity: 0, x: -20 }}
          animate={controls}
        >
          <h2>Formação</h2>
          
          <ul>
              {formacao.map((formacao, index) => (
                <li key={index}>
                  <img src={formacao.imagem}/> 
                  {formacao.name}
                </li>
              ))}
            </ul>



        </motion.section>
        
      </motion.section>
    </motion.main>
  );
};

export default Informacoes;
