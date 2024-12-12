import Project from "@/components/project";
import Image from "next/image";
// import Skills from "@/components/skillcard";
import TiltCard from "@/components/tilt";
import { skillso } from "@/data/constants";

{/* select only if has_projects tag is true */ }
export default function Home() {
  return (
    <div className="flex w-full h-full bg-black justify-center items-center">
      {/* <div className="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16">
      <Project />     
      </div> */}
      {/* <Skills /> */}
      {/* <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
      <TiltCard/>
      </div> */}
      {/* <div className="flex flex-col items-center justify-between w-full max-w-[1100px] gap-12 md:flex-col">
        <h1 className="text-4xl text-center font-semibold mt-5 text-primary md:mt-3 md:text-3xl">
          Skills
        </h1>
        <p className="text-lg text-center max-w-[600px] text-secondary md:text-base">
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </p>
        <div className=" flex flex-wrap justify-center w-full mt-8 gap-8">
          {skillso.map((skills, index) => (
            console.log(skills),
            <TiltCard key={index} {...skills} />
          ))}
        </div>
      </div> */}
    </div>
  );
}
