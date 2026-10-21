
// import React, { useState } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-scroll';

// const Header: React.FC = () => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" sticky="top" expanded={expanded} onToggle={() => setExpanded(!expanded)} >
//       <Container>
//         <Navbar.Brand href="#home">Anvarjon Sheraliev</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link >
//               <Link onClick={() => setExpanded(false)} to="about" smooth={true} offset={-180} duration={200}>
//                 About
//               </Link>
//             </Nav.Link>

//             <Nav.Link>
//               <Link onClick={() => setExpanded(false)} to="projects" smooth={true} offset={-180} duration={200}>
//                 Projects
//               </Link>
//             </Nav.Link>

//             <Nav.Link >
//               <Link onClick={() => setExpanded(false)} to="skills" smooth={true} offset={-180} duration={200}>
//                 Skills
//               </Link>
//             </Nav.Link>

//             <Nav.Link >
//               <Link onClick={() => setExpanded(false)} to="contact" smooth={true} offset={-80} duration={200}>
//                 Contact
//               </Link>
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;


import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sahifa bo'ylab pastga tushganda soyani o'zgartirish uchun listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "about", label: "About", offset: -100 },
    { to: "projects", label: "Projects", offset: -100 },
    { to: "skills", label: "Skills", offset: -100 },
    // { to: "contact", label: "Contact", offset: -80 },
  ];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'sticky', top: 0, zIndex: 1000 }}
    >
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        className={`py-3 transition-all ${
          scrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
        style={{
          background: 'rgba(18, 18, 18, 0.85)', // Qorong'u shaffof fon
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        data-bs-theme="dark"
      >
        <Container>
          {/* Logo / Ism */}
          <Navbar.Brand 
            href="#home" 
            className="fw-bold fs-4 text-gradient"
            style={{ cursor: 'pointer' }}
          >
            Anvarjon<span className="text-primary">.eu</span>
          </Navbar.Brand>

          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className="border-0 shadow-none"
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-lg-center gap-2 gap-lg-3 mt-3 mt-lg-0">
              {navLinks.map((item, index) => (
                <Nav.Link 
                  key={index} 
                  as="div" 
                  className="px-0"
                >
                  <Link
                    onClick={() => setExpanded(false)}
                    to={item.to}
                    smooth={true}
                    offset={item.offset}
                    duration={300}
                    className="nav-link px-3 py-2 rounded-3 text-secondary fw-medium cursor-pointer transition-all"
                    style={{
                      cursor: 'pointer',
                      transition: '0.3s ease',
                    }}
                    activeClass="text-white bg-primary bg-opacity-20 shadow-sm"
                    spy={true}
                  >
                    {item.label}
                  </Link>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Header;