export interface EmploymentItem {
    id: number;
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    country: string;
    companyLink: string;
    description: string;
};

export interface InternshipItem {
    id: number;
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    country: string;
    companyLink: string;
    description: string;
};

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
    id:number;
    referentName: string;
    referentCompany: string;
    referentEmail: string;
    referentPhone:string
}