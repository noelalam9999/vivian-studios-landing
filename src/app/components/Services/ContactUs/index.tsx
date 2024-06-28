"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Img3 from "@/app/assets/other-projects-3.webp";
import Img4 from "@/app/assets/other-projects-4.webp";
import Img5 from "@/app/assets/other-projects-5.webp";

type ContactUsProps = {};

const ContactUs: React.FC<ContactUsProps> = () => {
  const imagesRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formHeight, setFormHeight] = useState(1);
  const [imagesBottom, setImagesBottom] = useState(1);

  useEffect(() => {
    if (formRef?.current?.getBoundingClientRect().bottom) {
      setFormHeight(
        +Math.round(formRef?.current?.getBoundingClientRect().height)
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
      if (imagesRef.current && formRef.current) {
        window.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={formRef}
        className={`h-[50vh] w-1/2 flex flex-col justify-center items-center z-50 ${
          formHeight < imagesBottom ? "sticky top-0" : ""
        }`}
      >
        <div className="w-1/2 font-averta">
          <p className="font-semibold text-5xl mb-[1rem] ">Contact Us</p>
          <p className="font-semibold text-2xl mb-[1rem]">
            We are just a short text away
          </p>
          <form action="">
            <input
              className="w-[15vw] h-[3rem] rounded-md shadow-md mr-3 pl-[2vw]"
              type="text"
              placeholder="Email"
            />
            <input
              className="w-[7vw] bg-black text-white rounded h-[3rem] shadow-md cursor-pointer"
              type="submit"
            />
          </form>
        </div>
      </div>

      <div
        ref={imagesRef}
        className="w-screen flex flex-col mb-[10vh] -translate-y-[80vh] "
      >
        <div className="w-1/2 ml-[50vw]">
          <Image className="w-3/4" src={Img3} alt="image-3"></Image>
        </div>

        <div className="flex w-[75vw] ml-[25vw] mt-[25vh]">
          {" "}
          <Image
            className="w-[30vw] mr-[15vw] z-0"
            src={Img4}
            alt="image-4"
          ></Image>
          <Image className="w-[30vw] " src={Img5} alt="image-5"></Image>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
