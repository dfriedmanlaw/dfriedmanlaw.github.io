import React, { useEffect } from 'react';
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
                    We are available for attorney referrals and co-counsel collaborations on consumer protection matters involving credit reporting errors, debt collection harassment, and mortgage servicing violations.
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

            {/* Referrals & Co-Counsel Notice */}
            <div className="bg-white border border-tech-border p-8 rounded-2xl shadow-xl flex flex-col justify-center items-start text-left space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-tech-surface border border-tech-border rounded-full text-xs font-sans font-bold uppercase tracking-wider text-tech-primary">
                    <span className="w-2 h-2 rounded-full bg-tech-primary"></span>
                    <span>Notice</span>
                </div>
                
                <h2 className="text-2xl font-serif font-bold text-tech-text">
                    Attorney Referrals & Co-Counsel Inquiries Only
                </h2>
                <p className="text-tech-muted font-sans leading-relaxed">
                    The Law Office of David Friedman is not currently accepting direct inquiries or consultations from prospective clients. We welcome attorney referrals and co-counsel collaborations—referring counsel may reach out directly via email to discuss potential matters.
                </p>

                <div className="w-full pt-4 border-t border-tech-border space-y-3">
                    <div className="text-sm font-sans text-tech-muted">
                        <span className="font-bold text-tech-text block mb-1">Firm Email</span>
                        <a href="mailto:david@davidfriedmanlaw.com" className="text-lg font-serif font-bold text-tech-primary hover:underline">
                            david@davidfriedmanlaw.com
                        </a>
                    </div>
                    <div className="text-sm font-sans text-tech-muted">
                        <span className="font-bold text-tech-text block mb-1">Telephone</span>
                        <a href="tel:914-222-3612" className="text-lg font-serif font-bold text-tech-text hover:text-tech-primary transition-colors">
                            (914) 222-3612
                        </a>
                    </div>
                </div>
                
                <a href="mailto:david@davidfriedmanlaw.com" className="w-full">
                    <Button size="lg" fullWidth>Email David Friedman</Button>
                </a>
            </div>

        </div>
      </section>
    </main>
  );
};

export default ContactPage;
