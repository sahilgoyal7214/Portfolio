'use client'
import React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
    children: React.ReactNode,
    className?: string
}
const PageTransition = ({ children }: PageTransitionProps) => {
    const pathName = usePathname();
    return (
        <AnimatePresence>
            <div key={pathName}>
                <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.4, delay: 1, ease: "easeInOut" }} className="h-screen w-screen fixed bg-bodycolor top-0 pointer-events-none">
                </motion.div>
                {children}
            </div>
        </AnimatePresence>
    )
}

export default PageTransition