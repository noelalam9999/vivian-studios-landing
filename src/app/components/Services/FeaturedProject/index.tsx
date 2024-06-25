import React from "react";

type FeaturedProjectProps = {};

const FeaturedProject: React.FC<FeaturedProjectProps> = () => {
  return (
    <div className="bg-black">
      <div className="h-[40vh] flex flex-col justify-center items-center font-averta">
        <p className="font-averta font-extrabold text-3xl text-white">
          Unified
        </p>
        <p className="font-averta font-extrabold text-8xl text-white">Form</p>
      </div>
      <video className="w-screen " autoPlay={true} muted loop>
        <source src="./service-hero-2.mp4" type="video/mp4" className="" />
      </video>
    </div>
  );
};
export default FeaturedProject;
