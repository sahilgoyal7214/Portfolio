import TiltCard from '@/components/tilt'
import { skills } from '@/data/constants'
import React from 'react'

function Skills() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-bodycolor  md:flex-col">
            <h1 className="text-4xl text-center text-white font-semibold mt-5 text-primary md:my-3 md:text-6xl">
            Skills
            </h1>
            <p className="text-lg text-center text-secondary md:text-2xl">
            Here are some of my skills on which I have been working on for the
            past 2 years.
            </p>
            <div className="grid w-full mx-auto place-items-center gap-10 grid-cols-1 md:grid-cols-2 items-start md:items-center mb-10  px-4 py-12 text-slate-900">
            {skills.map((skill, index) => (
            <TiltCard key={index} {...skill}/>
            ))}
          </div>
          </div>
  )
}

export default Skills