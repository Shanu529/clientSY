import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import AmenitiesSection from "@/components/home/AmenitiesSection";
import GallerySection from "@/components/home/GallerySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutPreview />
      <FeaturedRooms />
      <AmenitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default Index;
