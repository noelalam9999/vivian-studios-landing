import Image from "next/image";
import React from "react";
import Img3 from "@/app/assets/other-projects-3.webp";
import Img4 from "@/app/assets/other-projects-4.webp";
import Img5 from "@/app/assets/other-projects-5.webp";

type ContactUsProps = {};

const ContactUs: React.FC<ContactUsProps> = () => {
  return (
    <>
      <div>
        <p></p>
      </div>

      <div className="w-screen flex flex-col mb-[10vh] -translate-y-[50vh] mt-[10vh]">
        <div className="w-1/2 ml-[50vw]">
          <Image className="w-3/4" src={Img3} alt="image-3"></Image>
        </div>

        <div className="flex w-[75vw] ml-[25vw] mt-[10vh]">
          {" "}
          <Image
            className="w-[30vw] mr-[15vw]"
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
