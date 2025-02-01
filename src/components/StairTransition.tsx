'use client'
import React from 'react'
import { AnimatePresence } from 'motion/react'
import { usePathname } from 'next/navigation';
import Stair from './Stair';

const StairTransition = () => {
    const pathName = usePathname();
    return (
        <AnimatePresence mode='wait'>
            <div key={pathName}>
                <div className="h-screen w-screen fixed top-0 left-0 right-0 z-40 flex pointer-events-none">
                    <Stair />
                </div>
            </div>
        </AnimatePresence>
    )
}

export default StairTransition