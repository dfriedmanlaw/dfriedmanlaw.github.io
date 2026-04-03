import React from 'react';
import { PRACTICE_AREAS } from '../constants';
import Button from '../components/Button';
import Link from '../components/Link';

interface PracticePageProps {
  id?: string;
}

const PracticePage: React.FC<PracticePageProps> = ({ id: propId }) => {
  const id = propId;
  const area = PRACTICE_AREAS.find(p => p.id === id);

  if (!area || !area.content) {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col gap-4">
            <h1 className="text-2xl font-bold text-white">Practice Area Not Found</h1>
            <Link to="/">Return Home</Link>
        </div>
    );
  }

  const { content } = area;

  return (
    <main className="pt-24 min-h-screen bg-tech-bg">
      {/* Header Section */}
      <section className="relative px-6 pb-12 border-b border-tech-border">
         <div className="max-w-[1000px] mx-auto">
            <Link 
                to="/#practice" 
                className="inline-flex items-center text-xs font-sans font-bold text-tech-primary mb-8 hover:underline cursor-pointer tracking-wide"
            >
                {'<'} RETURN TO PRACTICE AREAS
            </Link>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-8">
                    <div className="flex items-center gap-4 mb-6 md:hidden">
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
                <div className="hidden md:block md:col-span-4">
                    <div className="aspect-square w-full rounded-2xl overflow-hidden border border-tech-border shadow-lg">
                        {/* We use the larger version of the image */}
                        <img 
                            src={`/${area.id === 'debt' ? 'harassment' : area.id}-image.png`} 
                            alt={area.title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </div>
            </div>
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
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                       {content.resources.map((res, idx) => (
                           <li key={idx}>
                               <Link to={`/resource/${res.slug}/`} className="flex items-start group text-tech-primary hover:text-tech-text transition-colors">
                                   <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-tech-primary group-hover:bg-tech-text rounded-full shrink-0"></span>
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
                  <Link to="/intake/" className="block">
                    <Button fullWidth>Start Evaluation</Button>
                  </Link>
              </div>
          </div>
      </div>

    </main>
  );
};

export default PracticePage;