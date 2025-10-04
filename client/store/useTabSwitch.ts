import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface TabItem {
  id: number;
  title: string;
  slug: string;
  icon: string;
}

// 🔹 First 3 tabs are fixed
export const fixedTabs: TabItem[] = [
  { id: 1, title: "Personal Details", slug: "personal-details", icon: "User" },
  { id: 2, title: "Contact Information", slug: "contact-information", icon: "Mail" },
  { id: 3, title: "Professional Summary", slug: "professional-summary", icon: "FileText" },
];

// 🔹 Remaining tabs are reorderable
const reorderableTabs: TabItem[] = [
  { id: 4, title: "Skills", slug: "skills", icon: "Wrench" },
  { id: 5, title: "Employment History", slug: "employment-history", icon: "Briefcase" },
  { id: 6, title: "Education", slug: "education", icon: "GraduationCap" },
  { id: 7, title: "Internship", slug: "internship", icon: "Briefcase" },
  { id: 8, title: "Courses", slug: "courses", icon: "BookOpen" },
  { id: 9, title: "References", slug: "references", icon: "Users" },
  { id: 10, title: "Languages", slug: "languages", icon: "Globe" },
  { id: 11, title: "Hobbies", slug: "hobbies", icon: "Heart" },
  { id: 12, title: "Links", slug: "links", icon: "Link" },
];

type ComponentState = {
  active: string;
  reorderable: TabItem[];
  setActive: (val: string) => void;
  setReorderable: (tabs: TabItem[]) => void;
};

export const useTabSwitch = create<ComponentState>()(
  persist(
    (set) => ({
      active: "personal-details",
      reorderable: reorderableTabs,
      setActive: (val: string) => set({ active: val }),
      setReorderable: (tabs) => set({ reorderable: tabs }),
    }),
    {
      name: "tab-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
