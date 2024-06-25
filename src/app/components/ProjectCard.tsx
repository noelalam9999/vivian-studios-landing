import React, { useEffect, useRef, useState } from "react";

type ProjectCardProps = {};

import useLogoRevealDistance from "../hooks/logoRevealDistance";
import useProjectsContainerWidth from "../hooks/projectsContainerWidth";
import useProjectsDistance from "../hooks/projectsDistance";
import { calculateBgColorChangeRanges } from "../utils/calculateBgColorChangeRanges";

import useProjectBreakpoints from "../hooks/breakpoints";
import useActiveProject from "../hooks/activeProject";

import { portfolioList } from "../utils/portfolioList";

const ProjectCard: React.FC<ProjectCardProps> = () => {
  const { logoRevealDistance }: any = useLogoRevealDistance();
  const { projectsDistance }: any = useProjectsDistance();
  const { activeProject }: any = useActiveProject();
  const [positionAdjustment, setPositionAdjustment] = useState<number>(0);

  const [startLine, setStartLine] = useState<number>(0);

  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef: any = {};

  const setBreakpoints = useProjectBreakpoints(
    (state: any) => state.setBreakpoints
  );

  const setProjectsContainerWidth = useProjectsContainerWidth(
    (state: any) => state.setProjectsContainerWidth
  );

  useEffect(() => {
    const card: any = cardRef?.current?.getBoundingClientRect();
    if (card) {
      setPositionAdjustment(card.width * portfolioList.length);
      setProjectsContainerWidth(card.width * portfolioList.length);
    }
  }, []);

  useEffect(() => {
    if (projectsDistance <= 0 && logoRevealDistance > 0 && startLine === 0) {
      const card: any = cardRef?.current?.getBoundingClientRect();
      const breakpoints = calculateBgColorChangeRanges(
        logoRevealDistance,
        portfolioList,
        card.width
      );
      setBreakpoints(breakpoints);

      setStartLine(logoRevealDistance);
    }
  }, [projectsDistance, logoRevealDistance]);

  useEffect(() => {
    // console.log(videoRef);
    videoRef[activeProject]?.play();
    videoRef[activeProject - 1]?.pause();
    videoRef[activeProject + 1]?.pause();

    // videoRef?.current.play();
    // videoRef?.current.pause();
  }, [activeProject]);

  return (
    <div
      style={{
        transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${
          logoRevealDistance - positionAdjustment
        }, 0, 0, 1)`,
      }}
      className={`flex mt-[10vh]`}
    >
      {portfolioList.map((portfolio) => (
        <div
          key={portfolio.id}
          ref={cardRef}
          className="flex justify-center relative mr-[3vw] z-0 w-full items-center"
        >
          <p
            className={`absolute  font-averta text-black font-extrabold text-5xl text-center transition duration-1000 ${
              portfolio.id === activeProject ? "opacity-100" : "opacity-0"
            }`}
          >
            {portfolio.projectName}
          </p>
          <video
            className="w-[20vw] text-black"
            ref={(ref) => {
              // console.log(ref);
              videoRef[portfolio.id] = ref;
            }}
            // ref={videoRef}
            muted
            loop
            // poster={portfolio.thumbnail.src}
          >
            <source src={portfolio.video} type="video/mp4" className="" />
          </video>
          {/* <Image
            src={project.thumbnail}
            alt={`${project.name} image`}
            className={` w-[20vw]  `}
          /> */}
        </div>
      ))}
    </div>
  );
};
export default ProjectCard;
