import React from "react";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="relative">
      <p className="absolute flex w-screen h-screen justify-center items-center font-averta text-white font-extrabold text-8xl">
        Animation
      </p>
      <video className="w-screen top-0 " autoPlay={true} muted loop>
        <source src="./service-hero-3.mp4" type="video/mp4" className="" />
      </video>
    </div>
  );
};
export default Hero;
