"use client"
import LoadingScreen from '@/components/common/LoadingScreen'
import BuilderNavbar from '@/components/modules/Builder/BuilderNavbar'
import LeftSideBar from '@/components/modules/Builder/LeftSidebar/LeftSideBar'
import RightSidebar from '@/components/modules/Builder/RighSidebar/RightSidebar'
import { useTabSwitch } from '@/store/useTabSwitch'
import React from 'react'

export default function BuilderLayout({ children }: { children: React.ReactNode }) {
    const hasHydrated = useTabSwitch.persist.hasHydrated()
    if(!hasHydrated) return <LoadingScreen/>
    return (
        <div className='flex h-screen w-full flex-col overflow-hidden'>
            <nav className='shrink-0 p-5 shadow-lg'>
                <BuilderNavbar />
            </nav>
            <div className='flex flex-1 overflow-hidden'>
                <aside className='w-[35%] p-2 overflow-y-auto'>
                    <LeftSideBar />
                </aside>
                <main className='h-full w-full  p-5 overflow-y-auto'>
                    {children}
                </main>
                <aside className='h-full w-full  p-2 overflow-y-auto'>
                    <RightSidebar />
                </aside>
            </div>
        </div>
    )
}