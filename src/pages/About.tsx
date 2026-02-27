import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
// import lobbyImg from "@/assets/gallery-lobby.jpg";
import lobbyImg from "@/assets/aboutImg.png";
import heroImg from "@/assets/mainimg.jpg";

const About = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[55vh] sm:h-[65vh] md:h-[75vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Royal Orchid Palace"
          className="w-full h-full object-cover"
        />

        {/* 🔥 Dark Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <ScrollReveal>
            <p className="font-accent text-sm sm:text-base md:text-lg text-sapphire tracking-[0.3em] uppercase mb-3 sm:mb-4">
              Our Story
            </p>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-white">
              About <span className="sapphire-gradient-text">Hotel Icon</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-luxury px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-20">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="hover-zoom rounded-sm overflow-hidden sapphire-border">
                <img
                  src={lobbyImg}
                  alt="Grand lobby"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal direction="right" delay={200}>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                A Heritage of{" "}
                <span className="sapphire-gradient-text">Excellence</span>
              </h2>

              <div className="divider-sapphire !mx-0 mb-6 md:mb-8" />

              <div className="space-y-4 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Located in the heart of the city, Hotel Icon was founded with
                  a vision to redefine modern hospitality by blending elegance,
                  comfort, and exceptional service. Our hotel is designed to
                  offer a refined sanctuary where guests can relax, recharge,
                  and experience true luxury.
                </p>

                <p>
                  With contemporary architecture, thoughtfully curated
                  interiors, and world-class amenities, Hotel Icon reflects
                  sophistication in every detail. From business travelers to
                  leisure guests, we ensure every stay is seamless, comfortable,
                  and memorable.
                </p>

                <p>
                  Featuring over 150 beautifully crafted rooms and suites, fine
                  dining experiences, premium wellness facilities, and
                  personalized service, Hotel Icon is committed to delivering
                  hospitality that goes beyond expectations.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* ================= STATS SECTION ================= */}
          <ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { number: "150+", label: "Luxury Rooms" },
                { number: "25+", label: "Years of Excellence" },
                { number: "50K+", label: "Happy Guests" },
                { number: "15+", label: "Awards Won" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center glass-card rounded-sm p-6 md:p-8 hover-lift"
                >
                  <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold sapphire-gradient-text mb-2">
                    {stat.number}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground tracking-wider uppercase">
                    {stat.label}
                  </p>
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
