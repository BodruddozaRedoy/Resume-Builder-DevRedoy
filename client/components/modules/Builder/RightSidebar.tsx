"use client"
import { DatePicker } from '@/components/common/DatePicker'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useTabSwitch } from '@/store/useTabSwitch'
import { Cross, CrossIcon, PlusCircle, X } from 'lucide-react'
import React, { useRef, useState } from 'react'

const PersonalDetails = () => {
    return (
        <div className=''>
            <h1 className='font-bold text-2xl mb-3'>Personal Details</h1>
            <p className='mb-3 text-muted-foreground'>Personal details such as name and job title are essential in a resume to give the recruiter a quick overview of the candidate.</p>
            <div className='grid grid-cols-2 gap-3'>
                <div>
                    <Label>First Name</Label>
                    <Input type='text' placeholder='Type here...' className='mt-2' />
                </div>
                <div>
                    <Label>Last Name</Label>
                    <Input type='text' placeholder='Type here...' className='mt-2' />
                </div>
                <div>
                    <Label>Job Title</Label>
                    <Input type='text' placeholder='Type here...' className='mt-2' />
                </div>
                <div>
                    <Label>Profile Picture</Label>
                    <Input type='file' id='picture' placeholder='Type here...' className='mt-2' />
                </div>
            </div>
        </div>
    )
}

const ContactInformation = () => {
    return (
        <div className=''>
            <h1 className='font-bold text-2xl mb-3'>Contact Information</h1>
            <p className='mb-3 text-muted-foreground'>Including your contacts in your resume is crucial so potential employers can easily get in touch with you.</p>
            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <Label>Email Address</Label>
                    <Input type='email' placeholder='Type here...' className='mt-2' />
                </div>
                <div>
                    <Label>Phone Number</Label>
                    <Input type='text' placeholder='Type here...' className='mt-2' />
                </div>
                <div>
                    <Label>Country</Label>
                    <Input type='text' placeholder='Type here...' className='mt-2' />
                </div>
                <div>
                    <Label>City</Label>
                    <Input type='text' placeholder='Type here...' className='mt-2' />
                </div>
                <div>
                    <Label>Address</Label>
                    <Input type='text' placeholder='Type here...' className='mt-2' />
                </div>
                <div>
                    <Label>Postal Code</Label>
                    <Input type='text' placeholder='Type here...' className='mt-2' />
                </div>

            </div>
        </div>
    )
}

const ProfessionalSummary = () => {
    return (
        <div className=''>
            <h1 className='font-bold text-2xl mb-3'>Professional Summary</h1>
            <p className='mb-3 text-muted-foreground'>Include your professional title, years of experience, and your most impressive achievements. Each achievement should be measurable and expressed in numbers.</p>
            <div>
                <Textarea placeholder='Type here...' />
            </div>
        </div>
    )
}

const Skills = () => {
    const [skills, setSkills] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddSkill = () => {
        const value = inputRef.current?.value.trim();
        if (!value) return; // skip empty

        setSkills((prev) => [...prev, value]);
        inputRef.current!.value = ""; // clear input after add
    };

    const handleRemoveSkill = (index: number) => {
        setSkills((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">Skills</h1>
            <p className="mb-3 text-muted-foreground">
                Highlight your most important and applicable professional skills.
            </p>

            <div className="flex items-center gap-2">
                <Input
                    ref={inputRef}
                    type="text"
                    placeholder="Type your skill."
                    className="w-1/3"
                />
                <Button
                    onClick={handleAddSkill}
                    className="flex items-center gap-1"
                >
                    <PlusCircle size={16} /> Add Skill
                </Button>
            </div>

            <div className="mt-4 flex gap-1">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 border rounded px-2 py-1"
                    >
                        <button onClick={() => handleRemoveSkill(index)}>
                            <X size={14} />
                        </button>
                        <span>{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const EmploymentHistory = () => {
    return (
        <div className=''>
            <h1 className='font-bold text-2xl mb-3'>Employment History</h1>
            <p className='mb-3 text-muted-foreground'>Show employers your past experience and what you have accomplished. Include simple, clear examples and use impactful words to demonstrate your skills.</p>
            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <Label>Job Title</Label>
                    <Input type='text' placeholder='Type here...' className='mt-2' />
                </div>
                <div>
                    <Label>Company Name</Label>
                    <Input type='text' placeholder='Type here...' className='mt-2' />
                </div>
                <div className='flex items-center gap-3'>
                    <DatePicker label='Start Date' />
                    <DatePicker label='End Date' />
                </div>
                <div className='flex items-center gap-2'>
                    <div>
                        <Label>Country</Label>
                        <Input type='text' placeholder='Type here...' className='mt-2' />
                    </div>
                    <div>
                        <Label>Company Link</Label>
                        <Input type='text' placeholder='Type here...' className='mt-2' />
                    </div>
                </div>
                <div className='col-span-2'>
                    <Label>Description</Label>
                    <Textarea placeholder='Type here...' className='mt-2' />
                </div>
            </div>
            <Button className='mt-3 w-full'><PlusCircle /> Add Experience</Button>
        </div>
    )
}

const Education = () => {
    return (
        <div className=''>
            <h1 className='font-bold text-2xl mb-3'>Education</h1>
            <p className='mb-3 text-muted-foreground'>Add the name of your school, where it is located, what degree you obtained, your field of study, and your graduation year.</p>
            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <Label>Degree Name</Label>
                    <Input type='text' placeholder='Type here...' className='mt-2' />
                </div>
                <div>
                    <Label>Institute Name</Label>
                    <Input type='text' placeholder='Type here...' className='mt-2' />
                </div>
                <div className='flex items-center gap-3'>
                    <DatePicker label='Start Date' />
                    <DatePicker label='End Date' />
                </div>
                <div className=''>
                    <div>
                        <Label>Location</Label>
                        <Input type='text' placeholder='Type here...' className='mt-2' />
                    </div>
                </div>
                <div className='col-span-2'>
                    <Label>Description</Label>
                    <Textarea placeholder='Type here...' className='mt-2' />
                </div>
            </div>
            <Button className='mt-3 w-full'><PlusCircle /> Add Education</Button>
        </div>
    )
}

export default function RightSidebar() {
    const { active, setActive } = useTabSwitch()
    return (
        <div className='bg-background shadow-lg rounded-lg p-5'>
            {active === "personal-details" && <PersonalDetails />}
            {active === "contact-information" && <ContactInformation />}
            {active === "professional-summary" && <ProfessionalSummary />}
            {active === "skills" && <Skills />}
            {active === "employment-history" && <EmploymentHistory />}
            {active === "education" && <Education />}
        </div>
    )
}
