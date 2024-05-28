import { create } from "zustand";

const useCallToActionDistance = create((set) => ({
  callToActionDistance: 0,
  setCallToActionDistance: (distance: number) =>
    set(() => ({
      callToActionDistance: distance,
    })),
}));

export default useCallToActionDistance;
