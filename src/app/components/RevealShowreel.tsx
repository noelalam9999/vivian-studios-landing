import React from "react";

type RevealShowreelProps = {};

const RevealShowreel: React.FC<RevealShowreelProps> = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center bg-black">
      <p className="text-white text-[8vw] ml-20">REVEAL</p>
      <p className="text-white text-[8vw] ml-20">SHOWREEL</p>
    </div>
  );
};
export default RevealShowreel;
