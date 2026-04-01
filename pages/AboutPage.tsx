import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 min-h-screen bg-tech-bg">
      <section className="max-w-[1000px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Bio Column */}
            <div className="md:col-span-8 space-y-8">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-tech-text tracking-tight mb-6 leading-tight">
                    David Friedman
                </h1>
                <h2 className="text-xl text-tech-primary font-sans font-bold uppercase tracking-widest mb-8">
                    Consumer Protection Attorney
                </h2>

                <div className="prose prose-lg prose-stone font-serif text-tech-muted leading-relaxed">
                    <p className="mb-8">
                        Originally from Queens, New York, and seasoned in the Midwest, I combine the precision of a subject matter expert with the personalized attention of a boutique practice. I believe in putting the weight of federal consumer protection statutes behind consumers who have been told they have no power.
                    </p>
                    <p className="mb-8">
                        My extensive background in federal bankruptcy court provided a look “under the hood” of the banking system. I spent years dissecting mortgage statements and credit reports, uncovering the systemic errors that banks hope consumers never notice. Today, I use that deep technical expertise to litigate affirmative claims against those same institutions. I do not run a “volume shop.” I hand-select cases where I believe I can make a significant impact on the law and my client’s life.
                    </p>
                    
                    <h3 className="text-2xl font-bold text-tech-text mt-12 mb-4">Why I Fight Banks</h3>
                    <p className="mb-8">
                        The modern financial system is automated, impersonal, and often broken. When a computer algorithm denies your mortgage modification or freezes your bank account, there is often no human being to talk to. I use the federal court system to force these institutions to answer for their errors.
                    </p>
                    <p>
                        My philosophy is simple: <strong>The law is a tool for leveling the playing field.</strong> When a bank violates a federal statute, they should pay for it.
                    </p>

                    <h3 className="text-2xl font-bold text-tech-text mt-12 mb-4">Referrals & Co-Counsel</h3>
                    <p className="mb-8">
                        I partner with other attorneys as co-counsel or accept referrals for consumer litigation, with a primary focus on the <strong>Southern District of New York (SDNY)</strong>. If your client is facing a complex mortgage servicing error, a persistent credit reporting inaccuracy, or an aggressive debt collector, I can provide the federal litigation support needed to turn a problem case into a statutory fee-shifting opportunity.
                    </p>

                    <h3 className="text-2xl font-bold text-tech-text mt-12 mb-4">Bar Admissions</h3>
                    <ul className="list-disc pl-5 space-y-2 font-sans text-base">
                        <li>State of New York</li>
                        <li>State of Minnesota</li>
                        <li>U.S. District Court for the Southern District of New York (SDNY)</li>
                        <li>U.S. District Court for the District of Minnesota</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-tech-text mt-12 mb-4">Education</h3>
                    <ul className="list-disc pl-5 space-y-2 font-sans text-base">
                        <li><strong>J.D.</strong>, University of Minnesota, 2006</li>
                        <li><strong>B.A.</strong>, SUNY Binghamton, 2002</li>
                    </ul>

                </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-4 space-y-8">
                <div className="overflow-hidden rounded-xl border border-tech-border shadow-md">
                    <img 
                        src="/david-about.png" 
                        alt="David Friedman" 
                        className="w-full h-auto object-cover"
                        referrerPolicy="no-referrer"
                    />
                </div>
                <div className="bg-white border border-tech-border p-6 rounded-xl shadow-lg sticky top-24">
                    
                    <h3 className="text-lg font-serif font-bold text-tech-text mb-2">
                        Contact David
                    </h3>
                    <p className="text-sm text-tech-muted mb-6 font-sans">
                        Available for consultation on FCRA, FDCPA, and RESPA matters.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                        <a href="mailto:david@davidfriedmanlaw.com" className="flex items-center text-sm font-bold text-tech-primary hover:underline">
                            david@davidfriedmanlaw.com
                        </a>
                        <a href="tel:914-222-3612" className="flex items-center text-sm font-bold text-tech-text hover:text-tech-primary transition-colors">
                            (914) 222-3612
                        </a>
                    </div>

                    <Link to="/intake/" className="block">
                        <Button fullWidth>Evaluate My Case</Button>
                    </Link>
                </div>
            </div>

        </div>
      </section>
    </main>
  );
};

export default AboutPage;
