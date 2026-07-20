import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useStagesData } from '@/hooks/useSanityData';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectStages() {
  const data = useStagesData();
  
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const list = listRef.current;
    const items = itemRefs.current.filter(Boolean);
    const image = imageRef.current;

    if (!section || !list || !image || items.length === 0) return;

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
      scrollTl.fromTo(list,
        { x: '-22vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      items.forEach((item, i) => {
        scrollTl.fromTo(item,
          { x: '-10vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.08 + i * 0.03
        );
      });

      scrollTl.fromTo(image,
        { x: '60vw', scale: 0.92, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0.1
      );

      // SETTLE (30% - 70%) - hold static

      // EXIT (70% - 100%)
      scrollTl.fromTo(list,
        { y: 0, opacity: 1 },
        { y: '-18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(image,
        { x: 0, scale: 1, opacity: 1 },
        { x: '22vw', scale: 0.94, opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full h-screen overflow-hidden bg-daisy-offwhite"
    >
      {/* Left stage list */}
      <div
        ref={listRef}
        className="absolute left-[6vw] top-[14vh] w-[40vw]"
      >
        <span className="label-mono block mb-4">{data.label}</span>
        <h2 className="heading-lg mb-4">{data.headline}</h2>
        <p className="text-daisy-gray font-body text-base leading-relaxed mb-8 max-w-md">
          {data.description}
        </p>

        {/* Stage list */}
        <div className="space-y-3">
          {data.items.map((stage, index) => (
            <div
              key={stage.num}
              ref={el => { itemRefs.current[index] = el; }}
              className="flex items-center gap-4 group"
            >
              <span className="font-mono text-sm text-daisy-gold font-medium">
                {stage.num}
              </span>
              <span className="font-heading text-lg md:text-xl font-light text-daisy-black group-hover:text-daisy-gold transition-colors">
                {stage.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right image */}
      <div
        ref={imageRef}
        className="absolute right-[6vw] top-[14vh] w-[44vw] h-[72vh] card-rounded shadow-card"
      >
        <img
          src="/stages_site_meeting.jpg"
          alt="Site meeting"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Caption */}
      <div className="absolute right-[6vw] top-[88vh] text-right">
        <span className="label-mono text-daisy-gold">{data.caption}</span>
      </div>
    </section>
  );
}
