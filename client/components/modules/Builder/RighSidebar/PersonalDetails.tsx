"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const PersonalDetails = () => {
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