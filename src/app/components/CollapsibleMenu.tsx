"use client";
import React from "react";
import useCollapsibleMenu from "../hooks/collapsibleMenu";
import NavbarTop from "./NavbarTop";
import Image from "next/image";
import logo from "@/app/assets/logo-vivian.png";
import burgerMenu from "@/app/assets/burger-menu.jpg";
import closeButton from "@/app/assets/close.png";

type CollapsibleMenuProps = {};

const CollapsibleMenu: React.FC<CollapsibleMenuProps> = () => {
  const { open, setOpen }: any = useCollapsibleMenu();

  return (
    <>
      <div
        className={`w-screen ${
          open ? "h-screen z-30 visible" : "h-[0px] z-0 hidden"
        } absolute bg-black text-white flex flex-col justify-center items-center `}
      >
        {/* <div className="flex justify-between  w-screen items-center z-10 top-0">
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
        </div> */}
        <div className="w-screen flex justify-center items-center ">
          <div className="w-[40vw] mr-[20vw] flex flex-col justify-start">
            <div className="font-averta text-slate-300 font-bold">
              Take the tour
            </div>
            <div className="flex flex-col items-start">
              <div className="flex justify-between w-full ">
                <div className="flex flex-col">
                  <a className="font-averta text-5xl mb-[3vh] " href="/">
                    Home
                  </a>
                  <a className="font-averta text-5xl mb-[3vh]" href="/blogs">
                    Blog
                  </a>
                  <a
                    className="font-averta text-5xl mb-[3vh]"
                    href="/contact-us"
                  >
                    Contact
                  </a>
                  <a className="font-averta text-5xl" href="/about">
                    Who We Are
                  </a>
                </div>

                <div className="flex flex-col font-averta ">
                  <p className="text-5xl">What we do</p>
                  <a className="text-2xl mb-[1vh]" href="/services/animation">
                    Animation
                  </a>
                  <a className="text-2xl mb-[1vh]" href="/vfx">
                    VFX
                  </a>
                  <a className="text-2xl mb-[1vh]" href="/ar-vr">
                    AR/VR
                  </a>
                  <a className="text-2xl mb-[1vh]" href="/video-editing">
                    Video Editing <br />
                    and motion graphics
                  </a>
                  <a className="text-2xl" href="/image-post-production">
                    Image Post production
                  </a>
                </div>
              </div>
              <div className="flex justify-between w-full mb-[3vh]"></div>
            </div>
          </div>

          <div className="w-[15vw] flex flex-col justify-start">
            <div className="font-averta text-slate-300 font-bold mb-[1vh]">
              Hey there, we're everywhere
            </div>
            <div className="flex flex-col items-start font-averta text-2xl">
              <div className="flex justify-between w-full mb-[1vh]">
                <a href="">Facebook</a>
                <a href="">Youtube</a>
              </div>
              <div className="flex justify-between w-full mb-[1vh]">
                <a href="">Instagram</a>
                <a href="">Pinterest</a>
              </div>
              <div className="flex justify-between w-full mb-[1vh]">
                <a href="">Twitter</a>
                <a href="">Behance</a>
              </div>
              <div className="flex justify-between w-full mb-[1vh]">
                <a href="">LinkedIn</a>
                <a href="">Dribble</a>
              </div>
            </div>
            <div className=" font-averta text-slate-300 font-bold mb-[1vh]">
              Get to know more
            </div>
            <div className="w-[15vw] flex flex-col items-start font-averta text-2xl">
              <div className="flex justify-between w-full mb-[1vh]">
                <a href="">Awards</a>
                <a href="">Web Design </a>
              </div>
              <div className="flex justify-between w-full mb-[1vh]">
                <a href="">Blogs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CollapsibleMenu;
