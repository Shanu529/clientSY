import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

const ScrollReveal = ({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const animClass = {
    up: "animate-fade-up",
    left: "animate-slide-in-left",
    right: "animate-slide-in-right",
    scale: "animate-scale-in",
  }[direction];

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animClass : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
