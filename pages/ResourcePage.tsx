import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import { RESOURCES } from '../resourceContent';
import Button from '../components/Button';
import { FILLOUT_URL } from '../constants';

const ResourcePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const resource = RESOURCES.find(r => r.slug === slug);

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
    navigate(-1);
  };

  return (
    <main className="pt-24 min-h-screen bg-tech-bg">
      {/* Header Section */}
      <section className="relative px-6 pb-12 border-b border-tech-border">
         <div className="max-w-[800px] mx-auto">
            <button 
                onClick={handleReturn}
                className="inline-flex items-center text-xs font-sans font-bold text-tech-primary mb-8 hover:underline cursor-pointer tracking-wide uppercase"
            >
                {'<'} Return
            </button>
            
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
      </div>

    </main>
  );
};

export default ResourcePage;
