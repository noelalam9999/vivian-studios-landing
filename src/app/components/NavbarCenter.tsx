"use client";
import React, { useState } from "react";
type NavbarCenterProps = {};

interface menuItem {
  name: string;
  label: string;
}
const menuItems: menuItem[] = [
  {
    name: "services",
    label: "SERVICES",
  },
  {
    name: "projects",
    label: "PROJECTS",
  },
  {
    name: "about",
    label: "ABOUT",
  },
  {
    name: "blog",
    label: "BLOG",
  },
  {
    name: "contact-us",
    label: "CONTACT US",
  },
];
const NavbarCenter: React.FC<NavbarCenterProps> = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [focusedItem, setFocusedItem] = useState<menuItem>({
    name: "",
    label: "",
  });

  return (
    <div className="flex w-[99vw] items-center h-[20vh] mt-[10vh] relative ">
      <div
        className={`${
          hover
            ? "translate-y-0 opacity-50 z-10"
            : "translate-y-full opacity-0 z-0"
        } transition duration-1000 flex font-averta justify-center w-full text-[7.35vw] text-black`}
      >
        <span className="font-flanel">{focusedItem.label[0]}</span>{" "}
        {focusedItem.label.slice(1)}
      </div>
      <div
        className={`w-full flex justify-evenly ${
          hover ? "text-black" : "text-white"
        }  font-averta text-2xl z-20 absolute transition-[color] duration-1000 `}
      >
        {" "}
        {menuItems.map((menuItem) => {
          return (
            <div key={menuItem.name}>
              <div
                onMouseEnter={() => {
                  setHover(true);
                  setFocusedItem(menuItem);
                }}
                onMouseOut={() => {
                  setHover(false);
                }}
              >
                {menuItem.label}
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={` 
         ${hover ? "h-[20vh]" : "h-0"}
        bg-slate-400 w-full z-0 absolute transition-[height] duration-1000 
           `}
      ></div>
    </div>
  );
};
export default NavbarCenter;
