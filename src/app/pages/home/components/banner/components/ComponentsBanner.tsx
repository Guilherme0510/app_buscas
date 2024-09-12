import React from "react";
import { Container } from "react-bootstrap";
import './ComponentsBanner.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';

export const ComponentsBanner: React.FC = () => {
  return (
    <section className="banner-section">
      <Container fluid className="banner-content d-flex flex-column justify-content-center align-items-center text-center">
        
        <motion.div 
          className="info-banner" 
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <h1>Encontre o Melhor</h1>
          <p>Pesquise e descubra as melhores empresas em sua cidade com apenas alguns cliques.</p>
        </motion.div>
      </Container>
      <motion.div 
        className="divider-box mx-auto" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* <FontAwesomeIcon className="icon-location" icon={faLocationDot}/> */}
      </motion.div>
    </section>
  );
};
