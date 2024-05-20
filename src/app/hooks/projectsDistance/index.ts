import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

const useProjectsDistance = create((set) => ({
  projectsDistance: 0,
  setProjectsDistance: (distance: number) =>
    set(() => ({
      projectsDistance: distance,
    })),
}));

mountStoreDevtool("Projects Distance", useProjectsDistance);
export default useProjectsDistance;
