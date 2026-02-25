import ScrollReveal from "@/components/ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Mehta", role: "Business Traveler", text: "An extraordinary experience from check-in to check-out. The Presidential Suite was beyond anything I've ever experienced. The staff anticipates your every need.", rating: 5 },
  { name: "Rajesh Kapoor", role: "Leisure Guest", text: "Royal Orchid Palace redefines luxury in Punjab. The spa, the dining, the rooms — everything is impeccable. This is now our family's go-to destination.", rating: 5 },
  { name: "Ananya Singh", role: "Honeymoon Guest", text: "We celebrated our anniversary here and it was magical. The rooftop dining experience with the city view was the highlight. Truly unforgettable.", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <ScrollReveal className="text-center mb-16">
          <p className="font-accent text-lg text-sapphire tracking-[0.3em] uppercase mb-4">Guest Experiences</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="sapphire-gradient-text">Guests Say</span>
          </h2>
          <div className="divider-sapphire" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 150}>
              <div className="glass-card rounded-sm p-8 hover-lift h-full flex flex-col">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-sapphire text-sapphire" />
                  ))}
                </div>
                <p className="font-accent text-lg text-foreground/80 italic leading-relaxed mb-8 flex-1">"{t.text}"</p>
                <div>
                  <p className="font-heading text-base font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground tracking-wider uppercase">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
