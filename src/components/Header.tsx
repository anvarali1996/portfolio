// import React, {useState} from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-scroll';

// const Header: React.FC = () => {
//     const [isCollapsed, setIsCollapsed] = useState(true);

//   const handleToggle = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const handleLinkClick = () => {
//     setIsCollapsed(true);
//   };
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
//       <Container>
//         <Navbar.Brand href="#home">Anvarjon Sheraliev</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleLinkClick} />
//         <Navbar.Collapse id="basic-navbar-nav">
//                   <Nav className="ms-auto">
//                       <Nav.Link ><Link to="about" smooth={true} offset={-80} duration={200} onClick={handleLinkClick}>About</Link></Nav.Link>
                      
//             {/* <Nav.Link href="#about" >About</Nav.Link> */}
//             <Nav.Link onClick={handleToggle} ><Link to="projects" smooth={true} offset={-80} duration={200}>Projects</Link></Nav.Link>
//             <Nav.Link onClick={handleToggle}><Link to="skills" smooth={true} offset={-80} duration={200}>Skills</Link></Nav.Link>
//             <Nav.Link onClick={handleToggle}><Link to="contact" smooth={true} offset={-80} duration={200}>Contact</Link></Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" expanded={expanded} onToggle={() => setExpanded(!expanded)} >
      <Container>
        <Navbar.Brand href="#home">Anvarjon Sheraliev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link >
              <Link onClick={() => setExpanded(false)} to="about" smooth={true} offset={-180} duration={200}>
                About
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link onClick={() => setExpanded(false)} to="projects" smooth={true} offset={-180} duration={200}>
                Projects
              </Link>
            </Nav.Link>

            <Nav.Link >
              <Link onClick={() => setExpanded(false)} to="skills" smooth={true} offset={-180} duration={200}>
                Skills
              </Link>
            </Nav.Link>

            <Nav.Link >
              <Link onClick={() => setExpanded(false)} to="contact" smooth={true} offset={-80} duration={200}>
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
