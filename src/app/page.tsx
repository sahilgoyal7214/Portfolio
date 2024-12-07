
import Project from "@/components/project";
import Image from "next/image";
import Skills from "@/components/skillcard";
export default function Home() {
  return (
    <div className="flex bg-black justify-center items-center">
      {/* <div className="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16">
      <Project />     
      </div> */}
      <Skills />
    </div>
  );
}
