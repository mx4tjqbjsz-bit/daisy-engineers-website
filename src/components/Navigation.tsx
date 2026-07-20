import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-daisy-offwhite/90 backdrop-blur-md py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="px-[6vw] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/logo-header.png"
              alt="Daisy Consulting Engineers"
              className="h-14 md:h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-daisy-black hover:text-daisy-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 bg-daisy-gold text-white font-body text-sm font-medium rounded-full transition-all duration-300 hover:bg-daisy-black"
            >
              Start a project
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-daisy-black"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-daisy-offwhite transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-heading text-2xl font-light text-daisy-black hover:text-daisy-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-daisy-gold text-white font-body text-base font-medium rounded-full"
          >
            Start a project
          </a>
        </div>
      </div>
    </>
  );
}
