import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lobbyImg from "@/assets/gallery-lobby.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutPreview = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: true,
          pin: true,
        },
      });

      // Image reveal (clip effect)
      tl.from(imageRef.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 1,
        ease: "power3.out",
      });

      // Parallax zoom
      tl.fromTo(
        imageRef.current.querySelector("img"),
        { scale: 1.3 },
        { scale: 1, duration: 1 },
        0,
      );

      // Text stagger reveal
      tl.from(
        contentRef.current.children,
        {
          y: 80,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
        },
        0.3,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative  min-h-screen bg-black overflow-hidden flex items-center"
    >
      {/* Blue ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative rounded-xl overflow-hidden">
            <img
              src={lobbyImg}
              alt="Royal Orchid Palace grand lobby"
              className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 border border-blue-500/30 rounded-xl" />
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <p className="uppercase tracking-[0.4em] text-blue-400 text-sm mb-4">
              Our Story
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              A Legacy of{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Elegance
              </span>
            </h2>

            <div className="w-16 h-1 bg-blue-500 mb-8 rounded-full" />

            <p className="text-gray-300 leading-relaxed mb-6">
              Nestled in the vibrant heart of Ludhiana, Royal Orchid Palace
              stands as a beacon of luxury and refined hospitality.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              Every detail reflects our commitment to delivering extraordinary
              experiences and timeless sophistication.
            </p>

            <a
              href="/about"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white uppercase tracking-widest text-sm rounded-md transition-all duration-300"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
