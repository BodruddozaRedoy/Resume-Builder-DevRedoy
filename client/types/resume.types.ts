export interface EmploymentItem {
  id: number;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  country: string;
  companyLink: string;
  description: string;
}

export interface InternshipItem {
  id: number;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  country: string;
  companyLink: string;
  description: string;
}

export type EducationItem = {
  id: number;
  degree: string;
  institute: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
};

export type CourseItem = {
  id: number;
  institute: string;
  startDate: string;
  endDate: string;
  courseTitle: string;
};

export interface ReferenceItem {
  id: number;
  referentName: string;
  referentCompany: string;
  referentEmail: string;
  referentPhone: string;
}

export interface LanguageItem {
  id: number;
  language: string;
  proficiency?:
    | "Novice (A1-A2)"
    | "Proficient (B1-B2)"
    | "Highly proficient (C1-C2)"
    | "Native";
}

export interface LinkItem {
  id: number;
  title: string;
  url: string;
}

export type PersonalDetails = {
  name: string;
  title?: string;
};

export type ContactInformation = {
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  website?: string;
};

export type HobbyItem = {
  id: string;
  hobby: string;
};

export type ResumeData = {
  personalDetails: PersonalDetails;
  contactInformation: ContactInformation;
  professionalSummary?: string;
  skills: string[];
  employmentHistory: EmploymentItem[];
  education: EducationItem[];
  internship: InternshipItem[];
  courses: CourseItem[];
  references: ReferenceItem[];
  languages: LanguageItem[];
  hobbies: HobbyItem[];
  links: LinkItem[];
};
