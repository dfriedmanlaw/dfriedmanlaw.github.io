import React, { useState, useEffect } from 'react';
import Link from '../components/Link';
import { RESOURCES } from '../resourceContent';
import Button from '../components/Button';

const LibraryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get unique categories
  const categories = Array.from(new Set(RESOURCES.map(r => r.category)));

  // Filter resources
  const filteredResources = RESOURCES.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          resource.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? resource.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="pt-24 min-h-screen bg-tech-bg">
      {/* Header */}
      <section className="px-6 pb-12 border-b border-tech-border">
         <div className="max-w-[1000px] mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-tech-text tracking-tight mb-6 leading-tight">
                Resource Library
            </h1>
            <p className="text-xl text-tech-muted max-w-2xl mx-auto font-sans font-light leading-relaxed">
                Deep-dive guides on federal consumer protection laws. Learn your rights under the FCRA, FDCPA, RESPA, and EFTA.
            </p>
         </div>
      </section>

      {/* Controls */}
      <section className="sticky top-[73px] z-30 bg-tech-bg/95 backdrop-blur border-b border-tech-border py-4 px-6">
          <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Category Filters */}
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
                  <button 
                      onClick={() => setSelectedCategory(null)}
                      className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                          selectedCategory === null 
                          ? 'bg-tech-text text-white' 
                          : 'bg-white border border-tech-border text-tech-muted hover:border-tech-primary hover:text-tech-primary'
                      }`}
                  >
                      All
                  </button>
                  {categories.map(cat => (
                      <button 
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                              selectedCategory === cat 
                              ? 'bg-tech-text text-white' 
                              : 'bg-white border border-tech-border text-tech-muted hover:border-tech-primary hover:text-tech-primary'
                          }`}
                      >
                          {cat}
                      </button>
                  ))}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-64">
                  <input 
                      type="text" 
                      placeholder="Search resources..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white border border-tech-border rounded-lg text-sm focus:outline-none focus:border-tech-primary transition-colors"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-tech-muted absolute left-3 top-1/2 -translate-y-1/2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
              </div>
          </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1000px] mx-auto px-6 py-16">
          {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredResources.map((resource) => (
                      <Link 
                          key={resource.slug} 
                          to={`/resource/${resource.slug}/`}
                          className="group bg-white border border-tech-border p-8 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 duration-300 flex flex-col h-full"
                      >
                          <div className="mb-4">
                              <span className="text-[10px] font-bold tracking-widest uppercase text-tech-primary border border-tech-primary/20 px-2 py-1 rounded bg-tech-primary/5">
                                  {resource.category}
                              </span>
                          </div>
                          <h3 className="text-xl font-serif font-bold text-tech-text mb-3 group-hover:text-tech-primary transition-colors">
                              {resource.title}
                          </h3>
                          <p className="text-tech-muted text-sm line-clamp-3 mb-6 flex-grow font-sans leading-relaxed">
                              {/* Strip markdown for preview */}
                              {resource.content.replace(/#+\s/g, '').replace(/\*\*/g, '').substring(0, 150)}...
                          </p>
                          <div className="flex items-center text-xs font-bold text-tech-text uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                              Read Guide 
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 ml-1">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                              </svg>
                          </div>
                      </Link>
                  ))}
              </div>
          ) : (
              <div className="text-center py-24">
                  <p className="text-tech-muted text-lg">No resources found matching your search.</p>
                  <button 
                      onClick={() => {setSearchTerm(''); setSelectedCategory(null);}}
                      className="mt-4 text-tech-primary font-bold hover:underline"
                  >
                      Clear filters
                  </button>
              </div>
          )}
      </section>

      {/* CTA */}
      <section className="bg-tech-surface border-t border-tech-border py-24 px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-serif font-bold text-tech-text">
                  Not finding the answer?
              </h2>
              <p className="text-tech-muted leading-relaxed">
                  These guides are for informational purposes. If you have a specific legal question about a consumer violation, we can evaluate your case directly.
              </p>
              <Link to="/intake/" className="inline-block">
                  <Button size="lg">Get a Case Evaluation</Button>
              </Link>
          </div>
      </section>
    </main>
  );
};

export default LibraryPage;
