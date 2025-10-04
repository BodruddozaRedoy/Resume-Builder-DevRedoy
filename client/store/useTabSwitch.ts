import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ComponentState = {
  active: string;
  setActive: (val: string) => void;
};

export const useTabSwitch = create<ComponentState>()(
  persist(
    (set) => ({
      active: "personal-details",
      setActive: (val: string) => set({ active: val }),
    }),
    {
      name: "tab",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
