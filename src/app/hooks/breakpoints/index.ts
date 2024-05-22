import { IBreakpoints } from "@/app/interfaces/IBreakpoints";
import { create } from "zustand";

const useProjectBreakpoints = create((set) => ({
  breakpoints: {},
  setBreakpoints: (breakpoints: IBreakpoints) => {
    set(() => ({
      breakpoints: breakpoints,
    }));
  },
}));

export default useProjectBreakpoints;
