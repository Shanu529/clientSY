import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Rooms", path: "/rooms" },
  { label: "About", path: "/about" },
  { label: "Amenities", path: "/amenities" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-sapphire-muted shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxury flex items-center justify-between h-20 md:h-24 px-4 md:px-8">
        <Link to="/" className="flex flex-col items-start">
          <span className="font-heading text-xl md:text-2xl font-bold sapphire-gradient-text tracking-wider">
            Royal Orchid
          </span>
          <span className="font-accent text-xs md:text-sm text-muted-foreground tracking-[0.3em] uppercase">
            Palace
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 hover:text-sapphire ${
                location.pathname === link.path ? "text-sapphire" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <button className="sapphire-gradient-bg text-primary-foreground font-body text-sm font-semibold tracking-widest uppercase px-6 py-3 btn-glow rounded-sm transition-all duration-300">
            Book Now
          </button>
        </div>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-sapphire-muted animate-fade-in">
          <div className="flex flex-col items-center py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 hover:text-sapphire ${
                  location.pathname === link.path ? "text-sapphire" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="sapphire-gradient-bg text-primary-foreground font-body text-sm font-semibold tracking-widest uppercase px-6 py-3 btn-glow rounded-sm mt-2">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
