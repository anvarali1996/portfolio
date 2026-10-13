// import React from 'react';

// const Hero: React.FC = () => {
//   return (
//     <div className="bg-primary text-white text-center py-5" id="home">
//       <h1>Hi, I'm [Your Name]</h1>
//       <p className="lead">A Passionate Frontend Developer</p>
//       <a href="/resume.pdf" className="btn btn-light btn-lg" download>
//         Download CV
//       </a>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import { Button } from 'react-bootstrap';
import CV from '../assets/Anvarjon Sheraliev CV.pdf';
const Hero: React.FC = () => {
  return (
    <div
  id="home"
  className="hero-section d-flex justify-content-center align-items-center text-center"
  style={{
    backgroundColor: 'lightgray', // Replace this with your preferred background color or gradient
    height: '100vh',
    paddingTop: '80px', // Adjust this value depending on the navbar height
  }}
>
      <div className="overlay p-4 text-white">
        <h1 className="display-4">Hi, I'm Anvarjon Sheraliev</h1>
        <p className="lead">Frontend Developer</p>
        <a href={CV} download="Anvarjon_Sheraliev_CV.pdf">
          <Button variant="light" size="lg">
            Download CV
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
