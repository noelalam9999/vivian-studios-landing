import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

const useLogoRevealDistance = create((set) => ({
  logoRevealDistance: 0,
  setLogoRevealDistance: (distance: number) =>
    set(() => ({
      logoRevealDistance: distance,
    })),
}));

export default useLogoRevealDistance;
