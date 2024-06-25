import { StaticImageData } from "next/image";
import aden from "../assets/portfolioThumbnails/aden.jpg";
import animation from "../assets/portfolioThumbnails/animation.jpg";
import expendibles from "../assets/portfolioThumbnails/expendibles.jpg";
import stateOfMind from "../assets/portfolioThumbnails/state-of-mind.png";
import wageWar from "../assets/portfolioThumbnails/wage-war.jpg";

export type IPortfolio = {
  id: number;
  projectName: string;
  video: string;
  thumbnail: StaticImageData;
  backgroundColor: string;
};
export const portfolioList: IPortfolio[] = [
  {
    id: 1,
    projectName: "Aden",
    video:
      "https://res.cloudinary.com/dsuiwxwkg/video/upload/v1717216552/clip_fxml1n.mp4",
    thumbnail: aden,
    backgroundColor: "#deeceb",
  },
  {
    id: 2,
    projectName: "Animation",
    video:
      "https://res.cloudinary.com/dsuiwxwkg/video/upload/v1717216564/clip_jwapxo.mp4",
    thumbnail: animation,
    backgroundColor: "#a7a977",
  },
  {
    id: 3,
    projectName: "Expendables",
    video:
      "https://res.cloudinary.com/dsuiwxwkg/video/upload/v1717216578/clip_y4reg8.mp4",
    thumbnail: expendibles,
    backgroundColor: "#ffe6bf",
  },
  {
    id: 4,
    projectName: "State of Mind",
    video:
      "https://res.cloudinary.com/dsuiwxwkg/video/upload/v1717216606/Shot_ID-_SOM_063_1601_resized_xwutda.mp4",
    thumbnail: stateOfMind,
    backgroundColor: "#a8a189",
  },
  {
    id: 5,
    projectName: "Wage War",
    video:
      "https://res.cloudinary.com/dsuiwxwkg/video/upload/v1717216614/clip_sdiiyq.mp4",
    thumbnail: wageWar,
    backgroundColor: "#dbe8e7",
  },
];
