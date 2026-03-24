import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import { RESOURCES } from '../resourceContent';
import { PRACTICE_AREAS, FILLOUT_URL } from '../constants';
import Button from '../components/Button';

const ResourcePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const resource = RESOURCES.find(r => r.slug === slug);
  
  // Find the practice area this resource belongs to
  const practiceArea = PRACTICE_AREAS.find(area => 
    area.content.resources.some(r => r.slug === slug)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!resource) {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col gap-4 bg-tech-bg">
            <h1 className="text-2xl font-bold text-tech-text">Resource Not Found</h1>
            <Link to="/" className="text-tech-primary hover:underline">Return Home</Link>
        </div>
    );
  }

  const handleReturn = (e: React.MouseEvent) => {
    e.preventDefault();
    if (practiceArea) {
        navigate(`/practice/${practiceArea.id}`);
    } else {
        navigate(-1);
    }
  };

  return (
    <main className="pt-24 min-h-screen bg-tech-bg">
      {/* Header Section */}
      <section className="relative px-6 pb-12 border-b border-tech-border">
         <div className="max-w-[800px] mx-auto">
            {practiceArea ? (
                <Link 
                    to={`/practice/${practiceArea.id}`}
                    className="inline-flex items-center text-xs font-sans font-bold text-tech-primary mb-8 hover:underline cursor-pointer tracking-wide uppercase group"
                >
                    <span className="mr-2">{'<'}</span> 
                    Return to {practiceArea.title} Hub
                </Link>
            ) : (
                <button 
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center text-xs font-sans font-bold text-tech-primary mb-8 hover:underline cursor-pointer tracking-wide uppercase"
                >
                    {'<'} Return
                </button>
            )}
            
            <div className="mb-4">
                <span className="text-xs font-bold tracking-widest uppercase text-tech-muted border border-tech-border px-3 py-1 rounded-full bg-white">
                    {resource.category}
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold text-tech-text tracking-tight mb-6 leading-tight">
                {resource.title}
            </h1>
         </div>
      </section>

      <div className="max-w-[800px] mx-auto px-6 py-16">
          <div className="prose prose-lg prose-stone max-w-none font-serif">
            <Markdown 
                components={{
                    h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4 font-serif text-tech-text" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4 font-serif text-tech-text border-b border-tech-border pb-2" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-6 mb-3 font-serif text-tech-text" {...props} />,
                    p: ({node, ...props}) => <p className="mb-4 leading-relaxed text-tech-muted font-sans font-light" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4 space-y-2 text-tech-muted font-sans" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-4 space-y-2 text-tech-muted font-sans" {...props} />,
                    li: ({node, ...props}) => <li className="pl-1" {...props} />,
                    strong: ({node, ...props}) => <strong className="font-bold text-tech-text" {...props} />,
                }}
            >
                {resource.content}
            </Markdown>
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-white border border-tech-border p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-serif font-bold text-tech-text mb-4">
                  Need Legal Help with This Issue?
              </h3>
              <p className="text-tech-muted mb-6 font-sans leading-relaxed">
                  If you are facing this problem, you may have a claim for statutory damages. Our intake process is digital, secure, and encrypted.
              </p>
              <Link to="/intake" className="block sm:inline-block">
                <Button>Evaluate My Case</Button>
              </Link>
          </div>

          {/* Related Resources */}
          <div className="mt-24 pt-12 border-t border-tech-border">
              <h3 className="text-2xl font-serif font-bold text-tech-text mb-8">
                  Related Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(() => {
                      // 1. Get explicitly related resources
                      const explicitRelated = (resource.relatedSlugs || [])
                          .map(slug => RESOURCES.find(r => r.slug === slug))
                          .filter((r): r is typeof resource => !!r);

                      // 2. Get category matches to fill the rest
                      const categoryMatches = RESOURCES
                          .filter(r => 
                              r.category === resource.category && 
                              r.slug !== resource.slug &&
                              !explicitRelated.some(er => er.slug === r.slug)
                          );

                      // 3. Combine and slice
                      const displayResources = [...explicitRelated, ...categoryMatches].slice(0, 4);

                      return displayResources.map(related => (
                          <Link 
                              key={related.slug} 
                              to={`/resource/${related.slug}`}
                              className="group block p-6 bg-white border border-tech-border rounded-xl hover:shadow-md transition-all hover:border-tech-primary/30"
                          >
                              <h4 className="font-serif font-bold text-lg text-tech-text group-hover:text-tech-primary mb-2 transition-colors">
                                  {related.title}
                              </h4>
                              <span className="text-xs font-sans font-bold text-tech-muted uppercase tracking-wider group-hover:text-tech-primary/70 transition-colors">
                                  Read Article →
                              </span>
                          </Link>
                      ));
                  })()}
              </div>
          </div>
      </div>

    </main>
  );
};

export default ResourcePage;
