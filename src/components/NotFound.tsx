// src/components/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1 style={{ fontSize: '4rem', color: 'gray' }}>404</h1>
      <h2>Oops! The page you are looking for does not exist.</h2>
      <p>
        <Link to="/" style={{ textDecoration: 'underline', color: 'blue' }}>
          Go back to Home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
