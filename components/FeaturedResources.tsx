import React from 'react';
import Link from './Link';
import { RESOURCES } from '../resourceContent';

const FeaturedResources: React.FC = () => {
  // Select high-impact resources for the homepage
  const featuredSlugs = ['mixed-files', 'credit-dispute-verified-trap', 'cash-advance-app-usury-tila', 'stop-online-lender-bank-drain'];
  const featured = featuredSlugs
    .map(slug => RESOURCES.find(r => r.slug === slug))
    .filter((r): r is typeof RESOURCES[0] => !!r);

  return (
    <section className="py-24 bg-white border-b border-tech-border">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-serif font-bold text-tech-text mb-4">
              Consumer Rights Library
            </h2>
            <p className="text-tech-muted max-w-2xl font-sans font-light">
              In-depth legal guides on federal protection statutes. Learn how to challenge credit bureaus, banks, and predatory lenders.
            </p>
          </div>
          <Link 
            to="/library/" 
            className="text-tech-primary font-bold uppercase tracking-widest text-xs hover:underline flex items-center"
          >
            View Full Library <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((resource) => (
            <Link 
              key={resource.slug} 
              to={`/resource/${resource.slug}/`}
              className="group flex flex-col p-6 bg-tech-surface border border-tech-border rounded-xl hover:shadow-md transition-all hover:border-tech-primary/30"
            >
              <div className="mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-tech-primary border border-tech-primary/20 px-2 py-1 rounded bg-tech-primary/5">
                  {resource.category}
                </span>
              </div>
              <h3 className="text-lg font-serif font-bold text-tech-text mb-3 group-hover:text-tech-primary transition-colors leading-snug flex-grow">
                {resource.title}
              </h3>
              <div className="flex items-center text-xs font-bold text-tech-muted uppercase tracking-wider group-hover:text-tech-primary transition-colors">
                Read Guide 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;
