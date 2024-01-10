import React from 'react';
import styles from './Rodape.module.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Footer = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className={styles.footer}>
      <div>
          <p>Desenvolvido com muito empenho e dedicação por Janser Souza.</p>
      </div>

      <div className={styles.scrollToTopButton} onClick={scrollToTop}>
           <ScrollLink to="inicio" smooth={true} duration={500}>
           &#9650; {/* Unicode para uma seta para cima */}
          </ScrollLink>
          </div>

    </footer>
  );
};

export default Footer;