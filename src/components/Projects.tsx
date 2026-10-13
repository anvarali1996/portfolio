import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Photo from '../assets/Screenshot 2024-05-23 at 17.55.29.png'
import Photo2 from '../assets/Screenshot 2024-04-14 at 19.47.03.png'
import Photo3 from '../assets/Screenshot 2024-10-23 at 16.09.10.png'
import Photo4 from '../assets/Screenshot 2024-10-23 at 16.10.42.png'
import Photo5 from '../assets/Screenshot 2024-11-26 at 22.33.13.png'


const projects = [
  {
    title: 'E-commerce Website',
    description: "Expertly crafted React.js project with seamless integration of React Paginate, React Icons, React Router, and Tailwind CSS for a  stunning and responsive UI. Utilizing React's Fetch API, dynamically fetch and render product data from an external API.",
    tech: 'React, TypeScript, Firebase, Stripe',
    link: 'https://fetchminiproject.netlify.app',
    image: Photo2, // Local image path in the public folder
  },
  {
    title: 'Responsive E-Commerce Platform with Bootstrap',
    description: " 🚀 Check out my latest Vite project built with React, TypeScript, and Bootstrap! Features include pagination, React Icons, a cart with LocalStorage, and responsive design.",
    tech: 'React, TypeScript, Bootstrap',
    link: 'https://projects-murex-nu.vercel.app/',
    // github: 'https://github.com/yourusername/portfolio',
    image: Photo, // Local image path in the public folder
  },
  {
    title: 'E-Commerce Store with Seamless Payment Integration',
    description: "🚀 Check out my latest Vite project built with React, TypeScript,  and Tailwind CSS! It’s an online store that integrates with Stripe for payments, features a shopping cart for adding and removing items, and utilizes EmailJS for automated replies through my custom email address.",
    link: 'https://items4ustore.netlify.app',

    image: Photo3, // Local image path in the public folder
  },
  {
    title: 'Bilingual Study Abroad Advisory Platform',
    description: "🚀 Check out my latest Vite project built with React, TypeScript, and Tailwind CSS! It’s a bilingual consulting platform for students wanting to study abroad, featuring real-time chat with Firebase, a contact form with EmailJS, and professional communication through my custom domain.",
    tech: 'React, TypeScript, Bootstrap',
    link: 'https://educonnect-uz.netlify.app',

    image: Photo4, // Local image path in the public folder
  },{
    title: 'Cinema Hub: Movie Discovery Platform',
    description: "🚀 Check out my latest project built with Vite, React, and TypeScript, styled with Bootstrap! 🎥✨ This cinema-themed app features a dynamic carousel showcasing movie posters, integrates Firebase for user authentication and real-time data storage, and displays a list of movies fetched from an external API. It’s designed to provide a seamless user experience with responsive design and interactive elements.",
    tech: 'React, TypeScript, Bootstrap',
    link: 'https://signup-5f426.web.app/',
  
    image: Photo5, // Local image path in the public folder
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="container py-5" style={{ paddingTop: '80px' }}>
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              {/* Card Image */}
              <Card.Img variant="top" src={project.image} alt={project.title} />

              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank" className="w-100">
                  Live Demo
                </Button>
                {/* <Button variant="secondary" href={project.github} target="_blank" className="ms-2">
                  GitHub
                </Button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <p style={{ fontSize: '1.2rem', fontWeight: '500' }}>
          There are more exciting projects on my{' '}
          <a
            href="https://github.com/anvarali1996"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
            style={{ textDecoration: 'none', fontWeight: 'bold' }}
          >
            GitHub account
          </a>
          !
        </p>
      </div>
    </section>
  );
};

export default Projects;
