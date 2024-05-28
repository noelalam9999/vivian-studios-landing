import { IProject } from "@/app/interfaces/IProject";
import { create } from "zustand";

const useActiveProject = create((set) => ({
  activeProject: 0,
  setActiveProject: (id: number) =>
    set(() => ({
      activeProject: id,
    })),
}));

export default useActiveProject;
