"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const ContactInformation = () => {
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