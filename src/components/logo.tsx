import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

interface LogoProps {
  title: string;
  className?: string;
  subtitle: string;
}
const Logo = ({ title, subtitle, className }: LogoProps) => {
  return (
    <div className='text-2xl group  '>
      <Link href="/">
        <h2 className={cn(" font-semibold tracking-wide hover:text-hovercolor hoverEffect  ", className)}>
          {title}<span className="text-lightsky group-hover:text-white hoverEffect px-2">{subtitle}</span>
        </h2>
      </Link>
    </div>

  )
}

export default Logo