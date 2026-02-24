import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const styles = {
    bg: isScrolled ? 'bg-white/90 backdrop-blur-md border-tech-border shadow-sm' : 'bg-transparent border-transparent',
    textMain: 'text-tech-text',
    textMuted: 'text-tech-muted',
    primary: 'text-tech-primary',
    border: 'border-tech-border',
    font: 'font-sans'
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
        e.preventDefault();
        const id = path.replace('/#', '');
        
        if (location.pathname !== '/') {
            // Navigate to home first, then scroll
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            // Already on home, just scroll
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${styles.bg} py-4`}
    >
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        {/* Logo Area */}
        <Link to="/" className="flex flex-col group cursor-pointer">
            <div className="flex items-center gap-2">
                <span className={`font-sans text-[10px] ${styles.primary} uppercase tracking-widest font-bold`}>
                    Law Office of
                </span>
            </div>
            <h1 className={`text-2xl font-serif font-bold tracking-tight ${styles.textMain}`}>
                David Friedman
            </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group">
                 {/* Parent Link */}
                 {item.path.startsWith('http') ? (
                    <a 
                        href={item.path}
                        className={`text-sm ${styles.font} font-medium ${styles.textMuted} hover:${styles.primary} transition-colors tracking-wide flex items-center`}
                    >
                        {item.label}
                    </a>
                 ) : (
                    <a 
                      href={item.path}
                      onClick={(e) => handleNavClick(e, item.path)}
                      className={`text-sm ${styles.font} font-medium ${styles.textMuted} hover:${styles.primary} transition-colors tracking-wide cursor-pointer flex items-center`}
                    >
                      {item.label}
                      {item.children && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                      )}
                    </a>
                 )}

                 {/* Dropdown Menu */}
                 {item.children && (
                    <div className="absolute top-full -left-4 pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="bg-white border border-tech-border p-2 shadow-xl rounded-lg">
                             {item.children.map((child) => (
                                <Link 
                                    key={child.label}
                                    to={child.path}
                                    className="block px-4 py-3 text-sm font-sans text-tech-muted hover:text-tech-primary hover:bg-tech-surface rounded-md transition-colors"
                                >
                                    {child.label}
                                </Link>
                             ))}
                        </div>
                    </div>
                 )}
            </div>
          ))}
        </nav>

        {/* Action */}
        <div className="hidden md:block">
            <Link to="/intake">
                <Button size="sm" variant="primary">Evaluate Case</Button>
            </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button 
            className={`md:hidden ${styles.textMain} p-2 hover:bg-black/5 rounded-md z-50 relative`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden overflow-y-auto">
                <nav className="flex flex-col space-y-6">
                    {NAV_ITEMS.map((item) => (
                        <div key={item.label} className="border-b border-tech-border pb-4">
                            {item.children ? (
                                <>
                                    <div className="text-lg font-serif font-bold text-tech-text mb-4">{item.label}</div>
                                    <div className="pl-4 space-y-3 border-l-2 border-tech-primary/20">
                                        {item.children.map(child => (
                                            <Link 
                                                key={child.label}
                                                to={child.path}
                                                className="block text-tech-muted hover:text-tech-primary transition-colors"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <a 
                                    href={item.path}
                                    onClick={(e) => handleNavClick(e, item.path)}
                                    className="text-lg font-serif font-bold text-tech-text block"
                                >
                                    {item.label}
                                </a>
                            )}
                        </div>
                    ))}
                    <div className="pt-4">
                        <Link to="/intake" className="block w-full">
                            <Button size="lg" variant="primary" className="w-full justify-center">Evaluate Case</Button>
                        </Link>
                    </div>
                </nav>
            </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;