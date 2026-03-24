import React from 'react';
import { DOCKET_ITEMS } from '../constants';

const Ticker: React.FC = () => {
  return (
    <div className="w-full bg-tech-surface border-y border-tech-border py-3 overflow-hidden relative flex items-center h-12">
        <div className="absolute left-0 z-10 bg-gradient-to-r from-tech-surface to-transparent w-12 h-full"></div>
        <div className="absolute right-0 z-10 bg-gradient-to-l from-tech-surface to-transparent w-12 h-full"></div>
        
        <div className="animate-ticker flex whitespace-nowrap min-w-full">
            {[...DOCKET_ITEMS, ...DOCKET_ITEMS].map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex items-center mx-8">
                    <span className="w-1.5 h-1.5 bg-tech-primary rounded-full mr-3 animate-pulse"></span>
                    <span className="text-sm font-medium text-tech-muted tracking-wide uppercase">
                        {item.text}
                    </span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Ticker;