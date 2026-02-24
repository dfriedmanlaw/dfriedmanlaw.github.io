import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 border-b relative overflow-hidden bg-tech-bg border-tech-border">
      
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
        
        <div className="pt-8">
            <div className="inline-block mb-6">
                <h2 className="text-xs font-sans font-bold text-tech-primary tracking-widest uppercase">
                    Modern Litigation Structure
                </h2>
            </div>
           
            <h3 className="text-3xl md:text-4xl lg:text-5xl mb-12 text-tech-text font-serif font-medium leading-tight">
                Elite advocacy. Results-driven.<br />
                <span className="italic text-tech-muted">Seamless process.</span>
            </h3>
            
            <div className="space-y-12">
                {['Direct Technical Advocacy', 'Statutory Fee-Shifting', 'Digital-First Infrastructure'].map((title, idx) => (
                    <div key={idx} className="group">
                        <div>
                            <h4 className="text-xl font-bold mb-2 font-serif text-tech-text">
                                {title}
                            </h4>
                            <p className="text-tech-muted font-light font-sans leading-relaxed">
                                {idx === 0 && "We investigate the mechanical system errors—from misapplied mortgage payments to unauthorized Zelle transfers—that customer service ignores."}
                                {idx === 1 && "We use the enforcement power of the FCRA, FDCPA, and RESPA to shift the cost of litigation to the banks."}
                                {idx === 2 && "We’ve eliminated the administrative drag. No paper questionnaires. Just a secure, high-speed digital experience."}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="relative">
            {/* Bio Card */}
            <div className="bg-white border border-tech-border p-8 rounded-2xl shadow-xl">
                <div className="flex flex-col gap-6">
                    <div>
                        <span className="text-tech-primary font-sans font-bold text-xs uppercase tracking-widest mb-2 block">Attorney Profile</span>
                        <h4 className="text-3xl font-serif text-tech-text">David Friedman</h4>
                        <p className="text-sm text-tech-muted font-sans mt-1">New York / Minnesota</p>
                    </div>

                    <p className="text-tech-muted font-serif italic text-lg leading-relaxed">
                        “I am a consumer litigation specialist fighting financial institutions. Originally from Queens and seasoned in the Midwest, I combine technical precision with the personalized attention of a solo practice.”
                    </p>
                    
                    <div className="flex items-center gap-2 text-tech-text font-bold text-sm uppercase tracking-wide cursor-pointer hover:text-tech-primary transition-colors pt-2 font-sans">
                            Read Full Bio 
                            <span className="text-tech-primary">→</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;