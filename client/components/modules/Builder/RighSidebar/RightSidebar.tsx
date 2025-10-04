"use client"
import { useTabSwitch } from '@/store/useTabSwitch'
import React from 'react'
import { PersonalDetails } from './PersonalDetails'
import { ContactInformation } from './ContactInformation'
import { ProfessionalSummary } from './ProfessionalSummary'
import { Skills } from './Skills'
import { EmploymentHistory } from './EmploymentHistory'
import { Education } from './Education'
import { Internship } from './Internship'
import { Courses } from './Courses'

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
            {active === "internship" && <Internship />}
            {active === "courses" && <Courses />}
        </div>
    )
}
