import React, { ReactNode, useEffect, useRef, useState } from "react";
import useLogoRevealDistance from "../hooks/logoRevealDistance";
import useProjectsDistance from "../hooks/projectsDistance";
import useProjectsContainerWidth from "../hooks/projectsContainerWidth";
import useProjectBreakpoints from "../hooks/breakpoints";
import useActiveProject from "../hooks/activeProject";
import useDetectScroll from "@smakss/react-scroll-direction";
import useLogoRevealBottom from "../hooks/logoRevealBottom";
import useCallToActionDistance from "../hooks/callToActionDistance";
import useActiveImage from "../hooks/activeImage";
import Image from "next/image";
import { dictionary } from "@/app/utils/imageDictionary";

type LogoRevealProps = {
  children: ReactNode;
};

const LogoReveal: React.FC<LogoRevealProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const logoRevealSection = useRef<HTMLDivElement>(null);

  const [replacementComponentHeight, setReplacementComponentHeight] =
    useState<number>(0);

  const { logoRevealDistance, setLogoRevealDistance }: any =
    useLogoRevealDistance();

  const { projectsDistance }: any = useProjectsDistance();

  const { projectsContainerWidth }: any = useProjectsContainerWidth();

  const { breakpoints }: any = useProjectBreakpoints();

  const { logoRevealBottom, setLogoRevealBottom }: any = useLogoRevealBottom();

  const { callToActionDistance }: any = useCallToActionDistance();

  const { scrollDir } = useDetectScroll();

  const { activeImage }: any = useActiveImage();

  const { increaseNumber, decreaseNumber }: any = useActiveImage();

  const { setActiveProject }: any = useActiveProject();

  function handleScroll() {
    const top = ref?.current?.getBoundingClientRect();
    setLogoRevealDistance(top?.top);
    setLogoRevealBottom(top?.bottom);
  }

  useEffect(() => {
    if (logoRevealBottom <= 0) {
      if (scrollDir === "down") {
        increaseNumber();
      }
      if (scrollDir === "up") {
        decreaseNumber();
      }
    }
  }, [callToActionDistance]);
  // console.log(activeImage);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (ref.current) {
        window.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, []);

  //This useEffect is used to set the buffer height based on the Project List Container Width
  useEffect(() => {
    setReplacementComponentHeight(projectsContainerWidth);
  }, [projectsContainerWidth]);

  //This useEffect is made to change the Active Project setter function.
  //The Active Project Setter function is invoked everytime a person scrolls up/down the page
  useEffect(() => {
    // Converting the breakpoints object to an array of floating point numbers
    // so that they can be used for computation
    const breakpointsArrFloat: number[] = Object.keys(breakpoints).map(
      (breakpoint) => parseFloat(breakpoint)
    );

    // When the user is scrolling down we first check if the first card has cross the first breakpoint
    // We are using logoRevealDistance as the pointer.
    if (scrollDir === "down") {
      if (logoRevealDistance < breakpointsArrFloat[0]) {
        //If the first card has crossed the first breakpoint we detect which card is currently in focus.
        //The we update the activeProject State.
        let range = 0;
        breakpointsArrFloat.forEach((breakpoint) => {
          if (logoRevealDistance < breakpoint) {
            range = breakpoint;
          }
        });
        setActiveProject(breakpoints[range as number]);
      }
    } else {
      // The same is done for when the user is scrolling up.
      if (
        logoRevealDistance > breakpointsArrFloat[breakpointsArrFloat.length - 1]
      ) {
        let range = 0;
        breakpointsArrFloat.reverse().forEach((breakpoint, i) => {
          if (logoRevealDistance > breakpoint) {
            //the exception being when we are going up we want to focus on the div thats
            //immediately above the detected div. Since the detected div has already passed its breakpoint.
            //If we use i+1 we might get undefined in the last div. to mitigate that we have used an itenary operator
            range = breakpointsArrFloat.reverse()[i + 1]
              ? breakpointsArrFloat.reverse()[i + 1]
              : // : breakpointsArrFloat[0];
                0;
          }
        });
        setActiveProject(breakpoints[range as number]);
      }
    }
  }, [logoRevealDistance]);

  return (
    <>
      <div
        style={{
          height: `${replacementComponentHeight}px`,
        }}
        className="bg-black"
      >
        filler
      </div>
      <div ref={ref} className="h-screen w-screen z-0">
        {projectsDistance <= 0 && logoRevealDistance > 0 ? "" : children}
      </div>
      <div
        ref={logoRevealSection}
        className={`h-screen w-screen  bg-black z-0 text-white ${
          logoRevealBottom <= 0 && callToActionDistance > 0
            ? "sticky top-0"
            : ""
        }`}
      >
        <Image
          className="h-screen w-screen"
          src={dictionary[activeImage]}
          alt=""
        />
      </div>
    </>
  );
};
export default LogoReveal;
