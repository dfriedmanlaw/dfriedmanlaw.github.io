import React from 'react';
import Link from './Link';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex items-center pt-6 md:pt-10 pb-12 md:pb-16 overflow-hidden border-b border-tech-border">
        
        {/* Backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-t from-tech-surface via-transparent to-transparent -z-10"></div>

        <div className="max-w-[1440px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Text Content */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left items-center lg:items-start">
                <div className="inline-flex items-center space-x-3">
                    <span className="text-tech-primary font-sans font-bold text-xs tracking-widest uppercase">
                        Consumer Protection Lawyer
                    </span>
                    <span className="text-tech-muted font-sans text-xs tracking-widest uppercase">/ EST. 2026</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl xl:text-8xl text-tech-text leading-[1.1] tracking-tight font-serif font-medium">
                    Restoring Financial<br />
                    <span className="italic text-tech-muted">
                        Fairness
                    </span>
                </h1>
                
                <p className="text-lg md:text-xl text-tech-muted max-w-2xl leading-relaxed font-light font-sans">
                    Specialized federal advocacy for consumer errors involving banks, credit bureaus, and mortgage servicers. Based in New York, serving clients in New York and Minnesota.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Link to="/contact/">
                        <Button size="lg">Attorney Referrals & Co-Counsel</Button>
                    </Link>
                </div>
            </div>

            {/* Image Content */}
            <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative aspect-[4/5] w-full max-w-[340px] lg:max-w-[380px] overflow-hidden rounded-3xl border border-tech-border shadow-sm">
                    <img 
                        src="/david-friedman.png" 
                        alt="David Friedman" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;