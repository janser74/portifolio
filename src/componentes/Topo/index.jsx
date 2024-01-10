import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Topo.module.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Topo = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

   useEffect(() => {
    const closeMenuOnOutsideClick = (event) => {
      if (isOpen && !event.target.closest(`.${styles.hamburgerMenu}`)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', closeMenuOnOutsideClick);

    return () => {
      document.body.removeEventListener('click', closeMenuOnOutsideClick);
    };
  }, [isOpen]);

  return (
    <div id="topo" className={`${styles.hamburgerMenu} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.menuContent}>
       
        <ScrollLink onClick={toggleMenu} to="inicio" smooth={true} duration={500}>
       Início
        </ScrollLink>
        <ScrollLink  onClick={toggleMenu} to="projetos" smooth={true} duration={500}>
       Projetos
        </ScrollLink>
        <ScrollLink onClick={toggleMenu} to="tecnologias" smooth={true} duration={500}>
        Tecnologias
        </ScrollLink>
        <ScrollLink onClick={toggleMenu} to="contato" smooth={true} duration={500}>
          Info +
        </ScrollLink>
       
      </div>
    </div>
  );
};

export default Topo;

