import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import lobbyImg from "@/assets/gallery-lobby.jpg";
import heroImg from "@/assets/hero.jpg";

const About = () => {
  return (
    <main>
      <Navbar />
      <section className="relative h-[60vh] overflow-hidden">
        <img src={heroImg} alt="Royal Orchid Palace" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <ScrollReveal>
            <p className="font-accent text-lg text-sapphire tracking-[0.3em] uppercase mb-4">Our Story</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
              About <span className="sapphire-gradient-text">Royal Orchid Palace</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <ScrollReveal direction="left">
              <div className="hover-zoom rounded-sm overflow-hidden sapphire-border">
                <img src={lobbyImg} alt="Grand lobby" className="w-full h-[500px] object-cover" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Heritage of <span className="sapphire-gradient-text">Excellence</span>
              </h2>
              <div className="divider-sapphire !mx-0 mb-8" />
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>Established in the cultural heart of Punjab, Royal Orchid Palace was born from a vision to create a sanctuary that honors the rich heritage of Indian hospitality while embracing the finest standards of modern luxury.</p>
                <p>Our palace-inspired architecture pays homage to the grand traditions of Punjab, while our world-class amenities and services cater to the needs of contemporary travelers seeking extraordinary experiences.</p>
                <p>With over 150 meticulously designed rooms and suites, award-winning restaurants, a rejuvenating spa, and impeccable service, we promise an experience that transcends the ordinary.</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "150+", label: "Luxury Rooms" },
                { number: "25+", label: "Years of Excellence" },
                { number: "50K+", label: "Happy Guests" },
                { number: "15+", label: "Awards Won" },
              ].map((stat) => (
                <div key={stat.label} className="text-center glass-card rounded-sm p-8 hover-lift">
                  <p className="font-heading text-3xl md:text-4xl font-bold sapphire-gradient-text mb-2">{stat.number}</p>
                  <p className="font-body text-sm text-muted-foreground tracking-wider uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
