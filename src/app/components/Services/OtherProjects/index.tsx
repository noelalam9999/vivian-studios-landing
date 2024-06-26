"use client";
import React, { useEffect, useRef, useState } from "react";
import Img1 from "@/app/assets/other-projects-1.webp";
import Img2 from "@/app/assets/other-projects-2.webp";

import Image from "next/image";

type OtherProjectsProps = {};

const OtherProjects: React.FC<OtherProjectsProps> = () => {
  const imagesRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const [thumbHeight, setThumbHeight] = useState(1);
  const [imagesBottom, setImagesBottom] = useState(1);
  const [imagesHeight, setImagesHeight] = useState(1);
  let i = 0;
  useEffect(() => {
    if (thumbRef?.current?.getBoundingClientRect().bottom) {
      setThumbHeight(
        +Math.round(thumbRef?.current?.getBoundingClientRect().height)
      );
    }
    if (imagesRef?.current?.getBoundingClientRect().bottom) {
      setImagesBottom(imagesRef?.current?.getBoundingClientRect().bottom);
    }
  }, []);
  function handleScroll() {
    if (imagesRef?.current?.getBoundingClientRect().bottom) {
      setImagesBottom(imagesRef?.current?.getBoundingClientRect().bottom);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (imagesRef.current && thumbRef.current) {
        window.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, []);

  // console.log(thumbBottom, imagesBottom);

  return (
    <>
      {thumbHeight && imagesBottom && (
        <>
          {" "}
          {
            <div
              ref={thumbRef}
              className={`h-screen ${
                thumbHeight < imagesBottom ? "sticky top-0" : ""
              } `}
            >
              {" "}
              <video className="h-screen" autoPlay={true} muted loop>
                <source src="./thumb.mp4" type="video/mp4" className="" />
              </video>
            </div>
          }
          <div
            ref={imagesRef}
            className="w-1/2 ml-[50%] flex flex-col items-center -translate-y-[50vh] pb-[10vh]"
          >
            <Image className="mb-[10vh]" src={Img1} alt="op-1"></Image>

            <Image src={Img2} alt="op-2"></Image>
          </div>
        </>
      )}
    </>
  );
};
export default OtherProjects;
