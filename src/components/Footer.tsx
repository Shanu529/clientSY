import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-sapphire-muted">
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold sapphire-gradient-text mb-4">
              Royal Orchid Palace
            </h3>
            <p className="font-accent text-lg text-muted-foreground leading-relaxed">
              Where luxury meets tradition. Experience the finest hospitality in the heart of Punjab.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg text-sapphire mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "Rooms", "About", "Amenities", "Gallery", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="font-body text-sm text-muted-foreground hover:text-sapphire transition-colors duration-300 tracking-wide"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg text-sapphire mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-sapphire mt-1 flex-shrink-0" />
                <span className="font-body text-sm text-muted-foreground">
                  GT Road, Civil Lines,<br />Ludhiana, Punjab 141001, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-sapphire flex-shrink-0" />
                <span className="font-body text-sm text-muted-foreground">+91-161-555-0100</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-sapphire flex-shrink-0" />
                <span className="font-body text-sm text-muted-foreground">info@royalorchidpalace.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg text-sapphire mb-6">Hours</h4>
            <div className="flex flex-col gap-3 font-body text-sm text-muted-foreground">
              <p>Check-in: 2:00 PM</p>
              <p>Check-out: 12:00 PM</p>
              <p>Front Desk: 24/7</p>
              <p>Restaurant: 7 AM – 11 PM</p>
            </div>
            <div className="flex gap-4 mt-6">
              {["Facebook", "Instagram", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-sapphire/30 flex items-center justify-center text-sapphire/60 hover:bg-sapphire hover:text-primary-foreground transition-all duration-300 text-xs font-body"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-sapphire mt-16 mb-8" />
        <p className="text-center font-body text-xs text-muted-foreground tracking-widest uppercase">
          © 2026 Royal Orchid Palace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
