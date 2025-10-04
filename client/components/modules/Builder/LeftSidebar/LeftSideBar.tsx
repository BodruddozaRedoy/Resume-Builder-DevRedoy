"use client";
import { Button } from "@/components/ui/button";
import { useTabSwitch } from "@/store/useTabSwitch";
import {
    User,
    Mail,
    FileText,
    Wrench,
    Briefcase,
    GraduationCap,
} from "lucide-react";

const tabs = [
    {
        id: 1,
        title: "Personal Details",
        slug: "personal-details",
        icon: User,
    },
    {
        id: 2,
        title: "Contact Information",
        slug: "contact-information",
        icon: Mail,
    },
    {
        id: 3,
        title: "Professional Summary",
        slug: "professional-summary",
        icon: FileText,
    },
    {
        id: 4,
        title: "Skills",
        slug: "skills",
        icon: Wrench,
    },
    {
        id: 5,
        title: "Employment History",
        slug: "employment-history",
        icon: Briefcase,
    },
    {
        id: 6,
        title: "Education",
        slug: "education",
        icon: GraduationCap,
    },
    {
        id: 7,
        title: "Internship",
        slug: "internship",
        icon: GraduationCap,
    },
    {
        id: 8,
        title: "Courses",
        slug: "courses",
        icon: GraduationCap,
    },
];


export default function LeftSideBar() {
    const { active, setActive } = useTabSwitch();

    return (
        <div className="flex flex-col gap-3 bg-background shadow-lg p-5 rounded-lg">
            {tabs.map((tab) => (
                <Button
                    key={tab.id}
                    className="w-full flex justify-baseline items-center gap-2"
                    variant={active === tab.slug ? "default" : "outline"}
                    onClick={() => setActive(tab.slug)}
                >
                    <tab.icon className="w-4 h-4" />
                    {tab.title}
                </Button>
            ))}
        </div>
    );
}
