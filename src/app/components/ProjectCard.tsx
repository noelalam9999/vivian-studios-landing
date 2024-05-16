import Image, { StaticImageData } from "next/image";
import React from "react";

type ProjectCardProps = {};

import buskaro from "@/app/assets/bus-karo.png";
import carService from "@/app/assets/car-service.png";
import khajuraho from "@/app/assets/khajuraho.png";
import useLogoRevealDistance from "../hooks/logoRevealDistance";

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

  return (
    <div
      style={{
        transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${logoRevealDistance}, 0, 0, 1)`,
      }}
      className={`flex `}
    >
      {projects.map((project) => (
        <div className="z-0">
          <Image
            src={project.thumbnail}
            alt={`${project.name} image`}
            className={`relative  w-[20vw] m-[5vw]`}
          />
          <p className="absolute">{project.name}</p>
        </div>
      ))}
    </div>
  );
};
export default ProjectCard;
