import { create } from "zustand";

const useLogoRevealDistance = create((set) => ({
  logoRevealDistance: 0,
  setLogoRevealDistance: (id: number) =>
    set(() => ({
      logoRevealDistance: id,
    })),
}));

export default useLogoRevealDistance;
