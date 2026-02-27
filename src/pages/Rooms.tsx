import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomExecutive from "@/assets/room-executive.jpg";
import roomPresidential from "@/assets/room-presidential.jpg";
import galleryRooftop from "@/assets/gallery-rooftop.jpg";

const allRooms = [
  { name: "Deluxe Room", price: "₹8,500", size: "350 sq ft", guests: "2 Adults", description: "Elegantly appointed with premium furnishings, marble bathroom, and stunning city views. Features king-size bed, minibar, and 24-hour room service.", image: roomDeluxe, features: ["King Bed", "City View", "Marble Bath", "Minibar", "Free WiFi"] },
  { name: "Executive Suite", price: "₹15,000", size: "600 sq ft", guests: "2 Adults + 1 Child", description: "A lavish suite with separate living area, walk-in closet, premium bar, and panoramic views of the city. Includes butler service and lounge access.", image: roomExecutive, features: ["King Bed", "Living Area", "Lounge Access", "Butler Service", "Panoramic View"] },
  { name: "Presidential Suite", price: "₹35,000", size: "1200 sq ft", guests: "2 Adults + 2 Children", description: "The pinnacle of luxury — private dining room, personal butler, jacuzzi, and royal opulence in every detail. A truly regal experience.", image: roomPresidential, features: ["Master Bedroom", "Private Dining", "Jacuzzi", "Personal Butler", "Royal Décor"] },
  { name: "Royal Penthouse", price: "₹55,000", size: "2000 sq ft", guests: "4 Adults", description: "Our crown jewel — spanning the entire top floor with private terrace, dedicated staff, and unmatched luxury for the most discerning guests.", image: galleryRooftop, features: ["Private Terrace", "2 Bedrooms", "Dedicated Staff", "Private Pool", "Helicopter Transfer"] },
];

const Rooms = () => {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-16 section-padding bg-background">
        <div className="container-luxury lg:text-center">
          <ScrollReveal>
            <p className="font-accent text-lg text-sapphire tracking-[0.3em] uppercase mb-4">Accommodations</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              Rooms & <span className="sapphire-gradient-text">Suites</span>
            </h1>
            <div className="divider-sapphire mb-6 w-full lg:w-16" />
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">Each of our rooms and suites is a masterpiece of design, offering an oasis of comfort and luxury.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 px-4 md:px-8">
        <div className="container-luxury space-y-16">
          {allRooms.map((room, i) => (
            <ScrollReveal key={room.name} delay={i * 100}>
              <div className="glass-card rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                <div className={`hover-zoom h-80 lg:h-auto ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{room.name}</h2>
                    <div className="text-right">
                      <span className="font-accent text-2xl text-sapphire">{room.price}</span>
                      <p className="font-body text-xs text-muted-foreground">per night</p>
                    </div>
                  </div>
                  <div className="flex gap-4 mb-4 text-sm text-muted-foreground font-body">
                    <span>{room.size}</span><span>•</span><span>{room.guests}</span>
                  </div>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">{room.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {room.features.map((f) => (
                      <span key={f} className="font-body text-xs text-sapphire border border-sapphire/20 px-3 py-1 rounded-sm">{f}</span>
                    ))}
                  </div>
                  <button className="sapphire-gradient-bg text-primary-foreground font-body text-sm font-semibold tracking-[0.2em] uppercase px-8 py-3 btn-glow rounded-sm w-fit">
                    Reserve Now
                  </button>
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

export default Rooms;
