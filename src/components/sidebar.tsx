import { useOutsideClick } from '@/hooks/use-outside-click';
import { X } from 'lucide-react';
import React from 'react'
import Logo from './logo';
import { navbarData } from '@/data';
import Link from 'next/link';
import SocialLinks from './socialLinks';

interface props {
    isOpen: boolean;
    onclose: () => void;
    pathname: string
}
const Sidebar: React.FC<props> = ({ isOpen, onclose, pathname }: props) => {
    const sidebarRef = useOutsideClick<HTMLDivElement>(onclose)
    return (
        <div ref={sidebarRef}
            className={`fixed inset-y-0 right-0 z-50 min-w-72 max-w-96 bg-bodycolor border-l border-l-hovercolor  transform shadow-hovercolor hoverEffect ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
            <div className='flex justify-end p-4' onClick={onclose}>
                <button className='hover:text-red-600 hoverEffect ' aria-label='Close sidebar'>
                    <X />
                </button>
            </div>
            <nav className='flex flex-col  gap-7 px-5'>
                <Logo title="Sahil" subtitle="." />
                {navbarData.map((nav) => (
                    <Link key={nav.title} href={nav.href} onClick={onclose} className={`hover:text-hovercolor relative hoverEffect  ${pathname === nav?.href && "text-hovercolor"}`}>
                        {nav.title}
                    </Link>
                ))}
                <Link href={"/resume.pdf"} target="_blank" rel="noopener noreferrer" className="text-sm  bg-lightsky/10 px-4 py-2 rounded-md border border-hovercolor/10 hover:bg-hovercolor hover:border-hovercolor hover:text-black hoverEffect" >Hire Me</Link>

            <SocialLinks/>
            </nav>
        </div>
    )
}

export default Sidebar