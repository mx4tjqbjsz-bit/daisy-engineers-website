import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useContactData } from '@/hooks/useSanityData';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const data = useContactData();
  
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    message: '',
  });

  useEffect(() => {
    const section = sectionRef.current;
    const info = infoRef.current;
    const form = formRef.current;
    const image = imageRef.current;

    if (!section || !info || !form || !image) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(info,
        { x: '-10vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: info,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo(form,
        { x: '10vw', rotate: 1, scale: 0.96, opacity: 0 },
        {
          x: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: form,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo(image,
        { y: '10vh', scale: 0.92, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll respond within two business days.");
    setFormData({ name: '', email: '', organisation: '', message: '' });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-screen py-20 md:py-32 bg-daisy-offwhite"
    >
      <div className="px-[6vw] grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Left info */}
        <div ref={infoRef}>
          <span className="label-mono block mb-4">{data.label}</span>
          <h2 className="heading-lg mb-4">
            {data.headline}
          </h2>
          <p className="text-daisy-gray font-body text-base leading-relaxed mb-8 max-w-md">
            {data.description}
          </p>

          {/* Contact details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-daisy-gold/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-daisy-gold" />
              </div>
              <span className="font-body text-daisy-black">{data.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-daisy-gold/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-daisy-gold" />
              </div>
              <span className="font-body text-daisy-black">{data.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-daisy-gold/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-daisy-gold" />
              </div>
              <span className="font-body text-daisy-black">{data.location}</span>
            </div>
          </div>

          {/* Decorative image */}
          <div
            ref={imageRef}
            className="hidden md:block w-[18vw] h-[22vh] card-rounded shadow-card mt-12"
          >
            <img
              src="/contact_office.jpg"
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right form */}
        <div
          ref={formRef}
          className="bg-white rounded-3xl p-6 md:p-10 shadow-card"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-daisy-black font-body text-sm mb-2 block">
                Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="bg-daisy-offwhite border-0 rounded-xl h-12"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-daisy-black font-body text-sm mb-2 block">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="bg-daisy-offwhite border-0 rounded-xl h-12"
                required
              />
            </div>
            <div>
              <Label htmlFor="organisation" className="text-daisy-black font-body text-sm mb-2 block">
                Organisation
              </Label>
              <Input
                id="organisation"
                value={formData.organisation}
                onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                placeholder="Company or municipality"
                className="bg-daisy-offwhite border-0 rounded-xl h-12"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-daisy-black font-body text-sm mb-2 block">
                Message
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your project..."
                className="bg-daisy-offwhite border-0 rounded-xl min-h-[120px] resize-none"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full btn-gold h-12"
            >
              <Send className="w-4 h-4 mr-2" />
              {data.ctaText}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
