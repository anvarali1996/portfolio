import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container text-center">
        <p className="mb-2">© 2025 Anvarjon Sheraliev. All rights reserved.</p>
        <p>
          <a
            href="https://github.com/anvarali1996"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-white me-3"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/anvarjon-sheraliev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-white me-3"
          >
            LinkedIn
          </a>
          <a
            href="mailto:info@anvarjon.eu"
            className="text-decoration-none text-white"
          >
            Email
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
