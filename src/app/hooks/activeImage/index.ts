import { create } from "zustand";

const imageQuantity: number = 290;

const useActiveImage = create((set) => ({
  activeImage: 1,
  maxQuantity: imageQuantity,
  setActiveImage: (id: number) =>
    set(() => {
      if (id <= 0) {
        return {
          activeImage: 1,
        };
      }
      if (id > imageQuantity) {
        return {
          activeImage: 290,
        };
      } else {
        return {
          activeImage: id,
        };
      }
    }),
  decreaseNumber: () =>
    set((state: any) => {
      if (state.activeImage >= 2) {
        return { activeImage: state.activeImage - 1 };
      } else {
        return { activeImage: 1 };
      }
    }),
  increaseNumber: () =>
    set((state: any) => {
      if (state.activeImage < imageQuantity) {
        return { activeImage: state.activeImage + 1 };
      } else {
        return { activeImage: imageQuantity };
      }
    }),
}));

export default useActiveImage;
