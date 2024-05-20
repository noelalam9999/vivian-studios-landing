import { create } from "zustand";

const useProjectsContainerWidth = create((set) => ({
  projectsContainerWidth: 0,
  setProjectsContainerWidth: (distance: number) =>
    set(() => ({
      projectsContainerWidth: distance,
    })),
}));

export default useProjectsContainerWidth;
