import { create } from "zustand";

const useLogoRevealDistance = create((set) => ({
  logoRevealDistance: 0,
  setLogoRevealDistance: (distance: number) =>
    set(() => ({
      logoRevealDistance: distance,
    })),
}));

export default useLogoRevealDistance;
