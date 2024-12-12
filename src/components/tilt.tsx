'use client'
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
// import { skills } from '../data/constants';


// const Example = () => {
//   return (
//     <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
//       <TiltCard />
//     </div>
//   );
// };
type Skill = {
  title: string;
  skills: {
    name: string;
    image?: string;
  }[];}



export default function tilt(skill : Skill,props: any) {
 
  const HALF_ROTATION_RANGE = 32.5 / 2;
  const ROTATION_RANGE = 32.5;
  // const ref = useRef<HTMLElement | null>(null);
  //   const ref = useRef(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  //   const handleMouseMove = (e : MouseEvent) => {
  // if (!ref.current) return [0, 0];

  // const rect = ref.current.getBoundingClientRect();

  // const width = rect.width;
  // const height = rect.height;

  // const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
  // const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

  // const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
  // const rY = mouseX / width - HALF_ROTATION_RANGE;

  // x.set(rX);
  // y.set(rY);
  // };
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (event.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (event.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);

  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
            transform,
          }}
          // className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
          className="relative h-auto w-auto max-w-[500px] rounded-xl md:max-w-[400px] sm:max-w-[330px] text-slate-900  "
        // className="relative h-96 w-72 rounded-xl  text-slate-900  "
        >
          <div
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            className=" w-full max-w-[500px] bg-card border border-purple-500 shadow-lg shadow-blue-300 rounded-2xl p-6 md:max-w-[400px] md:p-4 sm:max-w-[330px]"
          // className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
          >
            <h2 
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            className="text-2xl font-semibold text-[#C8CFD8] text-center mb-5"
            >
              {skill.title}
            </h2>
            <div 
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            className="flex flex-wrap justify-center gap-3 mb-5" 
            >
              {skill.skills.map((item, i) => (
                <div
                  key={i}
                  className="text-base font-normal text-[#F2F5F7]/80 border border-[#F2F5F7]/80 rounded-xl px-4 py-3 flex items-center gap-2 md:text-sm md:px-3 md:py-2"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-6 h-6"
                    />
                  )}
                  {item.name}
                </div>
              ))}
            </div>
            {/* <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          HOVER ME
        </p> */}
          </div>
        </motion.div>
      
    </>
  );
};
