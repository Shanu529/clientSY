import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Waves, Wifi, UtensilsCrossed, Dumbbell, Car, Flower2, Coffee, Shirt, Wine, Music, Baby, ShieldCheck } from "lucide-react";

const amenities = [
  { icon: Flower2, label: "Luxury Spa", desc: "Full-service spa with traditional and modern treatments, steam room, and relaxation lounge." },
  { icon: Waves, label: "Infinity Pool", desc: "Temperature-controlled infinity pool with poolside bar and cabanas." },
  { icon: Wifi, label: "High-Speed WiFi", desc: "Complimentary high-speed internet throughout the property." },
  { icon: UtensilsCrossed, label: "Fine Dining", desc: "Three award-winning restaurants offering Indian, Continental, and Asian cuisines." },
  { icon: Dumbbell, label: "Fitness Center", desc: "24-hour state-of-the-art gym with personal trainers available." },
  { icon: Car, label: "Valet Parking", desc: "Complimentary valet parking and luxury airport transfers." },
  { icon: Coffee, label: "Lounge & Bar", desc: "Rooftop bar with craft cocktails and panoramic city views." },
  { icon: Shirt, label: "Laundry Service", desc: "Same-day premium laundry and dry-cleaning service." },
  { icon: Wine, label: "Wine Cellar", desc: "Curated collection of over 500 wines from around the world." },
  { icon: Music, label: "Banquet Hall", desc: "Grand ballroom for weddings, conferences, and celebrations." },
  { icon: Baby, label: "Kids Club", desc: "Supervised play area with activities for children of all ages." },
  { icon: ShieldCheck, label: "24/7 Security", desc: "Round-the-clock security with CCTV surveillance and in-room safes." },
];

const Amenities = () => {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-16 section-padding bg-background">
        <div className="container-luxury lg:text-center">
          <ScrollReveal>
            <p className="font-accent text-lg text-sapphire tracking-[0.3em] uppercase mb-4">World-Class</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="sapphire-gradient-text">Amenities</span>
            </h1>
            <div className="divider-sapphire mb-6 w-full lg:w-16" />
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">Every amenity at hotel Icon is designed to exceed your expectations.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 px-4 md:px-8">
        <div className="container-luxury grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 80} direction="scale">
              <div className="glass-card rounded-sm p-8 hover-lift group h-full">
                <div className="w-16 h-16 mb-6 rounded-full border border-sapphire/20 flex items-center justify-center group-hover:bg-sapphire/10 transition-all duration-500">
                  <item.icon className="w-7 h-7 text-sapphire" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.label}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Amenities;
