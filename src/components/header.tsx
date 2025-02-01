'use client'
import { navbarData } from "@/data"
import Container from "./container"
import Logo from "./logo"   
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { useState } from "react"
import Sidebar from "./sidebar"
const header = () => {
    const [isSideBarOpen, setisSideBarOpen] = useState(false)
    const pathName = usePathname()
    const toggleSidebar = () => {
        setisSideBarOpen(!isSideBarOpen)
    }

    return (
        <header className='border-b border-b-hovercolor bg-bodycolor py-2 text-white/80 sticky top-0 z-50'>
            <Container className=" flex items-center justify-between  " >
                <Logo title="Sahil" subtitle="." />
                <div className="hidden md:inline-flex gap-7 items-center text-sm uppercase tracking-wide font-medium"> 
                    {navbarData.map((nav) => (
                        <Link key={nav.title} href={nav.href} className={`hover:text-hovercolor relative hoverEffect group overflow-x-hidden ${pathName === nav.href ? "text-hovercolor" : ""}`}>
                            {nav.title}
                        <span className={`w-full h-px bg-hovercolor absolute left-0 inline-block bottom-0 group-hover:translate-x-0 hoverEffect ${pathName === nav.href ? "translate-x-0" : "-translate-x-[105%]"} group-hover:scale-x-100 transition-all duration-300`}/>
                        </Link>
                    ))}
                    <Link href = {"/resume.pdf"} target="_blank" rel="noopener noreferrer" className="text-sm bg-lightsky/10 px-4 py-2 rounded-md border font-bold border-hovercolor/10 hover:bg-hovercolor hover:border-hovercolor hover:text-black hoverEffect" >Hire Me</Link>
                </div>
                <button aria-label="Toggle Menu" onClick={toggleSidebar} className="inline-flex md:hidden relative hover:text-hovercolor hoverEffect "> <Menu/> </button>
            </Container>
            <div>
                <Sidebar isOpen={isSideBarOpen} onclose = {()=> setisSideBarOpen(false)} pathname = {pathName}/>
            </div>
        </header>
    )
}

export default header