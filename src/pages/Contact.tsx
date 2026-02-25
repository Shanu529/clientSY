import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-16 section-padding bg-background">
        <div className="container-luxury text-center">
          <ScrollReveal>
            <p className="font-accent text-lg text-sapphire tracking-[0.3em] uppercase mb-4">Get in Touch</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contact <span className="sapphire-gradient-text">Us</span>
            </h1>
            <div className="divider-sapphire mb-6" />
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 px-4 md:px-8">
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                We'd Love to <span className="sapphire-gradient-text">Hear From You</span>
              </h2>
              {[
                { icon: MapPin, title: "Address", text: "GT Road, Civil Lines, Ludhiana, Punjab 141001, India" },
                { icon: Phone, title: "Phone", text: "+91-161-555-0100" },
                { icon: Mail, title: "Email", text: "info@royalorchidpalace.com" },
                { icon: Clock, title: "Front Desk", text: "Available 24 hours, 7 days a week" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-sapphire/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-sapphire" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="glass-card rounded-sm p-8 md:p-10">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-xs text-muted-foreground tracking-wider uppercase block mb-2">Name</label>
                    <input type="text" className="w-full bg-input border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-sapphire transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="font-body text-xs text-muted-foreground tracking-wider uppercase block mb-2">Email</label>
                    <input type="email" className="w-full bg-input border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-sapphire transition-colors" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground tracking-wider uppercase block mb-2">Subject</label>
                  <input type="text" className="w-full bg-input border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-sapphire transition-colors" placeholder="Subject" />
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground tracking-wider uppercase block mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-input border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-sapphire transition-colors resize-none" placeholder="Your message" />
                </div>
                <button type="submit" className="sapphire-gradient-bg text-primary-foreground font-body text-sm font-semibold tracking-[0.2em] uppercase px-8 py-3 btn-glow rounded-sm w-full">
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="h-[400px] relative">
        <iframe
          title="Royal Orchid Palace Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.22394045498!2d75.78534641320047!3d30.90099537440498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681f4c5b6bdf2e76!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-full h-full border-0 grayscale contrast-125 opacity-60"
          allowFullScreen
          loading="lazy"
        />
        <div className="absolute inset-0 pointer-events-none border-t border-sapphire-muted" />
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
