import React, { ReactNode, useImperativeHandle, useRef } from "react";

type HeroBannerProps = {
  children: ReactNode;
};

interface Props {
  children: ReactNode;
}
const HeroBanner = React.forwardRef<HTMLDivElement | null, Props>(
  (props, outerRef) => {
    const innerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(outerRef, () => innerRef.current!, []);

    return (
      <div
        ref={innerRef}
        className="flex  items-center h-[90vh] flex-col bg-black  "
      >
        <div className="grid grid-cols-2 w-[75vw] mt-[10vh] ">
          <div className="transition ease-in-out delay-650 flex text-[7.35vw] font-averta items-center text-white leading-12">
            <p></p>
            BRAND
            <div className="flex item rounded-[320px] w-[12vw] h-fit overflow-hidden">
              <video className="w-[12vw] text-black" autoPlay={true} muted loop>
                <source
                  src="https://res.cloudinary.com/dsuiwxwkg/video/upload/v1715165777/reel_vx9lgi.mp4"
                  type="video/mp4"
                  className=""
                />
              </video>
            </div>
          </div>

          <div className="flex text-[1.2vw] font-averta text-white justify-content items-center leading-12">
            <p>
              We turn Business into Brands. We craft custom tailored websites
              and mobile apps that help you tell your story the right way.
              Awards winning digital agency based in India.
            </p>
          </div>
          <div className="text-[7vw] font-averta text-white leading-9">
            EXPERIENCE
          </div>
          <div className="flex justify-end text-[7vw] font-averta text-slate-500 leading-9">
            <p>AGENCY</p>
          </div>
        </div>
        {props.children}
        <div className="flex mt-[10vh]">
          <div>Location</div>
          <div>Best time to call us</div>
        </div>
      </div>
    );
  }
);
export default HeroBanner;
