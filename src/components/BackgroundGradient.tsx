import { ReactNode, useEffect, useState } from "react";

interface BackgroundGradientProps {
  children: ReactNode;
  className?: string;
}

const BackgroundGradient = ({
  children,
  className = "",
}: BackgroundGradientProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate parallax positions based on scroll
  const parallaxFactor1 = 0.2; // Slower movement
  const parallaxFactor2 = 0.3; // Medium movement
  const parallaxFactor3 = 0.1; // Faster movement

  const translateY1 = scrollY * parallaxFactor1;
  const translateY2 = scrollY * parallaxFactor2;
  const translateY3 = scrollY * parallaxFactor3;

  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Fixed container for background with overflow hidden */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Primary gradient blob - top right */}
        <div
          className="absolute w-[800px] h-[800px]"
          style={{
            top: `calc(25% - ${translateY1}px)`,
            right: "5%",
            transition: "transform 0.05s linear",
            background:
              "radial-gradient(circle, rgba(127, 231, 231, 0.14) 0%, transparent 70%)",
          }}
        ></div>
        {/* Secondary gradient blob - left */}
        <div
          className="absolute w-[500px] h-[500px]"
          style={{
            top: `calc(125% - ${translateY2}px)`,
            left: "10%",
            transition: "transform 0.05s linear",
            background:
              "radial-gradient(circle, rgba(127, 231, 231, 0.1) 0%, transparent 60%)",
          }}
        ></div>
        {/* Tertiary gradient blob - middle */}
        <div
          className="absolute w-[1200px] h-[1200px]"
          style={{
            top: `calc(25% - ${translateY3}px)`,
            left: "0%",
            transition: "transform 0.05s linear",
            background:
              "radial-gradient(circle, rgba(176, 234, 234, 0.19) 0%, transparent 60%)",
          }}
        ></div>
      </div>

      {/* Content with relative positioning to appear above the background */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundGradient;
