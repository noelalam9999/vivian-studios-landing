import React, { ReactNode, useEffect, useRef, useState } from "react";
import useLogoRevealDistance from "../hooks/logoRevealDistance";
import useProjectsDistance from "../hooks/projectsDistance";
import useProjectsContainerWidth from "../hooks/projectsContainerWidth";

type LogoRevealProps = {
  children: ReactNode;
};

const LogoReveal: React.FC<LogoRevealProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [replacementComponentHeight, setReplacementComponentHeight] =
    useState<number>(0);

  const setLogoRevealDistance = useLogoRevealDistance(
    (state: any) => state.setLogoRevealDistance
  );

  const { logoRevealDistance }: any = useLogoRevealDistance();

  const { projectsDistance }: any = useProjectsDistance();

  const { projectsContainerWidth }: any = useProjectsContainerWidth();

  function handleScroll() {
    const top = ref?.current?.getBoundingClientRect();
    setLogoRevealDistance(top?.top);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (ref.current) {
        window.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, []);

  useEffect(() => {
    setReplacementComponentHeight(projectsContainerWidth);
  }, [projectsContainerWidth]);

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
