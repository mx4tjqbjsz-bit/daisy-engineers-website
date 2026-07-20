import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { useProjectsData } from '@/hooks/useSanityData';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsGrid() {
  const data = useProjectsData();
  
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const grid = gridRef.current;
    const cards = cardRefs.current.filter(Boolean);

    if (!section || !headline || !grid || cards.length === 0) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(headline,
        { x: '-18vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(grid,
        { x: '55vw', scale: 0.92, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0.1
      );

      cards.forEach((card, i) => {
        scrollTl.fromTo(card,
          { y: '40vh', rotate: -2, scale: 0.92, opacity: 0 },
          { y: 0, rotate: 0, scale: 1, opacity: 1, ease: 'none' },
          0.12 + i * 0.06
        );
      });

      // SETTLE (30% - 70%) - hold static

      // EXIT (70% - 100%)
      scrollTl.fromTo(headline,
        { y: 0, opacity: 1 },
        { y: '-14vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(grid,
        { y: 0, scale: 1, opacity: 1 },
        { y: '18vh', scale: 0.94, opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full h-screen overflow-hidden bg-daisy-black"
    >
      {/* Headline */}
      <div
        ref={headlineRef}
        className="absolute left-[6vw] top-[10vh] w-[34vw]"
      >
        <span className="label-mono block mb-4 text-white/60">{data.label}</span>
        <h2 className="heading-lg text-white mb-4">
          {data.headline}
        </h2>
        <a href="#contact" className="inline-flex items-center gap-2 text-daisy-gold font-body text-sm font-medium transition-all duration-300 hover:text-white">
          {data.ctaText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="absolute left-[40vw] top-[14vh] w-[54vw] h-[72vh]"
      >
        {/* Top row */}
        <div className="flex gap-4 mb-4 h-[34vh]">
          {data.items.slice(0, 2).map((project, index) => (
            <div
              key={project.title}
              ref={el => { cardRefs.current[index] = el; }}
              className="w-[26vw] h-full card-rounded overflow-hidden relative group cursor-pointer"
            >
              <img
                src={project.image || `/project_${['daveyton', 'manningburg'][index]}.jpg`}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-daisy-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-heading text-lg md:text-xl font-light text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-white/70 font-body text-sm">
                  {project.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row - large card */}
        <div
          ref={el => { cardRefs.current[2] = el; }}
          className="w-full h-[34vh] card-rounded overflow-hidden relative group cursor-pointer"
        >
          <img
            src={data.items[2]?.image || '/project_calfonia.jpg'}
            alt={data.items[2]?.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-daisy-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-heading text-lg md:text-xl font-light text-white mb-1">
              {data.items[2]?.title}
            </h3>
            <p className="text-white/70 font-body text-sm">
              {data.items[2]?.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
