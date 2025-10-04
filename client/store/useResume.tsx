import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { ResumeData } from "@/types/resume.types";

type TemplateKey = "left" | "simple";

type ResumeState = {
  data: ResumeData;
  template: TemplateKey;
  setTemplate: (t: TemplateKey) => void;
  setData: (updater: (prev: ResumeData) => ResumeData) => void;
  patchSection: <K extends keyof ResumeData>(key: K, value: Partial<ResumeData[K]>) => void;
};

const demoData: ResumeData = {
  personalDetails: { name: "John Doe", title: "Full Stack Developer" },
  contactInformation: {
    email: "john.doe@email.com",
    phone: "+1 234 567 890",
    location: "New York, USA",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
    website: "devredoy.com",
  },
  professionalSummary:
    "Full Stack Developer with 5+ years building scalable web apps with React, Next.js, Node.js.",
  skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "SQL", "MongoDB"],
  employmentHistory: [
    {
      id: "emp1",
      jobTitle: "Senior Developer",
      company: "TechCorp",
      start: "2020-01",
      end: "Present",
      location: "New York, USA",
      description:
        "Led SaaS platform for 10k+ users. Optimized APIs (-40% response time). Mentored juniors.",
    },
    {
      id: "emp2",
      jobTitle: "Frontend Developer",
      company: "WebSolutions",
      start: "2017-06",
      end: "2019-12",
      location: "Remote",
      description: "Built responsive sites and improved Lighthouse scores by 30%.",
    },
  ],
  education: [
    {
      id: "edu1",
      degree: "B.Sc. in Computer Science",
      institute: "University of Technology",
      start: "2013",
      end: "2017",
    },
  ],
  internship: [
    {
      id: "int1",
      jobTitle: "Software Intern",
      company: "Startup Inc.",
      start: "2016-01",
      end: "2016-06",
      description: "Assisted frontend development and participated in Agile ceremonies.",
    },
  ],
  courses: [
    { id: "c1", title: "Full Stack Web Development", provider: "Coursera", year: "2020" },
    { id: "c2", title: "Advanced React Patterns", provider: "Udemy", year: "2021" },
  ],
  references: [{ id: "r1", referentName: "Jane Smith", referentCompany: "TechCorp" }],
  languages: [
    { id: "l1", language: "English", proficiency: "Native" },
    { id: "l2", language: "Spanish", proficiency: "Proficient (B1-B2)" },
  ],
  hobbies: [{ id: "h1", hobby: "Open Source" }, { id: "h2", hobby: "Travel" }],
  links: [
    { id: "ln1", title: "Portfolio", url: "https://www.devredoy.com/" },
    { id: "ln2", title: "GitHub", url: "https://github.com/johndoe" },
  ],
};

export const useResume = create<ResumeState>()(
  persist(
    (set) => ({
      data: demoData,
      template: "left",
      setTemplate: (t) => set({ template: t }),
      setData: (updater) => set((s) => ({ data: updater(s.data) })),
      patchSection: (key, value) =>
        set((s) => ({
          data: { ...s.data, [key]: { ...(s.data[key] as object), ...(value as object) } } as any,
        })),
    }),
    {
      name: "resume-data",
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
);
