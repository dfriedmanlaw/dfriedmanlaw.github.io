import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRACTICE_AREAS, FILLOUT_URL } from '../constants';
import Button from '../components/Button';

const PracticePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const area = PRACTICE_AREAS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!area || !area.content) {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col gap-4">
            <h1 className="text-2xl font-bold text-white">Practice Area Not Found</h1>
            <Link to="/" className="text-tech-primary hover:underline">Return Home</Link>
        </div>
    );
  }

  const handleReturn = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    // Small delay to allow Home component to mount before scrolling
    setTimeout(() => {
        const element = document.getElementById('practice');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };

  const { content } = area;

  return (
    <main className="pt-24 min-h-screen bg-tech-bg">
      {/* Header Section */}
      <section className="relative px-6 pb-12 border-b border-tech-border">
         <div className="max-w-[1000px] mx-auto">
            <a 
                href="/#practice" 
                onClick={handleReturn}
                className="inline-flex items-center text-xs font-sans font-bold text-tech-primary mb-8 hover:underline cursor-pointer tracking-wide"
            >
                {'<'} RETURN TO PRACTICE AREAS
            </a>
            
            <div className="flex items-center gap-4 mb-6">
                <div className="text-tech-primary">
                    {area.iconPath}
                </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold text-tech-text tracking-tight mb-6 leading-tight">
                {area.title}
            </h1>
            <p className="text-xl text-tech-muted max-w-3xl font-sans font-light pl-1 leading-relaxed">
                {content.intro}
            </p>
         </div>
      </section>

      <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
              
              {/* Sections */}
              {content.sections.map((section, idx) => (
                  <div key={idx}>
                      <h2 className="text-2xl font-serif font-bold text-tech-text mb-6 flex items-center">
                          {section.title}
                      </h2>
                      
                      {section.content && (
                          <p className="text-tech-muted leading-relaxed mb-6 font-sans">
                              {section.content}
                          </p>
                      )}

                      {section.bullets && (
                          <ul className="space-y-4">
                              {section.bullets.map((bullet, bIdx) => (
                                  <li key={bIdx} className="bg-white p-6 rounded-xl border border-tech-border shadow-sm hover:border-tech-primary/30 transition-colors">
                                      <span className="block text-tech-text font-bold text-sm uppercase mb-1 tracking-wide font-sans">
                                          {bullet.title}
                                      </span>
                                      <span className="text-sm text-tech-muted font-sans">
                                          {bullet.text}
                                      </span>
                                  </li>
                              ))}
                          </ul>
                      )}
                  </div>
              ))}

               {/* Resources */}
               <div className="border-t border-tech-border pt-12">
                   <h3 className="text-sm font-sans font-bold text-tech-muted uppercase mb-6 tracking-widest">Deep-Dive Resources</h3>
                   <ul className="space-y-3">
                       {content.resources.map((res, idx) => (
                           <li key={idx}>
                               <Link to={`/resource/${res.slug}`} className="flex items-start group text-tech-primary hover:text-tech-text transition-colors">
                                   <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-tech-primary group-hover:bg-tech-text rounded-full"></span>
                                   <span className="underline decoration-dotted underline-offset-4 font-sans">{res.title}</span>
                               </Link>
                           </li>
                       ))}
                   </ul>
               </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
              {/* CTA Box */}
              <div className="bg-white border border-tech-border p-6 rounded-xl sticky top-24 shadow-lg">
                  <h3 className="text-lg font-serif font-bold text-tech-text mb-4">
                      Evaluate Your Case
                  </h3>
                  <p className="text-xs text-tech-muted mb-6 font-sans leading-relaxed">
                      Our intake process is digital, secure, and encrypted. Get a response from a federal litigator.
                  </p>
                  <Link to="/intake" className="block">
                    <Button fullWidth>Start Evaluation</Button>
                  </Link>
              </div>
          </div>
      </div>

    </main>
  );
};

export default PracticePage;