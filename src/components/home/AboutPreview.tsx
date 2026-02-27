import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lobbyImg from "@/assets/loby.png";

gsap.registerPlugin(ScrollTrigger);

const AboutPreview = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

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

      // Image reveal
      tl.from(imageRef.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 1,
        ease: "power3.out",
      });

      // Image zoom
      tl.fromTo(
        imageRef.current.querySelector("img"),
        { scale: 1.2 },
        { scale: 1, duration: 1 },
        0
      );

      // Animate text only (NOT button)
      tl.from(
        contentRef.current.querySelectorAll("p, h2, .line"),
        {
          y: 60,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
        },
        0.3
      );

      // Animate button separately
      tl.from(
        buttonRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        0.8
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black flex items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image */}
          <div
            ref={imageRef}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={lobbyImg}
              alt="Hotel Icon Rajpura lobby"
              className="w-full h-[300px] sm:h-[420px] lg:h-[550px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Content */}
          <div ref={contentRef} className="lg:text-center lg:text-left">
            <p className="uppercase tracking-[0.4em] text-blue-400 text-xs sm:text-sm mb-4">
              Our Story
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              A Legacy of{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Elegance
              </span>
            </h2>

            <div className="line w-full lg:w-16 h-1 bg-blue-500 mb-8 rounded-full mx-auto lg:mx-0" />

            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Nestled in the vibrant heart of Rajpura, Hotel Icon
              stands as a beacon of luxury and refined hospitality.
            </p>

            <p className="text-gray-400 mb-10 text-sm sm:text-base">
              Every detail reflects our commitment to delivering extraordinary
              experiences and timeless sophistication.

              
            </p>
           

            {/* BUTTON (Now Visible 100%) */}
            <div ref={buttonRef} className="mt-8">
              <a
                href="/about"
                className="inline-block px-8 py-4
                bg-white text-black 
                font-bold uppercase tracking-widest text-[12px]
                rounded-md shadow-2xl
                transition-all duration-300
                hover:bg-blue-600 hover:text-white
                hover:scale-105"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;