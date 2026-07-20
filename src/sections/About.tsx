import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { useAboutData } from '@/hooks/useSanityData';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const data = useAboutData();
  
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardARef = useRef<HTMLDivElement>(null);
  const cardBRef = useRef<HTMLDivElement>(null);
  const textARef = useRef<HTMLDivElement>(null);
  const textBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const cardA = cardARef.current;
    const cardB = cardBRef.current;
    const textA = textARef.current;
    const textB = textBRef.current;

    if (!section || !headline || !cardA || !cardB || !textA || !textB) return;

    const ctx = gsap.context(() => {
      // Headline animation
      gsap.fromTo(headline,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headline,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Card A animation
      gsap.fromTo(cardA,
        { x: '-12vw', rotate: -1, scale: 0.96, opacity: 0 },
        {
          x: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardA,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Card B animation
      gsap.fromTo(cardB,
        { x: '12vw', rotate: 1, scale: 0.96, opacity: 0 },
        {
          x: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardB,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Text animations
      [textA, textB].forEach((text) => {
        gsap.fromTo(text,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: text,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen py-20 md:py-32 bg-daisy-offwhite"
    >
      {/* Headline */}
      <div
        ref={headlineRef}
        className="px-[6vw] mb-12 md:mb-16"
      >
        <span className="label-mono block mb-4">{data.label}</span>
        <h2 className="heading-lg max-w-xl">
          {data.headline}
        </h2>
      </div>

      {/* Cards grid */}
      <div className="px-[6vw] grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Card A */}
        <div>
          <div
            ref={cardARef}
            className="w-full h-[45vh] md:h-[52vh] card-rounded shadow-card mb-6"
          >
            <img
              src={data.cards[0]?.image || '/about_thinking.jpg'}
              alt={data.cards[0]?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div ref={textARef}>
            <h3 className="font-heading text-xl md:text-2xl font-light text-daisy-black mb-3">
              {data.cards[0]?.title}
            </h3>
            <p className="text-daisy-gray font-body text-base leading-relaxed">
              {data.cards[0]?.description}
            </p>
          </div>
        </div>

        {/* Card B */}
        <div>
          <div
            ref={cardBRef}
            className="w-full h-[45vh] md:h-[52vh] card-rounded shadow-card mb-6"
          >
            <img
              src={data.cards[1]?.image || '/about_partner.jpg'}
              alt={data.cards[1]?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div ref={textBRef}>
            <h3 className="font-heading text-xl md:text-2xl font-light text-daisy-black mb-3">
              {data.cards[1]?.title}
            </h3>
            <p className="text-daisy-gray font-body text-base leading-relaxed">
              {data.cards[1]?.description}
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-[6vw] mt-12">
        <a href="#contact" className="text-link">
          {data.ctaText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
