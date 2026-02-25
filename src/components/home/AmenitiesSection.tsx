import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/ScrollReveal";
import { Waves, Wifi, UtensilsCrossed, Dumbbell, Car, Flower2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const amenities = [
  { icon: Flower2, label: "Luxury Spa", desc: "Rejuvenating treatments" },
  { icon: Waves, label: "Swimming Pool", desc: "Temperature-controlled infinity pool" },
  { icon: Wifi, label: "Free WiFi", desc: "High-speed connectivity" },
  { icon: UtensilsCrossed, label: "Fine Dining", desc: "World-class cuisine" },
  { icon: Dumbbell, label: "Fitness Center", desc: "State-of-the-art equipment" },
  { icon: Car, label: "Valet Parking", desc: "Complimentary service" },
];

const AmenitiesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".world-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",   // when section hits 80% of viewport
          toggleActions: "play none none none",
        },
      });

      gsap.from(".amenities-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".divider-sapphire", {
        scaleX: 0,
        duration: 1,
        ease: "power3.out",
        transformOrigin: "center",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-luxury">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="world-text font-accent text-lg text-sapphire tracking-[0.3em] uppercase mb-4">
            World-Class
          </p>

          <h2 className="amenities-title font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Hotel <span className="sapphire-gradient-text">Amenities</span>
          </h2>

          <div className="divider-sapphire mx-auto h-[2px] w-24 bg-sapphire"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {amenities.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 100} direction="scale">
              <div className="glass-card rounded-sm p-8 text-center group cursor-pointer transition-all duration-500 hover:border-sapphire/30 hover:shadow-[0_0_30px_hsl(217_80%_52%/0.1)]">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-sapphire/20 flex items-center justify-center group-hover:bg-sapphire/10 transition-all duration-500">
                  <item.icon className="w-7 h-7 text-sapphire" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {item.label}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AmenitiesSection;