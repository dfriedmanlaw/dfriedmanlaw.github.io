import React from 'react';
import Button from '../../components/Button';

const BusinessCardTool: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-serif font-bold text-tech-text">Business Card Design</h1>
        <p className="text-tech-muted">Designed for your brand. Optimized for Moo.com standard sizing (3.5" x 2.0").</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Front Side */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-tech-muted">Front Side (The Impression)</h2>
          <div 
            className="w-full aspect-[3.5/2] bg-white border border-tech-border rounded-sm shadow-xl p-12 flex flex-col justify-center items-center text-center relative overflow-hidden group"
            style={{ backgroundImage: 'var(--background-image-paper-texture)' }}
          >
            {/* Minimal Gold Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-tech-primary/5 -mr-16 -mt-16 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-tech-primary/5 -ml-16 -mb-16 rounded-full blur-3xl opacity-50"></div>
            
            <div className="space-y-2 relative z-10">
              <div className="h-0.5 w-12 bg-tech-primary mx-auto mb-6"></div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-tech-text tracking-tight uppercase leading-none">
                Law Office of<br />
                David Friedman, PLLC
              </h3>
              <div className="flex flex-col items-center">
                <span className="text-[10px] md:text-sm font-sans font-medium uppercase tracking-[0.2em] text-tech-muted pt-2">
                   Consumer Protection Attorney
                </span>
                <span className="text-[8px] font-sans text-tech-muted/60 pt-1 tracking-widest">
                  NEW YORK & MINNESOTA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-tech-muted">Back Side (The Details)</h2>
          <div 
            className="w-full aspect-[3.5/2] bg-tech-text border border-tech-text rounded-sm shadow-xl p-8 flex flex-col justify-between text-white relative overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Contact Info */}
              <div className="flex flex-col justify-between h-full py-4 border-r border-white/10 pr-4">
                 <div className="space-y-4">
                    <div>
                        <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-tech-primary mb-1">Office</p>
                        <p className="text-xs font-medium">(914) 222-3612</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-tech-primary mb-1">Email</p>
                        <p className="text-xs font-medium">david@davidfriedmanlaw.com</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-tech-primary mb-1">Web</p>
                        <p className="text-xs font-medium">davidfriedmanlaw.com</p>
                    </div>
                 </div>

                 <div className="pt-4 border-t border-white/10 mt-auto">
                    <p className="text-[9px] text-white/50 leading-tight">
                        4 Westchester Park Drive, Suite 155<br />
                        White Plains, NY 10604
                    </p>
                 </div>
              </div>

              {/* Practice Areas */}
              <div className="flex flex-col justify-center pl-4 py-4 space-y-3">
                <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-tech-primary mb-1">Practice Areas</p>
                <div className="space-y-2">
                    <p className="text-[10px] font-serif italic text-white/90">• Mortgage Servicing Errors</p>
                    <p className="text-[10px] font-serif italic text-white/90">• Credit Reporting Accuracy</p>
                    <p className="text-[10px] font-serif italic text-white/90">• Debt Collection Defense</p>
                    <p className="text-[10px] font-serif italic text-white/90">• Fintech Usury Claims</p>
                    <p className="text-[10px] font-serif italic text-white/90">• Bankruptcy Rights</p>
                </div>
              </div>
            </div>

            {/* Subtle branding strip */}
            <div className="absolute top-0 right-0 w-12 h-1 bg-tech-primary"></div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-white border border-tech-border rounded-xl p-8 space-y-6">
        <h3 className="text-xl font-serif font-bold text-tech-text">How to Order at Moo.com</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-tech-muted">
            <div className="space-y-3">
                <p className="font-bold text-tech-text">1. Export Settings</p>
                <p>Moo requires a 0.05" bleed. These designs are high-resolution 3.5" x 2". For the best result, use the "Take Screenshot" feature or Print to PDF at 100% scale.</p>
                <p className="font-bold text-tech-text pt-2">2. MOO Card Choice</p>
                <p>I recommend their <b>"Luxe"</b> business cards. They have a triple-layer thickness with a colored center. Choose the <b>Amber/Zest</b> color for the center seam—it will match your brand's primary gold perfectly.</p>
            </div>
            <div className="space-y-3">
                <p className="font-bold text-tech-text">3. Finish</p>
                <p>Choose <b>"Original Matte"</b> or <b>"Super"</b> finish. Avoid High Gloss, as it doesn't reflect the technical, traditional feel of a law office well.</p>
                <LinkButton />
            </div>
        </div>
      </div>
    </div>
  );
};

const LinkButton = () => (
    <a 
        href="https://www.moo.com/us/business-cards/standard" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block"
    >
        <Button>Order at Moo.com</Button>
    </a>
);

export default BusinessCardTool;
