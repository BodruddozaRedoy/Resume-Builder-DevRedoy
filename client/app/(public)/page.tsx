import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <Button>
        <Link href={"/resume"}>Resume</Link>
      </Button>
    </div>
  )
}
