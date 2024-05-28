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
import useActiveProject from "../hooks/activeProject";

export const projects: IProject[] = [
  {
    id: 1,
    name: "Khajuraho",
    subtitle: "A 3D virtual tour of khajuraho ",
    thumbnail: khajuraho,
    bgColor: "#e49653",
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
  const { activeProject }: any = useActiveProject();
  const [positionAdjustment, setPositionAdjustment] = useState<number>(0);

  const [startLine, setStartLine] = useState<number>(0);

  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>({} as HTMLVideoElement);

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
      setBreakpoints(breakpoints);

      setStartLine(logoRevealDistance);
    }
  }, [projectsDistance, logoRevealDistance]);

  useEffect(() => {
    if (activeProject === 3) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
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
      {projects.map((project) => (
        <div
          ref={cardRef}
          className="flex justify-center relative mr-[3vw] z-0 w-full items-center"
        >
          <p
            className={`absolute  font-averta text-white font-extrabold text-5xl text-center transition duration-1000 ${
              project.id === activeProject ? "opacity-100" : "opacity-0"
            }`}
          >
            {project.name}
          </p>
          <video className="w-[50vw] text-black" ref={videoRef} muted loop>
            <source
              src="https://res.cloudinary.com/dsuiwxwkg/video/upload/v1716714006/portfolio1_fo0ld4.mp4"
              type="video/mp4"
              className=""
            />
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
