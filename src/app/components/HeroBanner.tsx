import React, { ElementType, ReactNode } from "react";

type HeroBannerProps = {
  children: ReactNode;
};

const HeroBanner: React.FC<HeroBannerProps> = ({ children }) => {
  return (
    <div>
      Hero Banner
      {children}
      <div className="">
        <div>Location</div>
        <div>Best time to call us</div>
      </div>
    </div>
  );
};
export default HeroBanner;
