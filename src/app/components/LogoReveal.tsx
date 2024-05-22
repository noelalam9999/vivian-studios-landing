import React, { ReactNode, useEffect, useRef, useState } from "react";
import useLogoRevealDistance from "../hooks/logoRevealDistance";
import useProjectsDistance from "../hooks/projectsDistance";
import useProjectsContainerWidth from "../hooks/projectsContainerWidth";
import { IBreakpoints } from "../interfaces/IBreakpoints";
import useProjectBreakpoints from "../hooks/breakpoints";
import useActiveProject from "../hooks/activeProject";
import useDetectScroll from "@smakss/react-scroll-direction";

type LogoRevealProps = {
  children: ReactNode;
};

const LogoReveal: React.FC<LogoRevealProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [replacementComponentHeight, setReplacementComponentHeight] =
    useState<number>(0);

  const { logoRevealDistance }: any = useLogoRevealDistance();

  const { projectsDistance }: any = useProjectsDistance();

  const { projectsContainerWidth }: any = useProjectsContainerWidth();

  const { breakpoints }: any = useProjectBreakpoints();

  const { scrollDir } = useDetectScroll();

  const setLogoRevealDistance = useLogoRevealDistance(
    (state: any) => state.setLogoRevealDistance
  );

  const setActiveProject = useActiveProject(
    (state: any) => state.setActiveProject
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (ref.current) {
        window.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, []);

  function handleScroll() {
    const top = ref?.current?.getBoundingClientRect();
    setLogoRevealDistance(top?.top);
  }

  useEffect(() => {
    setReplacementComponentHeight(projectsContainerWidth);
  }, [projectsContainerWidth]);

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
              : breakpointsArrFloat[0];
          }
        });
        setActiveProject(breakpoints[range as number]);
      }
    }
  }, [logoRevealDistance]);

  return (
    <div>
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
      <div className="h-screen w-screen left-0 bg-black z-10 text-white">
        Logo Reveal
      </div>
    </div>
  );
};
export default LogoReveal;
