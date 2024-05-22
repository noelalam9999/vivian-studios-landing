import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";

type ProjectCardProps = {};

import buskaro from "@/app/assets/bus-karo.png";
import carService from "@/app/assets/car-service.png";
import khajuraho from "@/app/assets/khajuraho.png";
import useLogoRevealDistance from "../hooks/logoRevealDistance";
import useProjectsContainerWidth from "../hooks/projectsContainerWidth";
import useProjectsDistance from "../hooks/projectsDistance";
import { calculateBgColorChangeRanges } from "../utils/calculateBgColorChangeRanges";
import { IProject } from "../interfaces/IProject";
import useProjectBreakpoints from "../hooks/breakpoints";

export const projects: IProject[] = [
  {
    id: 1,
    name: "Khajuraho",
    subtitle: "A 3D virtual tour of khajuraho ",
    thumbnail: khajuraho,
    bgColor: "#000000",
  },
  {
    id: 2,
    name: "Schoolbus Karo",
    subtitle:
      "Live tracking bus service with safety features to ensure child safety",
    thumbnail: buskaro,
    bgColor: "#187c7d",
  },
  {
    id: 3,
    name: "Innovative Service Center",
    subtitle: "Complete cars and bus service",
    thumbnail: carService,
    bgColor: "#BDBDBD",
  },
];

const ProjectCard: React.FC<ProjectCardProps> = () => {
  const { logoRevealDistance }: any = useLogoRevealDistance();
  const { projectsDistance }: any = useProjectsDistance();
  const [positionAdjustment, setPositionAdjustment] = useState<number>(0);

  const [startLine, setStartLine] = useState<number>(0);

  const cardRef = useRef<HTMLDivElement>(null);

  const setBreakpoints = useProjectBreakpoints(
    (state: any) => state.setBreakpoints
  );

  const setProjectsContainerWidth = useProjectsContainerWidth(
    (state: any) => state.setProjectsContainerWidth
  );

  useEffect(() => {
    const card: any = cardRef?.current?.getBoundingClientRect();
    if (card) {
      setPositionAdjustment(card.width * projects.length);
      setProjectsContainerWidth(card.width * projects.length);
    }
  }, []);

  useEffect(() => {
    if (projectsDistance <= 0 && logoRevealDistance > 0 && startLine === 0) {
      const card: any = cardRef?.current?.getBoundingClientRect();
      const breakpoints = calculateBgColorChangeRanges(
        logoRevealDistance,
        projects,
        card.width
      );
      // console.log(breakpoints);
      setBreakpoints(breakpoints);

      setStartLine(logoRevealDistance);
    }
  }, [projectsDistance, logoRevealDistance]);

  return (
    <div
      style={{
        transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${
          logoRevealDistance - positionAdjustment
        }, 0, 0, 1)`,
      }}
      className={`flex`}
    >
      {projects.map((project) => (
        <div ref={cardRef} className="z-0  mr-[3vw]">
          <Image
            src={project.thumbnail}
            alt={`${project.name} image`}
            className={`relative w-[50vw] mr-[30vw] mt-[20vh]`}
          />
          <p className="absolute">{project.name}</p>
        </div>
      ))}
    </div>
  );
};
export default ProjectCard;
