import Image from "next/image";
import proCodrr from "../app/images/ProCodrr.webp";


export default function Project(props: any) {


  const project = [{
    title: "ProCodrr",
    description: "Deeply understand advanced concepts, practice with real-world exercises, build expertise with hands-on projects to boost your career.",
    image: proCodrr,
    tags: ["Docker", "AWS", "DuckDNS", "Eslint", "Husky", "CI/CD", "React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    url: "https://procodrr.com",
    type: "Coding Platform"
  },
  {
    title: "ProCodrr 1",
    description: "Deeply understand advanced concepts, practice with real-world exercises, build expertise with hands-on projects to boost your career.",
    image: proCodrr,
    tags: ["Docker", "AWS", "DuckDNS", "Eslint", "Husky", "CI/CD", "React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    url: "https://procodrr.com",
    type: "Coding Platform",
  },
  {
    title: "ProCodrr 2",
    description: "Deeply understand advanced concepts, practice with real-world exercises, build expertise with hands-on projects to boost your career.",
    image: proCodrr,
    tags: ["Docker", "AWS", "DuckDNS", "Eslint", "Husky", "CI/CD", "React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    url: "https://procodrr.com",
    type: "Coding Platform",
  },
  ];

  return (
    <div className=" max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16">
      <h2 className="text-3xl sm:text-[40px] bg-black relative z-10 font-bold px-4 py-2 w-max mt-6 mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
        Projects
      </h2>
      <div className="w-[3px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
      {project.map((projects, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-20 sm:gap-[80px] items-center  relative">

          <div className={`${index % 2 == 0 ? " left-1/2 right-1/4 " : "left-1/4 right-1/2"} h-[2px]  bg-[#1788ae] absolute top-1/2 hidden sm:block`}></div>
          <div
            className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block">
          </div>
          <a href={projects.url} className={`${index % 2 == 0 ? "order-1 sm:order-2 justify-center " : "justify-center "}flex w-full relative  sm:justify-start`}>
            <div className={`${index % 2 == 0 ? "sm:ml-auto " : ""}flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200`}>
              <Image className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={projects.image} alt="" width={400} height={400} />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                {projects.url}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="feather feather-external-link">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div className={` ${index % 2 == 0 ? "order-2 sm:order-1" : ""} w-full`}>
            <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">
              {projects.title}
            </h3>
            <span className="text-[#459bd5] text-base md:text-lg">{projects.type}</span>
            <p className="text-justify text-sm md:text-base mt-2">
              {projects.description}
            </p>

            <ul className="flex flex-wrap gap-2 mt-2">

              {projects.tags.map((tag, index) => (
                <li key={index} className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

  );
};


