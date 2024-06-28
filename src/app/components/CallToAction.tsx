import React, { useEffect, useRef, useState } from "react";
import useCallToActionDistance from "../hooks/callToActionDistance";
import useDetectScroll from "@smakss/react-scroll-direction";
import useActiveImage from "../hooks/activeImage";
import LogoReveal from "./LogoReveal";
import { dictionary } from "../utils/imageDictionary";
import Image from "next/image";
type CallToActionProps = {};

const CallToAction: React.FC<CallToActionProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  let [yAxisPosition, setYAxisPosition] = useState<number>(0);

  const setCallToActionDistance = useCallToActionDistance(
    (state: any) => state.setCallToActionDistance
  );

  const { maxQuantity, activeImage }: any = useActiveImage();

  function handleScroll() {
    const top = ref?.current?.getBoundingClientRect();
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      if (ref.current) {
        window.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (yAxisPosition >= 702) {
        setYAxisPosition(1);
      } else {
        setYAxisPosition((prev) => prev + 1);
      }
    }, 5);
  }, [yAxisPosition]);

  return (
    <div>
      <div className=" h-screen w-screen z-20 text-white  bg-black relative flex flex-col items-center">
        <div className=" h-[100%] w-[100%] flex justify-center items-center flex-col">
          <p className="font-averta text-7xl font-extrabold mb-[5vh]">
            drop us a message
          </p>
          <p className="font-averta text-7xl font-extrabold">
            let&apos;s stylize your brand
          </p>
        </div>

        <div className="flex w-[90%] justify-between text-slate-300">
          <div
            style={{ transform: `translate(0,-${yAxisPosition * 0.8}px)` }}
            className="z-0 text-slate-400"
          >
            Namaste
          </div>
          <div
            style={{ transform: `translate(0,-${yAxisPosition * 1}px)` }}
            className="z-0"
          >
            Assalam
          </div>
          <div
            style={{ transform: `translate(0,-${yAxisPosition * 0.8}px)` }}
            className="z-0"
          >
            Bonjour
          </div>
          <div
            style={{ transform: `translate(0,-${yAxisPosition * 1.2}px)` }}
            className="z-0"
          >
            Hola
          </div>
          <div
            style={{ transform: `translate(0,-${yAxisPosition * 1.4}px)` }}
            className="z-0"
          ></div>
          <div
            style={{ transform: `translate(0,-${yAxisPosition * 1.7}px)` }}
            className="z-0"
          >
            Namaste
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallToAction;
