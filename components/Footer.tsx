import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-tech-surface border-t border-tech-border pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-tech-text mb-4 tracking-tight">David Friedman</h2>
                <div className="h-1 w-20 bg-tech-primary mb-6"></div>
                <p className="text-tech-muted max-w-md font-sans leading-relaxed">
                    High-leverage litigation for systemic financial errors. Representing consumers in New York.
                </p>
            </div>

            <div>
                <h3 className="text-xs font-sans font-bold text-tech-primary uppercase tracking-widest mb-6 border-b border-tech-border pb-2">Contact</h3>
                <ul className="space-y-4 text-tech-muted font-sans text-sm">
                    <li className="leading-relaxed">
                        4 Westchester Park Drive<br />
                        Suite 155<br />
                        White Plains, NY 10604
                    </li>
                    <li>
                        <a href="tel:9142223612" className="hover:text-tech-primary transition-colors decoration-dotted underline underline-offset-4">
                            (914) 222-3612
                        </a>
                    </li>
                    <li>
                        <a href="mailto:david@davidfriedmanlaw.com" className="hover:text-tech-primary transition-colors decoration-dotted underline underline-offset-4">
                            david@davidfriedmanlaw.com
                        </a>
                    </li>
                    <li className="text-xs text-tech-muted/80 mt-4 border-l-2 border-tech-primary/50 pl-2 italic">
                        * Appointments by digital intake only.
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="text-xs font-sans font-bold text-tech-primary uppercase tracking-widest mb-6 border-b border-tech-border pb-2">
                    Jurisdictions
                </h3>
                <ul className="space-y-4 text-tech-muted font-sans text-sm">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-tech-primary rounded-full mr-2"></span> New York</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-tech-primary rounded-full mr-2"></span> Minnesota</li>
                </ul>
            </div>
        </div>

        <div className="border-t border-tech-border pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-tech-muted font-sans">
            <p>
                © {new Date().getFullYear()} Law Office of David Friedman, PLLC.
            </p>
            <div className="max-w-xl text-right md:text-right text-left">
                <p className="mb-1 uppercase font-bold text-tech-muted">Attorney Advertising</p>
                <p>
                    Prior results do not guarantee a similar outcome.
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-wider">
                    <a href="/#/legal" className="hover:text-tech-primary transition-colors">Legal Disclaimer & Privacy Policy</a>
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;