import React from 'react';
import Link from '../components/Link';
import { FILLOUT_URL } from '../constants';

const IntakePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-tech-surface pt-24 pb-0 px-0 flex flex-col font-sans">
       <div className="flex-1 w-full h-full min-h-[800px]">
          <iframe 
              src={FILLOUT_URL} 
              width="100%" 
              height="100%" 
              style={{ minHeight: '800px', border: 'none' }}
              title="Intake Form"
          ></iframe>
       </div>
       <div className="text-center py-4 bg-tech-bg border-t border-tech-border">
          <Link to="/" className="text-sm text-tech-muted hover:text-tech-primary transition-colors">
              ← Return to Home
          </Link>
       </div>
    </div>
  );
};

export default IntakePage;