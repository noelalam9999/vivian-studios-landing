import React, { useEffect, useRef } from "react";
import useRevealShowreelBottom from "../hooks/revealShowreelBottom";

type RevealShowreelProps = {};

const RevealShowreel: React.FC<RevealShowreelProps> = () => {
  const ref = useRef<HTMLDivElement>(null);

  const setRevealShowreelBottom = useRevealShowreelBottom(
    (state: any) => state.setRevealShowreelBottom
  );

  function handleScroll() {
    const revealShowreel = ref?.current?.getBoundingClientRect();
    setRevealShowreelBottom(revealShowreel?.bottom);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      if (ref.current) {
        window.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col w-screen h-screen justify-center bg-black"
    >
      <p className="text-white text-[8vw] ml-20">REVEAL</p>
      <p className="text-white text-[8vw] ml-20">SHOWREEL</p>
    </div>
  );
};
export default RevealShowreel;
