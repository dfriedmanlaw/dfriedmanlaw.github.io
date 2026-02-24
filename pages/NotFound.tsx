import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-tech-bg text-center px-6">
      <h1 className="text-9xl font-serif font-bold text-tech-border mb-4">404</h1>
      <h2 className="text-3xl font-bold text-tech-text mb-6">Page Not Found</h2>
      <p className="text-tech-muted max-w-md mb-8 leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/">
        <Button variant="primary" size="lg">Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
