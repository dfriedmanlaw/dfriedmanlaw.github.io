import React, { useEffect } from 'react';
import Link from '../components/Link';
import Button from '../components/Button';

const IntakePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-tech-bg pt-28 pb-16 px-6 font-sans flex items-center justify-center">
      <div className="max-w-[720px] w-full bg-white border border-tech-border p-8 md:p-12 rounded-2xl shadow-xl space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-tech-surface border border-tech-border rounded-full text-xs font-sans font-bold uppercase tracking-wider text-tech-primary">
          <span className="w-2 h-2 rounded-full bg-tech-primary"></span>
          <span>Intake Status Notice</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-serif font-bold text-tech-text leading-tight">
          Attorney Referrals & Co-Counsel Inquiries Only
        </h1>

        <p className="text-lg text-tech-muted font-sans leading-relaxed">
          The Law Office of David Friedman is not currently accepting direct inquiries or consultations from prospective clients. We welcome attorney referrals and co-counsel collaborations—referring counsel may reach out directly via email to discuss potential matters.
        </p>

        <div className="pt-6 border-t border-tech-border space-y-4">
          <h2 className="text-xs font-bold text-tech-muted uppercase tracking-widest">
            Referring Counsel Contact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-xs text-tech-muted block mb-1">Email:</span>
              <a href="mailto:david@davidfriedmanlaw.com" className="text-lg font-serif font-bold text-tech-primary hover:underline">
                david@davidfriedmanlaw.com
              </a>
            </div>
            <div>
              <span className="text-xs text-tech-muted block mb-1">Phone:</span>
              <a href="tel:914-222-3612" className="text-lg font-serif font-bold text-tech-text hover:text-tech-primary transition-colors">
                (914) 222-3612
              </a>
            </div>
          </div>
          <div className="pt-2">
            <span className="text-xs text-tech-muted block mb-1">Office:</span>
            <address className="not-italic text-sm text-tech-muted font-sans">
              Law Office of David Friedman, PLLC<br />
              4 Westchester Park Drive, Suite 155<br />
              White Plains, NY 10604
            </address>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 border-t border-tech-border">
          <a href="mailto:david@davidfriedmanlaw.com" className="flex-1">
            <Button size="lg" fullWidth>Email David Friedman</Button>
          </a>
          <Link to="/" className="flex-1">
            <Button size="lg" variant="outline" fullWidth>Return to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntakePage;