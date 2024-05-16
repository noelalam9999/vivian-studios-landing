import React, { useEffect, useRef } from "react";
import useLogoRevealDistance from "../hooks/logoRevealDistance";

type LogoRevealProps = {};

const LogoReveal: React.FC<LogoRevealProps> = () => {
  const ref = useRef<HTMLDivElement>(null);

  const setLogoRevealDistance = useLogoRevealDistance(
    (state: any) => state.setLogoRevealDistance
  );

  const { logoRevealDistance }: any = useLogoRevealDistance();

  function handleScroll() {
    const top = ref?.current?.getBoundingClientRect();
    setLogoRevealDistance(top?.top);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", handleScroll);
        } else {
          window.removeEventListener("scroll", handleScroll, true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    if (ref.current) {
      observer.observe(ref?.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref?.current);
        window.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, []);

  return (
    <div>
      <div ref={ref} className="h-screen w-screen">
        s
      </div>
      <div className="h-screen w-screen left-0 bg-black z-10 text-white">
        Logo Reveal
      </div>
    </div>
  );
};
export default LogoReveal;
