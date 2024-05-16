import React from "react";
import logo from "@/app/assets/logo-vivian.png";
import burgerMenu from "@/app/assets/burger-menu.jpg";
import Image from "next/image";
type NavbarTopProps = {};

const NavbarTop: React.FC<NavbarTopProps> = () => {
  return (
    <div className="flex justify-between bg-black items-center">
      <div>
        <Image src={logo} alt="logo" className="w-[5vw] mt-10 ml-10" />
      </div>
      <div className="flex w-[10vw] justify-evenly h-full items-center mt-10 mr-10">
        <div className="font-Averta text-white">showreel</div>
        <Image src={burgerMenu} alt="burger-menu" className="size-7"></Image>
      </div>
    </div>
  );
};
export default NavbarTop;
