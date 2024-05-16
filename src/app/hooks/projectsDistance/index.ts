import { create } from "zustand";

const useProjectsDistance = create((set) => ({
  distance: 0,
  setProjectsDistance: (distance: number) =>
    set(() => ({
      distance: distance,
    })),
}));

export default useProjectsDistance;
