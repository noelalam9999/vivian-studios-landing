import { StaticImageData } from "next/image";

export interface IProject {
  id: number;
  name: string;
  subtitle: string;
  thumbnail: StaticImageData | string;
  bgColor: string;
  asset?: string;
}
