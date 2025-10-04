"use client"
import { Textarea } from "@/components/ui/textarea"

export const ProfessionalSummary = () => {
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