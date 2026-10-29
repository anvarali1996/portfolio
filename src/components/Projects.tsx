// import React from 'react';
// import { Card, Button, Row, Col } from 'react-bootstrap';
// import Photo from '../assets/Screenshot 2024-05-23 at 17.55.29.png'
// import Photo2 from '../assets/Screenshot 2024-04-14 at 19.47.03.png'
// import Photo3 from '../assets/Screenshot 2024-10-23 at 16.09.10.png'
// import Photo4 from '../assets/Screenshot 2024-10-23 at 16.10.42.png'
// import Photo5 from '../assets/Screenshot 2024-11-26 at 22.33.13.png'


// const projects = [
//   {
//     title: 'E-commerce Website',
//     description: "Expertly crafted React.js project with seamless integration of React Paginate, React Icons, React Router, and Tailwind CSS for a  stunning and responsive UI. Utilizing React's Fetch API, dynamically fetch and render product data from an external API.",
//     tech: 'React, TypeScript, Firebase, Stripe',
//     link: 'https://fetchminiproject.netlify.app',
//     image: Photo2, // Local image path in the public folder
//   },
//   {
//     title: 'Responsive E-Commerce Platform with Bootstrap',
//     description: " 🚀 Check out my latest Vite project built with React, TypeScript, and Bootstrap! Features include pagination, React Icons, a cart with LocalStorage, and responsive design.",
//     tech: 'React, TypeScript, Bootstrap',
//     link: 'https://projects-murex-nu.vercel.app/',
//     // github: 'https://github.com/yourusername/portfolio',
//     image: Photo, // Local image path in the public folder
//   },
//   {
//     title: 'E-Commerce Store with Seamless Payment Integration',
//     description: "🚀 Check out my latest Vite project built with React, TypeScript,  and Tailwind CSS! It’s an online store that integrates with Stripe for payments, features a shopping cart for adding and removing items, and utilizes EmailJS for automated replies through my custom email address.",
//     link: 'https://items4ustore.netlify.app',

//     image: Photo3, // Local image path in the public folder
//   },
//   {
//     title: 'Bilingual Study Abroad Advisory Platform',
//     description: "🚀 Check out my latest Vite project built with React, TypeScript, and Tailwind CSS! It’s a bilingual consulting platform for students wanting to study abroad, featuring real-time chat with Firebase, a contact form with EmailJS, and professional communication through my custom domain.",
//     tech: 'React, TypeScript, Bootstrap',
//     link: 'https://educonnect-uz.netlify.app',

//     image: Photo4, // Local image path in the public folder
//   },{
//     title: 'Cinema Hub: Movie Discovery Platform',
//     description: "🚀 Check out my latest project built with Vite, React, and TypeScript, styled with Bootstrap! 🎥✨ This cinema-themed app features a dynamic carousel showcasing movie posters, integrates Firebase for user authentication and real-time data storage, and displays a list of movies fetched from an external API. It’s designed to provide a seamless user experience with responsive design and interactive elements.",
//     tech: 'React, TypeScript, Bootstrap',
//     link: 'https://signup-5f426.web.app/',
  
//     image: Photo5, // Local image path in the public folder
//   },
//   // Add more projects as needed
// ];

// const Projects: React.FC = () => {
//   return (
//     <section id="projects" className="container py-5" style={{ paddingTop: '80px' }}>
//       <h2 className="text-center mb-4">My Projects</h2>
//       <Row>
//         {projects.map((project, index) => (
//           <Col md={4} key={index} className="mb-4">
//             <Card>
//               {/* Card Image */}
//               <Card.Img variant="top" src={project.image} alt={project.title} />

//               <Card.Body>
//                 <Card.Title>{project.title}</Card.Title>
//                 <Card.Text>{project.description}</Card.Text>
//                 <Button variant="primary" href={project.link} target="_blank" className="w-100">
//                   Live Demo
//                 </Button>
//                 {/* <Button variant="secondary" href={project.github} target="_blank" className="ms-2">
//                   GitHub
//                 </Button> */}
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       <div className="text-center mt-4">
//         <p style={{ fontSize: '1.2rem', fontWeight: '500' }}>
//           There are more exciting projects on my{' '}
//           <a
//             href="https://github.com/anvarali1996"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-primary"
//             style={{ textDecoration: 'none', fontWeight: 'bold' }}
//           >
//             GitHub account
//           </a>
//           !
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

import Photo from '../assets/Screenshot 2024-05-23 at 17.55.29.png';
import Photo2 from '../assets/Screenshot 2024-04-14 at 19.47.03.png';
import Photo3 from '../assets/Screenshot 2024-10-23 at 16.09.10.png';
import Photo4 from '../assets/Screenshot 2024-10-23 at 16.10.42.png';
import Photo5 from '../assets/Screenshot 2024-11-26 at 22.33.13.png';
import Photo6 from "../assets/Screenshot 2026-10-29 at 17.33.08.png";

