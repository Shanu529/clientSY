import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import gallerySpa from "@/assets/gallery-spa.jpg";
import galleryDining from "@/assets/gallery-dining.jpg";
import galleryLobby from "@/assets/gallery-lobby.jpg";
import galleryRooftop from "@/assets/gallery-rooftop.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomExecutive from "@/assets/room-executive.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";
import heroImg from "@/assets/hero.jpg";

const images = [
  { src: galleryLobby, alt: "Grand Lobby", category: "Interior" },
  { src: gallerySpa, alt: "Luxury Spa", category: "Wellness" },
  { src: galleryDining, alt: "Fine Dining", category: "Dining" },
  { src: galleryRooftop, alt: "Rooftop Lounge", category: "Lounge" },
  { src: roomDeluxe, alt: "Deluxe Room", category: "Rooms" },
  { src: roomExecutive, alt: "Executive Suite", category: "Rooms" },
  { src: roomPresidential, alt: "Presidential Suite", category: "Rooms" },
  { src: heroImg, alt: "Hotel Exterior", category: "Exterior" },
];

const Gallery = () => {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-16 section-padding bg-background">
        <div className="container-luxury lg:text-center">
          <ScrollReveal>
            <p className="font-accent text-lg text-sapphire tracking-[0.3em] uppercase mb-4">Visual Journey</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="sapphire-gradient-text">Gallery</span>
            </h1>
            <div className="divider-sapphire mb-6 w-full lg:w-16" />
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 px-4 md:px-8">
        <div className="container-luxury grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="hover-zoom rounded-sm overflow-hidden cursor-pointer group relative h-72">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500 flex items-end">
                  <div className="p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-heading text-lg font-semibold text-foreground">{img.alt}</p>
                    <p className="font-body text-xs text-sapphire tracking-wider uppercase">{img.category}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Gallery;
