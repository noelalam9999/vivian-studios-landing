import React from "react";
import Img1 from "@/app/assets/other-projects-1.webp";
import Img2 from "@/app/assets/other-projects-2.webp";
import Img3 from "@/app/assets/other-projects-3.webp";
import Img4 from "@/app/assets/other-projects-4.webp";
import Img5 from "@/app/assets/other-projects-5.webp";
import Image from "next/image";

type OtherProjectsProps = {};

const OtherProjects: React.FC<OtherProjectsProps> = () => {
  return (
    <>
      <div className="w-1/2 sticky top-0">
        <video className="w-full" autoPlay={true} muted loop>
          <source src="./thumb.mp4" type="video/mp4" className="" />
        </video>
      </div>
      <div className="w-1/2 ml-[50%] flex flex-col items-center">
        <Image src={Img1} alt="op-1"></Image>
        <Image src={Img2} alt="op-2"></Image>
      </div>
    </>
  );
};
export default OtherProjects;
