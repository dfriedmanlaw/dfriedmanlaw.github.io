import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 min-h-screen bg-tech-bg">
      <section className="max-w-[1000px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-tech-text tracking-tight mb-6 leading-tight">
                    Contact Us
                </h1>
                <p className="text-xl text-tech-muted font-sans font-light leading-relaxed">
                    We are available for consultation on consumer protection matters involving credit reporting errors, debt collection harassment, and mortgage servicing violations.
                </p>

                <div className="space-y-6 mt-12">
                    <div>
                        <h3 className="text-sm font-bold text-tech-muted uppercase tracking-widest mb-2">Email</h3>
                        <a href="mailto:david@davidfriedmanlaw.com" className="text-2xl font-serif font-bold text-tech-primary hover:underline">
                            david@davidfriedmanlaw.com
                        </a>
                    </div>
                    
                    <div>
                        <h3 className="text-sm font-bold text-tech-muted uppercase tracking-widest mb-2">Phone</h3>
                        <a href="tel:914-222-3612" className="text-2xl font-serif font-bold text-tech-text hover:text-tech-primary transition-colors">
                            (914) 222-3612
                        </a>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-tech-muted uppercase tracking-widest mb-2">Office</h3>
                        <address className="not-italic text-lg font-serif text-tech-text leading-relaxed">
                            Law Office of David Friedman, PLLC<br />
                            4 Westchester Park Drive, Suite 155<br />
                            White Plains, NY 10604
                        </address>
                    </div>
                </div>
            </div>

            {/* Intake CTA */}
            <div className="bg-white border border-tech-border p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center space-y-6">
                <div className="w-16 h-16 bg-tech-surface rounded-full flex items-center justify-center text-tech-primary mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                </div>
                
                <h2 className="text-2xl font-serif font-bold text-tech-text">
                    Start Your Case Evaluation
                </h2>
                <p className="text-tech-muted font-sans leading-relaxed">
                    Our secure digital intake form is the fastest way to get your case reviewed by an attorney. It takes less than 3 minutes.
                </p>
                
                <Link to="/intake/" className="w-full">
                    <Button size="lg" fullWidth>Start Evaluation</Button>
                </Link>
            </div>

        </div>
      </section>
    </main>
  );
};

export default ContactPage;
