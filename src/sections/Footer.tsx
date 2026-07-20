import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fallbackData } from '@/lib/sanity';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const data = fallbackData.footer;
  
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const content = contentRef.current;

    if (!footer || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(content,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full py-8 bg-daisy-offwhite border-t border-daisy-black/10"
    >
      <div
        ref={contentRef}
        className="px-[6vw] flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p className="font-body text-sm text-daisy-gray">
          {data.copyright}
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {data.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-daisy-gray hover:text-daisy-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
