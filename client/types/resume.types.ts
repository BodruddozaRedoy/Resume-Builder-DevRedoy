export type DateRange = {
  start?: string; // "2022-01"
  end?: string;   // "Present" | "2023-08"
  location?: string;
};

export type EmploymentItem = {
  id: string;
  jobTitle: string;
  company: string;
  description?: string;
} & DateRange;

export type EducationItem = {
  id: string;
  degree: string;
  institute: string;
  description?: string;
} & DateRange;

export type InternshipItem = EmploymentItem;

export type CourseItem = {
  id: string;
  title: string;
  provider?: string;
  year?: string;
};

export type ReferenceItem = {
  id: string;
  referentName: string;
  referentCompany?: string;
  referentEmail?: string;
  referentPhone?: string;
};

export type LanguageItem = {
  id: string;
  language: string;
  proficiency?: "Novice (A1-A2)" | "Proficient (B1-B2)" | "Highly proficient (C1-C2)" | "Native";
};

export type HobbyItem = {
  id: string;
  hobby: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

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
