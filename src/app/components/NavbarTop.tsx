"use client";
import React from "react";
import logo from "@/app/assets/logo-vivian.png";
import burgerMenu from "@/app/assets/burger-menu.jpg";
import closeButton from "@/app/assets/close.png";
import Image from "next/image";
import useCollapsibleMenu from "../hooks/collapsibleMenu";
import { usePathname } from "next/navigation";

type NavbarTopProps = {};

const NavbarTop: React.FC<NavbarTopProps> = () => {
  const { open, setOpen }: any = useCollapsibleMenu();
  const pathname = usePathname();

  return (
    <div
      className={`flex justify-between ${
        pathname.includes("services") ? "absolute z-40" : "bg-black z-10"
      } w-screen items-center  top-0`}
    >
      <div>
        <Image src={logo} alt="logo" className="w-[5vw] mt-10 ml-10" />
      </div>
      <div className="flex w-[10vw] justify-evenly h-full items-center mt-10 mr-10">
        <div className="font-Averta text-white">showreel</div>

        {open ? (
          <Image
            src={closeButton}
            alt="close-button"
            className="size-7"
            onClick={setOpen}
          ></Image>
        ) : (
          <Image
            src={burgerMenu}
            alt="burger-menu"
            className="size-7"
            onClick={setOpen}
          ></Image>
        )}
      </div>
    </div>
  );
};
export default NavbarTop;
