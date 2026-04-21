import React from 'react';
import Link from '../components/Link';
import Button from '../components/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-tech-bg text-center px-6">
      <h1 className="text-9xl font-serif font-bold text-tech-border mb-4">404</h1>
      <h2 className="text-3xl font-bold text-tech-text mb-6">Page Not Found</h2>
      <p className="text-tech-muted max-w-md mb-8 leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <div className="flex gap-4 mb-12">
        <Link to="/">
            <Button variant="primary">Return Home</Button>
        </Link>
        <Link to="/library/">
            <Button variant="outline">Browse Library</Button>
        </Link>
      </div>

      <div className="max-w-2xl w-full text-left border-t border-tech-border pt-8">
        <h3 className="text-sm font-bold text-tech-muted uppercase tracking-widest mb-4 text-center">Popular Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/resource/notice-of-error-guide/" className="p-4 bg-white border border-tech-border rounded-lg hover:border-tech-primary transition-colors group">
                <span className="font-bold text-tech-text group-hover:text-tech-primary block mb-1">Mortgage Notice of Error Guide</span>
                <span className="text-xs text-tech-muted">How to trigger RESPA protections</span>
            </Link>
            <Link to="/resource/fintech-provisional-credit-10-day-rule/" className="p-4 bg-white border border-tech-border rounded-lg hover:border-tech-primary transition-colors group">
                <span className="font-bold text-tech-text group-hover:text-tech-primary block mb-1">The 10-Day Rule</span>
                <span className="text-xs text-tech-muted">Getting your frozen money back</span>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
