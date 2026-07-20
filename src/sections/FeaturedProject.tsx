import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { useFeaturedProjectData } from '@/hooks/useSanityData';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProject() {
  const data = useFeaturedProjectData();
  
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const image = imageRef.current;
    const details = detailsRef.current;

    if (!section || !headline || !image || !details) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(headline,
        { x: '-60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(image,
        { x: '60vw', rotate: 2, scale: 0.92, opacity: 0 },
        { x: 0, rotate: 0, scale: 1, opacity: 1, ease: 'none' },
        0.08
      );

      scrollTl.fromTo(details,
        { y: '18vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.14
      );

      // SETTLE (30% - 70%) - hold static

      // EXIT (70% - 100%)
      scrollTl.fromTo(headline,
        { y: 0, opacity: 1 },
        { y: '-22vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(image,
        { x: 0, scale: 1, opacity: 1 },
        { x: '22vw', scale: 0.94, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(details,
        { y: 0, opacity: 1 },
        { y: '10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-daisy-offwhite"
    >
      {/* Large headline */}
      <div
        ref={headlineRef}
        className="absolute left-[6vw] top-[18vh] w-[70vw]"
      >
        <h2 className="font-heading text-[clamp(72px,10vw,160px)] font-light leading-[0.9] tracking-[-0.02em] text-daisy-black">
          {data.headline}
        </h2>
        <p className="font-heading text-2xl md:text-3xl font-light text-daisy-gray mt-2">
          {data.subheadline}
        </p>
      </div>

      {/* Right image */}
      <div
        ref={imageRef}
        className="absolute right-[6vw] top-[16vh] w-[46vw] h-[68vh] card-rounded shadow-card"
      >
        <img
          src={data.image || '/featured_middelburg.jpg'}
          alt={data.headline}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project details */}
      <div
        ref={detailsRef}
        className="absolute left-[6vw] top-[62vh] w-[30vw]"
      >
        <div className="space-y-2 mb-6">
          <p className="font-body text-sm text-daisy-gray">
            <span className="text-daisy-black font-medium">Client:</span> {data.client}
          </p>
          <p className="font-body text-sm text-daisy-gray">
            <span className="text-daisy-black font-medium">Scope:</span> {data.scope}
          </p>
          <p className="font-body text-sm text-daisy-gray">
            <span className="text-daisy-black font-medium">Value:</span> {data.value}
          </p>
        </div>
        <a href="#projects" className="text-link">
          {data.ctaText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
