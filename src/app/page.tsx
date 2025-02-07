'use client'
import Project from "@/components/project";
import Image from "next/image";
import TiltCard from "@/components/tilt";
import { skills } from "@/data/constants";
import { Typewriter } from 'react-simple-typewriter';
import Container from "@/components/container";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/socialLinks";
import Statistips from "@/components/Statistips";
import Photo from "@/components/photo";
import HomeDescription from "@/components/HomeDescription";
{/* select only if has_projects tag is true */ }
export default function Home() {
  const Bio = {
    name: "Sahil Goyal",
    roles: ["Full Stack Developer",
      "AI Developer",
      "ML Developer",
      "Programmer"]
  }

  return (
    <div className=" bg-bodycolor text-white/80">
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10 " >
        <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
          <div>
            <h2 className="text-3xl md:text-5xl mb-2 text-white">Hello I&apos;m </h2>
            <h1 className="text-4xl md:text-6xl mb-2 text-lightsky">{Bio.name}</h1>
          </div>
          <h1 className="text-5xl -mt-6 -mb-4 text-white">
            I'm a{' '}
            <span className="text-[#1788ae]">
              <Typewriter
                words={Bio.roles}
                loop={Infinity} // Infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={80} // Typing speed in ms
                deleteSpeed={50} // Deleting speed in ms
                delaySpeed={1000} // Delay between words in ms
              />
            </span>
          </h1>
          <HomeDescription />
          <Button className="bg-transparent border rounded-full text-lightsky hoverEffect h-11 border-lightsky/50 hover:bg-hovercolor hover:border-hovercolor/60 hover:text-black">Download CV <Download /></Button>
          <SocialLinks className="rounded-full" />
          <Statistips />
        </div>
        <div>
          <Photo />
        </div>
        {/* <div className="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16">
        <div className=" flex flex-wrap justify-center w-full mt-8 gap-8">
        {skillso.map((skills, index) => (
          
        <TiltCard key={index} {...skills} />
        ))}
        </div>
        </div> */}
        {/* <Skills /> */}
      </Container>
      <Container>
        <div className="flex flex-col items-center justify-center w-full  md:flex-col">
          <h1 className="text-4xl text-center text-white font-semibold mt-5 text-primary md:my-3 md:text-6xl">
            Skills
          </h1>
          <p className="text-lg text-center text-secondary md:text-2xl">
            Here are some of my skills on which I have been working on for the
            past 2 years.
          </p>
          <div className="grid w-full mx-auto place-items-center gap-10 grid-cols-1 md:grid-cols-2 items-start md:items-center mb-10 px-4 py-12 text-slate-900">
            {skills.map((skill, index) => (
              <TiltCard key={index} {...skill} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full  gap-12 md:flex-col">
          <Project />
        </div>
      </Container>

    </div>
  );
}
