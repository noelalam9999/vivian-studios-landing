import Image from "next/image";
import React from "react";
import about from "@/app/assets/who-we-are.webp";
type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      <div className="w-screen h-[50vh] bg-black flex justify-center items-center font-averta font-bold text-white text-6xl">
        Wondering who works in this uber cool company?
      </div>
      <Image
        className="h-screen w-screen"
        src={about}
        alt="about-image"
      ></Image>
    </>
  );
};
export default Hero;
