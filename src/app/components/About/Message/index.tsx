import React from "react";

type MessageProps = {};

const Message: React.FC<MessageProps> = () => {
  return (
    <div className="w-screen h-screen bg-black flex p-[14%] text-white">
      <div className="w-[40%] text-8xl font-averta font-extrabold">
        1. the <br />
        basics
      </div>
      <div className="w-[60%] flex items-end text-4xl font-averta">
        We are a digital design agency based in India. We work with both foreign
        and Indian clients on branding & design projects. Our team of talented
        creators are forged to handle all your work and deadlines like champs.
      </div>
    </div>
  );
};
export default Message;
