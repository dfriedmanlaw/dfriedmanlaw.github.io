import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FILLOUT_URL } from '../constants';

const PlaceholderPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-tech-bg flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-tech-surface via-transparent to-transparent -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tech-border to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tech-border to-transparent opacity-50"></div>

      <div className="max-w-3xl w-full text-center space-y-8 z-10">
        
        {/* Brand Identity */}
        <div className="space-y-4">
            <div className="inline-flex items-center space-x-3 mb-4">
                <span className="text-tech-primary font-sans font-bold text-xs tracking-widest uppercase">
                    Coming Soon
                </span>
                <span className="text-tech-muted font-sans text-xs tracking-widest uppercase">/ EST. 2026</span>
            </div>
            
            <h1 className="font-serif font-bold text-tech-text tracking-tight leading-none">
                <span className="block text-2xl md:text-4xl italic font-normal text-tech-muted mb-2">Law Office of</span>
                <span className="text-5xl md:text-7xl">David Friedman</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-tech-muted font-sans font-light tracking-wide max-w-xl mx-auto pt-4">
                Consumer Protection Litigation<br />
                <span className="text-sm text-tech-primary uppercase tracking-widest font-bold mt-2 block">New York</span>
            </p>
        </div>

        <div className="w-16 h-1 bg-tech-primary mx-auto rounded-full opacity-80"></div>

        {/* Message */}
        <p className="text-tech-muted font-sans leading-relaxed max-w-lg mx-auto">
            Our full digital experience is currently under construction. 
            We are actively accepting new clients for matters involving credit reporting errors, debt collection harassment, and mortgage servicing violations.
        </p>

        {/* CTA */}
        <div className="pt-8">
            <Link to="/intake">
                <Button size="lg">Evaluate My Case</Button>
            </Link>
            <p className="mt-4 text-xs text-tech-muted uppercase tracking-wider">
                Secure Digital Intake
            </p>
        </div>

      </div>

      {/* Footer Minimal */}
      <div className="absolute bottom-8 text-center w-full">
        <p className="text-[10px] text-tech-muted uppercase tracking-widest">
            © {new Date().getFullYear()} Law Office of David Friedman, PLLC
        </p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
