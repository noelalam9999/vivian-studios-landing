import { create } from "zustand";

const useAboutCardPosition = create((set) => ({
  aboutCardPosition: 0,
  setAboutCardPosition: (position: number) => {
    set(() => ({
      aboutCardPosition: position,
    }));
  },
}));

export default useAboutCardPosition;
