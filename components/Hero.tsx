import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { FILLOUT_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-12 overflow-hidden border-b border-tech-border">
        
        {/* Backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-t from-tech-surface via-transparent to-transparent -z-10"></div>

        <div className="max-w-[1440px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Text Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
                <div className="inline-flex items-center space-x-3">
                    <span className="text-tech-primary font-sans font-bold text-xs tracking-widest uppercase">
                        Consumer Protection Law Firm
                    </span>
                    <span className="text-tech-muted font-sans text-xs tracking-widest uppercase">/ EST. 2026</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl text-tech-text leading-[1.1] tracking-tight font-serif font-medium">
                    Restoring Financial<br />
                    <span className="italic text-tech-muted">
                        Fairness
                    </span>
                </h1>
                
                <p className="text-lg md:text-xl text-tech-muted max-w-2xl leading-relaxed font-light py-2 font-sans">
                    When financial systems fail, we help you fix them. Specialized advocacy for consumer errors involving banks, credit bureaus, and mortgage servicers.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to="/intake">
                        <Button size="lg">Evaluate My Case</Button>
                    </Link>
                </div>
            </div>

            {/* Image Area */}
            <div className="lg:col-span-5 relative h-full flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-[4/5] group">
                    
                     {/* Image Container */}
                     <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" 
                            alt="Modern Welcoming Office"
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                     </div>
                     
                     {/* Caption */}
                     <div className="absolute bottom-6 left-6 right-6">
                         <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/20 inline-block">
                            <p className="text-tech-text font-serif font-bold text-lg leading-none">David Friedman, Esq.</p>
                            <p className="text-xs text-tech-muted font-sans mt-1 uppercase tracking-wider">New York Litigator</p>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;