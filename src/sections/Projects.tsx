import odiafont from "@/assets/images/odiafont.png";
import studyNotion from "@/assets/images/studynotion.png";
import snapSolver from "@/assets/images/snapsolver.png";
import marketPlace from "@/assets/images/market.png";
import trimmr from "@/assets/images/trimmr.png";
import buzzBox from "@/assets/images/buzzbox.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";



const portfolioProjects = [
  {
    company: "Prominent Newspaper Agency in Odisha",
    year: "2023",
    title: "Odia Font Converter",
    results: [
      { title: "Enabled seamless font conversion between Akruti, Odia Unicode, and Sreelipi" },
      { title: "Improved text compatibility for Odia language users" },
      { title: "Enhanced user experience with a simple and intuitive interface" },
    ],
    link: "https://odia-font-converter-3jem.vercel.app/",
    image: odiafont, 
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "StudyNotion - Ed-Tech Platform",
    results: [
      { title: "Created a fully functional ed-tech platform using the MERN stack" },
      { title: "Enabled instructors to create and share educational content" },
      { title: "Provided students with an interactive learning experience" },
    ],
    link: "https://study-notion-frontend-e5647fp6a-phani2425s-projects.vercel.app/",
    image: studyNotion, 
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "SnapSolver - Math Problem Solver",
    results: [
      { title: "Enabled users to solve math problems by drawing or uploading images" },
      { title: "Integrated Google Generative AI for accurate problem-solving" },
      { title: "Supported LaTeX rendering for mathematical expressions" },
    ],
    link: "https://snapsolver.vercel.app/",
    image: snapSolver, 
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "MarketPlace App",
    results: [
      { title: "Built a full-stack e-commerce app with React, Redux, TypeScript, and Node.js" },
      { title: "Implemented an admin dashboard for product and order management" },
      { title: "Enabled secure user authentication and seamless shopping experience" },
    ],
    link: "https://market-place-ten-opal.vercel.app/",
    image: marketPlace, 
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "Trimmr - Link Shortener",
    results: [
      { title: "Developed a link-shortening tool with click tracking and analytics" },
      { title: "Provided graphical representation of click data (location, device, etc.)" },
      { title: "Enhanced user experience with a clean and efficient interface" },
    ],
    link: "https://trimmr-fbpz.vercel.app/",
    image: trimmr, 
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "BuzzBox - Real-Time Chat Application",
    results: [
      { title: "Built a real-time messaging platform with media sharing and cloud integration" },
      { title: "Implemented smart notifications and customizable user profiles" },
      { title: "Ensured secure and scalable communication for users" },
    ],
    link: "https://buzz-box-psi.vercel.app/",
    image: buzzBox, 
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">

        <SectionHeader eyebrow="real-world Results" title="Featured Projects" description="See how I transformed consepts into engaging digital experiences."/>

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className=" px-8 pt-8 pb-0  md:pt-12 md:px-10 lg:pt-16 lg:px-16 sticky"
              style={{ top:`calc(64px + ${index * 40}px)` }}
            >
              
              <div className="lg:flex lg:justify-between lg:gap-8">
                <div>
                  <div className="flex">
                    <div className="bg-gradient-to-r from bg-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest gap-2 text-sm text-transparent bg-clip-text ">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50 group">
                        <CheckCircleIcon className="size-5 md:size-6 group-hover:text-emerald-600 transform duration-200" />
                        <span className="group-hover:text-emerald-600 transform duration-200">
                          {result.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full  md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 group">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4 md:size-5 group-hover:rotate-45 transform duration-200" />
                    </button>
                  </a>
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  className="mt-8 -mb-4 md:mb-0 lg:-mr-72 lg:-mb-20 "
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
