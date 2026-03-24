import React from 'react';
import { Link } from 'react-router-dom';
import { PRACTICE_AREAS, ICONS } from '../constants';
import { PracticeArea } from '../types';

interface HubCardProps {
    area: PracticeArea;
}

const HubCard: React.FC<HubCardProps> = ({ area }) => {
  return (
    <Link 
        to={`/practice/${area.id}`}
        className={`group relative p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 bg-white hover:bg-white hover:shadow-xl border border-tech-border hover:border-tech-primary/30 rounded-xl h-full ${
            area.isFeatured ? 'md:col-span-2' : 'col-span-1'
        }`}
    >
      <div className="relative z-10">
         <div className="flex justify-between items-start mb-8">
            <div className="w-12 h-12 flex items-center justify-center text-tech-primary bg-tech-surface rounded-full group-hover:bg-tech-primary group-hover:text-white transition-colors">
                {area.iconPath}
            </div>
        </div>
        
        <h3 className="text-2xl font-serif font-bold mb-2 text-tech-text tracking-tight">
            {area.title}
        </h3>
        <p className="text-xs font-sans font-bold mb-4 text-tech-primary uppercase tracking-wider">
            {area.subtitle}
        </p>
        <p className="leading-relaxed mb-8 text-tech-muted font-sans">
            {area.description}
        </p>
      </div>

      <div className="relative z-10 flex items-center text-sm font-bold font-sans uppercase tracking-wide text-tech-muted group-hover:text-tech-primary transition-colors">
         <span className="mr-2">
            Learn More
         </span>
         <div className="transform group-hover:translate-x-2 transition-transform">
             {ICONS.ArrowRight}
         </div>
      </div>
    </Link>
  );
};

const HubMosaic: React.FC = () => {
  return (
    <section id="practice" className="py-24 relative border-b bg-tech-surface border-tech-border">
       
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="mb-12 flex items-end justify-between">
            <h2 className="text-4xl font-serif font-bold text-tech-text">
                Practice Areas
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.map((area) => (
                <div key={area.id} className={`${area.isFeatured ? 'md:col-span-2' : 'col-span-1'}`}>
                    <HubCard area={area} />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HubMosaic;