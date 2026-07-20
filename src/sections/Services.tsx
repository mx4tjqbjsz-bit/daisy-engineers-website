import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Route, Droplets, Building2, ClipboardList } from 'lucide-react';
import { useServicesData } from '@/hooks/useSanityData';

gsap.registerPlugin(ScrollTrigger);

const iconMap: { [key: string]: React.ElementType } = {
  'Roads & Earthworks': Route,
  'Stormwater Management': Droplets,
  'Structures': Building2,
  'Project Management': ClipboardList,
};

export default function Services() {
  const data = useServicesData();
  
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const cardsContainer = cardsContainerRef.current;
    const cards = cardRefs.current.filter(Boolean);

    if (!section || !headline || !cardsContainer || cards.length === 0) return;

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
        { x: '-18vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(cardsContainer,
        { x: '55vw', rotate: 6, scale: 0.92, opacity: 0 },
        { x: 0, rotate: 0, scale: 1, opacity: 1, ease: 'none' },
        0.06
      );

      // Cards staggered entrance
      cards.forEach((card, i) => {
        scrollTl.fromTo(card,
          { y: '40vh', rotate: -3, scale: 0.92, opacity: 0 },
          { y: 0, rotate: 0, scale: 1, opacity: 1, ease: 'none' },
          0.06 + i * 0.04
        );
      });

      // SETTLE (30% - 70%) - hold static

      // EXIT (70% - 100%)
      scrollTl.fromTo(headline,
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(cardsContainer,
        { x: 0, rotate: 0, scale: 1, opacity: 1 },
        { x: '-22vw', rotate: -4, scale: 0.92, opacity: 0, ease: 'power2.in' },
        0.76
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full h-screen overflow-hidden bg-daisy-offwhite"
    >
      {/* Left headline block */}
      <div
        ref={headlineRef}
        className="absolute left-[6vw] top-[10vh] w-[34vw]"
      >
        <span className="label-mono block mb-4">{data.label}</span>
        <h2 className="heading-lg mb-4">{data.headline}</h2>
        <p className="text-daisy-gray font-body text-base leading-relaxed mb-6">
          {data.description}
        </p>
        <a href="#contact" className="text-link">
          See all services
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Card deck */}
      <div
        ref={cardsContainerRef}
        className="absolute left-[44vw] top-[18vh] w-[50vw] h-[64vh]"
      >
        {data.items.map((service, index) => {
          const Icon = iconMap[service.title] || Route;
          const imageUrl = service.image || `/service_card_${['road', 'stormwater', 'structure', 'pm'][index]}.jpg`;
          
          return (
            <div
              key={service.title}
              ref={el => { cardRefs.current[index] = el; }}
              className="absolute w-full h-full card-rounded shadow-card overflow-hidden"
              style={{
                transform: `translateX(${index * 18}px) rotate(${index * 1.2}deg)`,
                zIndex: data.items.length - index,
              }}
            >
              <img
                src={imageUrl}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-daisy-black/80 via-daisy-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-daisy-gold/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-daisy-gold" />
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-light text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-white/80 font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
