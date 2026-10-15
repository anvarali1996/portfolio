
// import React from 'react';
// import { Button } from 'react-bootstrap';
// import CV from '../assets/Anvarjon Sheraliev CV.pdf';
// const Hero: React.FC = () => {
//   return (
//     <div
//   id="home"
//   className="hero-section d-flex justify-content-center align-items-center text-center"
//   style={{
//     backgroundColor: 'lightgray', // Replace this with your preferred background color or gradient
//     height: '100vh',
//     paddingTop: '80px', // Adjust this value depending on the navbar height
//   }}
// >
//       <div className="overlay p-4 text-white">
//         <h1 className="display-4">Hi, I'm Anvarjon Sheraliev</h1>
//         <p className="lead">Frontend Developer</p>
//         <a href={CV} download="Anvarjon_Sheraliev_CV.pdf">
//           <Button variant="light" size="lg">
//             Download CV
//           </Button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import CV from '../assets/Anvarjon Sheraliev CV.pdf';

const Hero: React.FC = () => {
  return (
    <div
      id="home"
      className="d-flex justify-content-center align-items-center position-relative overflow-hidden"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        paddingTop: '80px',
      }}
    >
      {/* Orqa fondagi yorug'lik effektlari (Glow circles) */}
      <div 
        className="position-absolute rounded-circle opacity-20"
        style={{
          width: '400px',
          height: '400px',
          background: '#6366f1',
          filter: 'blur(100px)',
          top: '10%',
          left: '15%',
          zIndex: 1,
        }}
      />
      <div 
        className="position-absolute rounded-circle opacity-20"
        style={{
          width: '350px',
          height: '350px',
          background: '#38bdf8',
          filter: 'blur(100px)',
          bottom: '10%',
          right: '15%',
          zIndex: 1,
        }}
      />

      <Container className="position-relative z-2 text-center text-white py-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge bg-primary bg-opacity-20 text-info border border-info border-opacity-25 px-3 py-2 rounded-pill fs-6 mb-3 d-inline-block">
  Welcome to my portfolio
</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="display-3 fw-bold mb-3"
        >
          Hi, I'm <span className="text-gradient">Anvarjon Sheraliev</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lead fs-3 text-secondary mb-4"
        >
          Frontend Developer & Full-Stack Enthusiast
        </motion.p>

        {/* Tugmalar guruhi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="d-flex justify-content-center align-items-center flex-wrap gap-3 mb-5"
        >
          <a href={CV} download="Anvarjon_Sheraliev_CV.pdf">
            <Button 
              variant="primary" 
              size="lg" 
              className="rounded-pill px-4 py-3 fw-semibold shadow-lg d-flex align-items-center gap-2"
            >
              <FaDownload /> Download CV
            </Button>
          </a>

          {/* <Link to="contact" smooth={true} offset={-80} duration={300}>
            <Button 
              variant="outline-light" 
              size="lg" 
              className="rounded-pill px-4 py-3 fw-semibold d-flex align-items-center gap-2"
            >
              Contact Me <FaArrowRight />
            </Button>
          </Link> */}
        </motion.div>

        {/* Ijtimoiy tarmoq havolalari (Ixtiyoriy, qo'shib qo'ysangiz yanada chiroyli bo'ladi) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="d-flex justify-content-center gap-4 fs-4"
        >
          <a href="https://github.com/anvarali1996" target="_blank" rel="noreferrer" className="text-secondary hover-primary transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/anvarjon-sheraliev" target="_blank" rel="noreferrer" className="text-secondary hover-primary transition">
            <FaLinkedin />
          </a>
          <a href="https://t.me/items4uAdmin" target="_blank" rel="noreferrer" className="text-secondary hover-primary transition">
            <FaTelegram />
          </a>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;