import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { useHeroData } from '@/hooks/useSanityData';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const data = useHeroData();
  
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftImage = leftImageRef.current;
    const rightImage = rightImageRef.current;
    const headline = headlineRef.current;
    const cta = ctaRef.current;
    const label = labelRef.current;

    if (!section || !leftImage || !rightImage || !headline || !cta || !label) return;

    const ctx = gsap.context(() => {
      // Auto-play entrance animation on load
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(leftImage,
        { x: '-60vw', rotate: -2, scale: 0.96, opacity: 0 },
        { x: 0, rotate: 0, scale: 1, opacity: 1, duration: 1 }
      )
      .fromTo(rightImage,
        { x: '60vw', rotate: 2, scale: 0.96, opacity: 0 },
        { x: 0, rotate: 0, scale: 1, opacity: 1, duration: 1 },
        0
      )
      .fromTo(headline,
        { y: '18vh', scale: 0.92, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.8 },
        0.25
      )
      .fromTo([cta, label],
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
        0.5
      );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back to top
            gsap.set([leftImage, rightImage, headline, cta, label], {
              opacity: 1, x: 0, y: 0, scale: 1, rotate: 0
            });
          }
        }
      });

      // EXIT phase (70% - 100%)
      scrollTl.fromTo(headline,
        { y: 0, scale: 1, opacity: 1 },
        { y: '-35vh', scale: 0.92, opacity: 0, ease: 'power2.in' },
        0.7
      )
      .fromTo(leftImage,
        { x: 0, rotate: 0, opacity: 1 },
        { x: '-40vw', rotate: -2, opacity: 0, ease: 'power2.in' },
        0.7
      )
      .fromTo(rightImage,
        { x: 0, rotate: 0, opacity: 1 },
        { x: '40vw', rotate: 2, opacity: 0, ease: 'power2.in' },
        0.7
      )
      .fromTo([cta, label],
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.75
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-daisy-offwhite"
    >
      {/* Micro label */}
      <div
        ref={labelRef}
        className="absolute top-[7vh] left-1/2 -translate-x-1/2 z-20"
      >
        <span className="label-mono">{data.label}</span>
      </div>

      {/* Left image card */}
      <div
        ref={leftImageRef}
        className="absolute left-[6vw] top-[14vh] w-[34vw] h-[72vh] card-rounded shadow-card"
      >
        <img
          src="/hero_engineering_detail.jpg"
          alt="Engineering site detail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right image card */}
      <div
        ref={rightImageRef}
        className="absolute right-[6vw] top-[14vh] w-[34vw] h-[72vh] card-rounded shadow-card"
      >
        <img
          src="/hero_aerial_road.jpg"
          alt="Aerial road construction"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center headline block */}
      <div
        ref={headlineRef}
        className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 z-10 w-[min(52vw,720px)] bg-daisy-offwhite p-7 md:p-9"
      >
        <h1 className="heading-xl mb-4">
          {data.headline.split('. ').map((line, i) => (
            <span key={i}>
              {line}{i < data.headline.split('. ').length - 1 && '.'}
              {i < data.headline.split('. ').length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="text-daisy-gray font-body text-base md:text-lg leading-relaxed mb-6 max-w-md">
          {data.subheadline}
        </p>
        
        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-4">
          <a href="#services" className="btn-gold">
            {data.ctaText}
          </a>
          <a href="#projects" className="text-link">
            {data.secondaryCtaText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
