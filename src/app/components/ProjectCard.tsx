import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";

type ProjectCardProps = {};

import buskaro from "@/app/assets/bus-karo.png";
import carService from "@/app/assets/car-service.png";
import khajuraho from "@/app/assets/khajuraho.png";
import useLogoRevealDistance from "../hooks/logoRevealDistance";
import useProjectsContainerWidth from "../hooks/projectsContainerWidth";

interface IProject {
  name: string;
  subtitle: string;
  thumbnail: StaticImageData | string;
}

const projects: IProject[] = [
  {
    name: "Khajuraho",
    subtitle: "A 3D virtual tour of khajuraho ",
    thumbnail: khajuraho,
  },
  {
    name: "Schoolbus Karo",
    subtitle:
      "Live tracking bus service with safety features to ensure child safety",
    thumbnail: buskaro,
  },
  {
    name: "Innovative Service Center",
    subtitle: "Complete cars and bus service",
    thumbnail: carService,
  },
];

const ProjectCard: React.FC<ProjectCardProps> = () => {
  const { logoRevealDistance }: any = useLogoRevealDistance();

  const cardRef = useRef<HTMLDivElement>(null);

  const setProjectsContainerWidth = useProjectsContainerWidth(
    (state: any) => state.setProjectsContainerWidth
  );

  const [positionAdjustment, setPositionAdjustment] = useState<number>(0);

  useEffect(() => {
    const card: any = cardRef?.current?.getBoundingClientRect();
    if (card) {
      setPositionAdjustment(card.width * projects.length);
      setProjectsContainerWidth(card.width * projects.length);
    }
  }, []);

  console.log(logoRevealDistance - positionAdjustment);

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
