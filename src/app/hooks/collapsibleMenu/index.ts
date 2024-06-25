import { create } from "zustand";

const useCollapsibleMenu = create((set) => ({
  open: false,
  setOpen: () => {
    set((state: any) => ({
      open: !state.open,
    }));
  },
}));

export default useCollapsibleMenu;
