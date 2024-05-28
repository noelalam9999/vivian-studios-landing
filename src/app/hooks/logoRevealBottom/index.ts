import { create } from "zustand";

const useLogoRevealBottom = create((set) => ({
  logoRevealBottom: 0,
  setLogoRevealBottom: (distance: number) =>
    set(() => ({
      logoRevealBottom: distance,
    })),
}));

export default useLogoRevealBottom;
