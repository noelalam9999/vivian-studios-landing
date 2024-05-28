import React, { useEffect, useRef } from "react";
import useCallToActionDistance from "../hooks/callToActionDistance";
import useDetectScroll from "@smakss/react-scroll-direction";
import useActiveImage from "../hooks/activeImage";
import LogoReveal from "./LogoReveal";

type CallToActionProps = {};

const CallToAction: React.FC<CallToActionProps> = () => {
  const ref = useRef<HTMLDivElement>(null);

  const setCallToActionDistance = useCallToActionDistance(
    (state: any) => state.setCallToActionDistance
  );

  const { maxQuantity, activeImage }: any = useActiveImage();

  function handleScroll() {
    const top = ref?.current?.getBoundingClientRect();
    setCallToActionDistance(top?.top);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      if (ref.current) {
        window.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, []);

  return (
    <>
      <div style={{ height: `${maxQuantity}px` }} className="bg-black">
        Height for buffer
      </div>
      <div ref={ref} className="bg-white h-screen w-screen">
        Logo Reveal {activeImage}
      </div>
      <div className=" h-screen w-screen z-20 text-white bg-black">
        Drop us a message
      </div>
    </>
  );
};
export default CallToAction;
