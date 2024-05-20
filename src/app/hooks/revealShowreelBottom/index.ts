import { create } from "zustand";

const useRevealShowreelBottom = create((set) => ({
  revealShowreelBottom: 0,
  setRevealShowreelBottom: (distance: number) =>
    set(() => ({
      revealShowreelBottom: distance,
    })),
}));

export default useRevealShowreelBottom;
