import React from "react";

type NavbarTopProps = {};

const NavbarTop: React.FC<NavbarTopProps> = () => {
  return (
    <div className="flex justify-between ">
      <div>Logo</div>
      <div className="flex">
        <div>Show Reel</div>
        <div>Burger Menu</div>
      </div>
    </div>
  );
};
export default NavbarTop;
