'use client'
import { statsData } from '@/data'
import CountUp from 'react-countup';

import React from 'react'

const Statistips = () => {
  return (
    <div className='flex flex-col items-center md:items-start md:flex-row gap-2.5 md:gap-5'>
        {statsData.map((item, index) => (
            <div key={index} className='flex flex-1 items-center justify-center lg:justify-start gap-2 md:gap-4 flex-col md:flex-row '>
                <CountUp end={item.num} duration={5} delay={2} className='text-4xl lg:text-6xl font-extrabold text-white '/>
                
                <p className='leading-snug text-sm'>{item.title}</p>
            </div>     
        ))}
    </div>
  )
}

export default Statistips