import Image from "next/image";
import React from "react";
import Img1 from "@/app/assets/haspr-office-2.webp";
import Img2 from "@/app/assets/haspr-office-3.webp";
type TagLineProps = {};

const TagLine: React.FC<TagLineProps> = () => {
  return (
    <>
      <div className="w-screen h-screen font-averta font-extrabold text-8xl bg-black text-white flex justify-center items-center text-center">
        pinch of ordinary with loads of
        <br /> extra-ordinary
      </div>

      <div className="flex h-[150vh] w-screen bg-black justify-center">
        {/* Haspr used transform3d to manipulate the height with scroll */}

        <div className="flex flex-col items-center mr-[10vw]">
          <Image
            src={Img1}
            alt="office"
            className="w-[25vw] h-[50vw] mt-[20vh] "
          ></Image>
          <p className="text-white text-2xl font-averta font-bold mt-[4vh]">
            Clean and minimal cars and bike
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Img2} alt="office" className="w-[25vw] h-[50vw]"></Image>
          <p className="text-white text-2xl font-averta font-bold mt-[4vh]">
            Certified by Startup India and Department
          </p>
        </div>
      </div>
    </>
  );
};
export default TagLine;
