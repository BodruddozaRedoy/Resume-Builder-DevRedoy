import {create} from 'zustand'

type ComponentState = {
  active: string;
  setActive: (val: string) => void;
};

export const useTabSwitch = create<ComponentState>((set) => ({
    active: "personal-details",
    setActive: (val:string) => set({active:val})
}))