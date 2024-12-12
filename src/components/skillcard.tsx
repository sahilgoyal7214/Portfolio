// import React from 'react';
// import { skills } from '../data/constants';
// import TiltCard from './tilt';

// const Skills = () => {

//   return (
//     <div
      
//       className="flex flex-col justify-center items-center relative z-10"
//     >
//       <div className="flex flex-col items-center justify-between w-full max-w-[1100px] gap-12 md:flex-col">
//         <h1 className="text-4xl text-center font-semibold mt-5 text-primary md:mt-3 md:text-3xl">
//           Skills
//         </h1>
//         <p className="text-lg text-center max-w-[600px] text-secondary md:text-base">
//           Here are some of my skills on which I have been working on for the
//           past 2 years.
//         </p>
//         <div className="flex flex-wrap justify-center w-full mt-8 gap-8">
//           {skills.map((skill, index) => (
//             <div key={index}
//               className="w-full max-w-[500px] bg-card border border-purple-500 shadow-lg shadow-blue-300 rounded-2xl p-6 md:max-w-[400px] md:p-4 sm:max-w-[330px]"
//             >
//               <h2 className="text-2xl font-semibold text-secondary text-center mb-5">
//                 {skill.title}
//               </h2>
//               <div className="flex flex-wrap justify-center gap-3 mb-5">
//                 {skill.skills.map((item, i) => (
//                   <div
//                     key={i}
//                     className="text-base font-normal text-primary/80 border border-primary/80 rounded-xl px-4 py-3 flex items-center gap-2 md:text-sm md:px-3 md:py-2"
//                   >
//                     {item.image && (
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-6 h-6"
//                       />
//                     )}
//                     {item.name}
//                   </div>
//                 ))} 
//                </div>
//             </div>
//           ))}
//           {skills.map((skill, index) => (
//             <TiltCard key={index} skills={skill} />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