interface Project {
  title: string;
  description: string;
  tech?: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'ClientFlow CRM',
    description: "Built with Next.js, TypeScript, Tailwind CSS, and PostgreSQL! Features include secure authentication, customer CRUD, an admin panel, interactive charts, profile management, and responsive design. Deployed with Vercel and Neon.",
    tech: 'Next.js, TypeScript, Tailwind CSS, PostgreSQL, Better Auth, Neon',
    link: 'https://clientflow-crm-rho.vercel.app/dashboard',
    image: Photo6,
  },
  {
    title: 'Responsive E-Commerce Platform',
    description: "Built with React, TypeScript, and Bootstrap! Features include pagination, React Icons, a cart with LocalStorage, and responsive design.",
    tech: 'React, TypeScript, Bootstrap',
    link: 'https://projects-murex-nu.vercel.app/',
    image: Photo,
  },
  {
    title: 'Cinema Hub: Movie Discovery',
    description: "Cinema-themed app featuring dynamic carousel, Firebase user authentication, real-time data storage, and external API integration.",
    tech: 'React, TypeScript, Firebase, Bootstrap',
    link: 'https://signup-5f426.web.app/',
    image: Photo5,
  },
  {
    title: 'E-commerce Website',
    description: "Expertly crafted React.js project with seamless integration of React Paginate, React Icons, React Router, and Tailwind CSS for a stunning and responsive UI.",
    tech: 'React, TypeScript, Firebase, Stripe',
    link: 'https://fetchminiproject.netlify.app',
    image: Photo2,
  },
  {
    title: 'E-Commerce Store with Payment',
    description: "Online store that integrates with Stripe for payments, features a shopping cart, and utilizes EmailJS for automated replies.",
    tech: 'React, TypeScript, Stripe, Tailwind',
    link: 'https://items4ustore.netlify.app',
    image: Photo3,
  },
  {
    title: 'Bilingual Study Abroad Platform',
    description: "Bilingual consulting platform featuring real-time chat with Firebase, a contact form with EmailJS, and professional communication.",
    tech: 'React, TypeScript, Firebase, Bootstrap',
    link: 'https://educonnect-uz.netlify.app',
    image: Photo4,
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="container py-5" style={{ paddingTop: '80px' }}>
      {/* Dynamic Sarlavha */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-5"
      >
        <h2 className="fw-bold display-5">My Projects</h2>
        {/* <p className="text-muted">Men yaratgan so'nggi zamonaviy va interaktiv loyihalar</p> */}
      </motion.div>

      <Row className="g-4">
        {projects.map((project, index) => (
          <Col lg={4} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="h-100"
            >
              <Card
                className="h-100 border-0 shadow-lg rounded-4 overflow-hidden glass-card text-white"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Image Container with Hover Scale */}
                <div className="overflow-hidden position-relative" style={{ height: '200px' }}>
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    className="w-100 h-100 object-fit-cover transition-all"
                    style={{ transition: 'transform 0.5s ease' }}
                  />
                </div>

                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold mb-2 fs-5 text-white">
                    {project.title}
                  </Card.Title>

                  <Card.Text className="text-secondary small mb-3 flex-grow-1" style={{ lineHeight: '1.6' }}>
                    {project.description}
                  </Card.Text>

                  {/* Tech Stack Badges */}
                  {project.tech && (
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {project.tech.split(',').map((techItem, idx) => (
                        <span
                          key={idx}
                          className="badge bg-primary bg-opacity-20 text-info border border-primary border-opacity-25 rounded-pill px-2 py-1 fs-7"
                        >
                          {techItem.trim()}
                        </span>
                      ))}
                    </div>
                  )}

                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-100 rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-2 mt-auto"
                  >
                    Live Demo <FaExternalLinkAlt size={12} />
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* GitHub Account Link Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mt-5 p-4 rounded-4 glass-card"
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <p className="fs-5 fw-medium mb-0 text-dark d-flex align-items-center justify-content-center flex-wrap gap-1">
  <span>There are more exciting projects on my</span>
  <a
    href="https://github.com/anvarali1996"
    target="_blank"
    rel="noopener noreferrer"
    className="text-info fw-bold text-decoration-none d-inline-flex align-items-center gap-1 ms-1"
  >
    <FaGithub className="fs-4" /> GitHub account
  </a>
  <span>!</span>
</p>
      </motion.div>
    </section>
  );
};

export default Projects;