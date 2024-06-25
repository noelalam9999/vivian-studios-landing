import Image from "next/image";
import React, { useEffect, useRef } from "react";
import logo from "../assets/logo-vivian.png";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="w-[100%] h-screen bg-black text-white flex flex-col items-center z-30">
      <div className="flex justify-between items-center w-[90%]">
        <div className="font-averta text-5xl mt-[5vh] mb-[5vh] ml-[2vw] mr-[2vw]">
          {" "}
          Why be shy Say hi.
        </div>
        <div className="m-[10vh]">
          <Image src={logo} alt="logo"></Image>
        </div>
      </div>
      <div className="flex justify-between items-center w-[90%]">
        <div className="mt-[5vh] mb-[5vh] ml-[2vw] mr-[2vw]">
          <div className="mb-[3vh]">
            <p className="font-averta text-lg">mail us</p>
            <a className="font-averta text-lg font-bold" href="">
              contact@haspr.in
            </a>
          </div>
          <div>
            <p className="font-averta text-lg">even better call us</p>
            <a className="font-averta text-lg font-bold" href="">
              +8801782197289
            </a>
          </div>
        </div>
        <div className="m-[10vh] w-[40%]">
          <div className="font-averta text-lg mb-[3vh]">lets be friends</div>
          <div className="flex justify-between">
            <div className="">
              <div className="mb-[3vh]">
                <a className="font-averta text-lg font-bold" href="">
                  Facebook
                </a>
              </div>
              <div>
                <a className="font-averta text-lg font-bold" href="">
                  Instagram
                </a>
              </div>
            </div>
            <div className="">
              <div className="mb-[3vh]">
                <a className="font-averta text-lg font-bold" href="">
                  Youtube{" "}
                </a>
              </div>
              <div>
                <a className="font-averta text-lg font-bold" href="">
                  Pinterest{" "}
                </a>
              </div>
            </div>
            <div className="">
              <div className="mb-[3vh]">
                <a className="font-averta text-lg font-bold" href="">
                  Twitter
                </a>
              </div>
              <div>
                <a className="font-averta text-lg font-bold" href="">
                  Linkedin
                </a>
              </div>
            </div>
            <div className="">
              <div className="mb-[3vh]">
                <a className="font-averta text-lg font-bold" href="">
                  Behance
                </a>
              </div>
              <div>
                <a className="font-averta text-lg font-bold" href="">
                  Dribble
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-[90%] ">
        <div className="mb-[3vh]">
          <p className="font-averta text-lg">location</p>
          <a className="font-averta text-lg font-bold" href="">
            Indore - India
          </a>
        </div>
        <div className="mb-[3vh]">
          <p className="font-averta text-lg">
            2024 Vivian Studios All Rights Reserved
          </p>
        </div>
        <div className="mb-[3vh]">
          <p className="font-averta text-lg">best time to call us</p>
          <a className="font-averta text-lg font-bold" href="">
            10:00AM
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
