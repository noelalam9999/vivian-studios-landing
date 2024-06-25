import Image from "next/image";
import React from "react";
import Img1 from "@/app/assets/sub-services.webp";
import Img2 from "@/app/assets/sub-service-2.webp";
import Img3 from "@/app/assets/sub-service-3.webp";

type SubServicesProps = {};

const SubServices: React.FC<SubServicesProps> = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute h-screen w-[30vw] flex-col items-start flex  justify-center ml-[10vw]">
          <p className="font-averta font-extrabold text-4xl text-white mb-[1rem]">
            Beautifully Bold
          </p>
          <p className="font-averta text-2xl text-white font-bold">
            Calibre offers sophisticated solutions for a wide range of
            architecturally considered environments. Its fusion of strong
            geometric structures compliments any luxe space.
          </p>
        </div>
        <Image
          className="w-screen h-screen"
          src={Img1}
          alt="sub-services"
        ></Image>
      </div>
      <div className="relative">
        <div className="absolute h-screen w-[30vw] flex-col items-start flex  justify-center ml-[60vw]">
          <p className="font-averta font-extrabold text-4xl text-white mb-[1rem]">
            Beautifully Bold
          </p>
          <p className="font-averta text-2xl text-white font-bold">
            Calibre offers sophisticated solutions for a wide range of
            architecturally considered environments. Its fusion of strong
            geometric structures compliments any luxe space.
          </p>
        </div>
        <Image
          className="w-screen h-screen"
          src={Img2}
          alt="sub-services"
        ></Image>
      </div>
      <div className="relative">
        <div className="absolute h-screen w-[30vw] flex-col items-start flex  justify-center ml-[10vw]">
          <p className="font-averta font-extrabold text-4xl text-white mb-[1rem]">
            Beautifully Bold
          </p>
          <p className="font-averta text-2xl text-white font-bold">
            Calibre offers sophisticated solutions for a wide range of
            architecturally considered environments. Its fusion of strong
            geometric structures compliments any luxe space.
          </p>
        </div>
        <Image
          className="w-screen h-screen"
          src={Img3}
          alt="sub-services"
        ></Image>
      </div>
    </div>
  );
};
export default SubServices;
