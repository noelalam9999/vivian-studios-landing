"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Img1 from "@/app/assets/rupesh.webp";
import Img2 from "@/app/assets/sanjay.webp";
import Img3 from "@/app/assets/harsh.webp";
import Img4 from "@/app/assets/abhay.webp";
import useAboutCardPosition from "@/app/hooks/aboutCardsPosition";

type TeamProps = {};

const Team: React.FC<TeamProps> = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { setAboutCardPosition }: any = useAboutCardPosition();

  function handleScroll() {
    const top = cardRef?.current?.getBoundingClientRect();
    setAboutCardPosition(top?.top);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (cardRef.current) {
        window.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex h-screen w-screen bg-black justify-center p-[5%]"
    >
      {/* Haspr used transform3d to manipulate the height with scroll */}

      <div className="flex flex-col items-center mr-[10vw]">
        <Image
          src={Img1}
          alt="office"
          className="w-[15vw] h-[25vw] mt-[5vh] "
        ></Image>
        <p className="text-white text-2xl font-averta font-bold mt-[4vh]">
          Rupesh{" "}
        </p>
      </div>
      <div className="flex flex-col items-center mr-[10vw]">
        <Image
          src={Img2}
          alt="office"
          className="w-[15vw] h-[25vw] mt-[15vh]"
        ></Image>
        <p className="text-white text-2xl font-averta font-bold mt-[4vh]">
          Sanjay
        </p>
      </div>
      <div className="flex flex-col items-center mr-[10vw]">
        <Image
          src={Img3}
          alt="office"
          className="w-[15vw] h-[25vw] mt-[5vh]"
        ></Image>
        <p className="text-white text-2xl font-averta font-bold mt-[4vh]">
          Harsh
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image src={Img4} alt="office" className="w-[15vw] h-[25vw]"></Image>
        <p className="text-white text-2xl font-averta font-bold mt-[4vh]">
          Abhay
        </p>
      </div>
    </div>
  );
};
export default Team;
