import ScrollReveal from "@/components/ScrollReveal";
import gallerySpa from "@/assets/gallery-spa.jpg";
import galleryDining from "@/assets/gallery-dining.jpg";
import galleryLobby from "@/assets/gallery-lobby.jpg";
import galleryRooftop from "@/assets/gallery-rooftop.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import heroImg from "@/assets/hero.jpg";

const images = [
  { src: galleryLobby, alt: "Grand hotel lobby", span: "md:col-span-2 md:row-span-2" },
  { src: gallerySpa, alt: "Luxury spa pool", span: "" },
  { src: galleryDining, alt: "Fine dining restaurant", span: "" },
  { src: galleryRooftop, alt: "Rooftop lounge", span: "md:col-span-2" },
  { src: roomDeluxe, alt: "Deluxe room interior", span: "" },
  { src: heroImg, alt: "Hotel exterior", span: "" },
];

const GallerySection = () => {
  return (
    <section className="section-padding" style={{ background: "var(--gradient-dark)" }}>
      <div className="container-luxury">
        <ScrollReveal className="text-center mb-16">
          <p className="font-accent text-lg text-sapphire tracking-[0.3em] uppercase mb-4">Visual Journey</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="sapphire-gradient-text">Gallery</span>
          </h2>
          <div className="divider-sapphire" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 100} className={img.span}>
              <div className="hover-zoom rounded-sm overflow-hidden h-64 md:h-full min-h-[250px] cursor-pointer group relative">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-all duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
