"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Img1 from "@/app/assets/3.webp";
import Img2 from "@/app/assets/5.webp";
import Img3 from "@/app/assets/7.webp";
import Img4 from "@/app/assets/9.webp";
import useAboutCardPosition from "@/app/hooks/aboutCardsPosition";

type PortfolioProps = {};

const portfolioList: any = [
  {
    id: 1,
    image: Img1,
  },
  {
    id: 2,
    image: Img2,
  },
  {
    id: 3,
    image: Img3,
  },
  {
    id: 4,
    image: Img4,
  },
  {
    id: 5,
    image: Img1,
  },
  {
    id: 6,
    image: Img2,
  },
  {
    id: 7,
    image: Img3,
  },
  {
    id: 8,
    image: Img4,
  },
  {
    id: 9,
    image: Img1,
  },
  {
    id: 10,
    image: Img2,
  },
  {
    id: 11,
    image: Img3,
  },
  {
    id: 12,
    image: Img4,
  },
  {
    id: 13,
    image: Img1,
  },
  {
    id: 14,
    image: Img2,
  },
  {
    id: 15,
    image: Img3,
  },
  {
    id: 16,
    image: Img4,
  },
];

const Portfolio: React.FC<PortfolioProps> = () => {
  const { aboutCardPosition }: any = useAboutCardPosition();

  return (
    <div className="overflow-x-hidden bg-black">
      <div
        style={{
          transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${aboutCardPosition}, 0, 0, 1)`,
        }}
        className={`flex mt-[10vh]`}
      >
        {portfolioList.map((portfolio: any) => (
          <div
            key={portfolio.id}
            className="flex justify-center relative mr-[3vw] z-0  items-center"
          >
            <Image
              src={portfolio.image}
              alt={`${portfolio.id} image`}
              className={` w-[10vw]  `}
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;
