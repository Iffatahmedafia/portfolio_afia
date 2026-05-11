import React from "react";
import { ProjectCard } from "./ProjectCard";

const mainProjects = [
  {
    title: "InsightOps",
    category: "AI + Analytics",
    desc: "An operations intelligence project focused on turning business and system data into actionable insights through dashboards, reporting workflows, and AI-assisted analysis.",
    stack: ["React", "Node.js", "REST APIs", "Analytics", "AI"],
    link: "https://github.com/Iffatahmedafia/InsightOps",
    demo: "https://insight-ops-gamma.vercel.app/",
  },
  {
    title: "AI Property Valuation Platform",
    category: "AI + Full Stack",
    desc: "A production-style property valuation platform that combines machine learning, backend APIs, and a modern frontend to estimate property values and support smarter real-estate decision making.",
    stack: ["React", "FastAPI", "PostgreSQL", "Supabase", "Machine Learning"],
    link: "https://github.com/Iffatahmedafia/PropertyScraper",
    demo: "https://myhomecrowd.com",
  },
  {
    title: "ShopLocal (AI-Powered E-commerce Platform)",
    category: "AI + Full Stack",
    desc: "A local e-commerce platform with full-stack architecture and AI-driven features to improve product discovery, personalization, and overall user experience.",
    stack: ["React", "Django", "PostgreSQL", "LLM"],
    link: "https://github.com/Iffatahmedafia/ShopLocal",
    demo: "https://shoplocal-frontend.onrender.com",
  },
  {
    title: "AILearn (AI Learning App)",
    category: "AI + Full Stack App",
    desc: "An AI-powered learning application that allows users to practice technical quizzes and get personalized summaries and learning suggestions based on quiz results.",
    stack: ["Next.js", "FastAPI", "PostgreSQL","LLMs"],
    link: "https://github.com/Iffatahmedafia/Quiz_App",
    demo: "",
  },
  {
    title: "SmartTask",
    category: "Full Stack App",
    desc: "A productivity-focused task management application with clean CRUD workflows, responsive UI, and practical full-stack implementation.",
    stack: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/Iffatahmedafia/PersonalTaskManager",
    demo: "https://personal-task-manager-three.vercel.app",
  },
  {
    title: "Hit Calculator Application",
    category: "API + Automation",
    desc: "A structured application that integrates APIs and data-processing logic to automate calculations and streamline workflow efficiency.",
    stack: ["Python", "REST APIs", "Airtable"],
    link: "https://github.com/attiqRahman/Odds_api",
    demo: "",
  },
];

const otherProjects = [
  {
    name: "Mental Health Website",
    tech: "Laravel, HTML5, CSS, Bootstrap, MySQL",
    link: "https://github.com/Iffatahmedafia/MentalHealthWebsite",
  },
  {
    name: "Journey Planner",
    tech: "Python, Algorithm, gmplot",
    link: "https://github.com/Iffatahmedafia/JourneyPlanner",
  },
];

const Projects = ({ theme }) => {
  const isLight = theme === "light";

  return (
    <section id="Projects" className="py-16 md:py-20">
      <div className="mb-12">
        <h2
          className={`text-3xl md:text-4xl font-bold ${
            isLight ? "text-slate-900" : "text-white"
          }`}
        >
          Projects
        </h2>

        <p
          className={`mt-4 max-w-3xl text-base md:text-lg leading-7 ${
            isLight ? "text-slate-600" : "text-slate-300"
          }`}
        >
          A selection of projects that reflect my work in full-stack
          development, AI-powered applications, backend systems, and practical
          product design.
        </p>
      </div>

      {/* Main Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mainProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} theme={theme} />
        ))}
      </div>

      {/* Other Projects */}
      <div className="mt-12">
        <h3
          className={`text-xl md:text-2xl font-semibold ${
            isLight ? "text-slate-900" : "text-white"
          }`}
        >
          Other Projects
        </h3>

        <div
          className={`mt-5 rounded-3xl border p-6 ${
            isLight
              ? "bg-white border-slate-200 shadow-sm"
              : "bg-slate-900 border-slate-800"
          }`}
        >
          <div className="space-y-4">
            {otherProjects.map((project) => (
              <div
                key={project.name}
                className={`flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b last:border-b-0 pb-4 last:pb-0 ${
                  isLight ? "border-slate-200" : "border-slate-800"
                }`}
              >
                <div>
                  <h4
                    className={`text-base md:text-lg font-semibold ${
                      isLight ? "text-slate-900" : "text-white"
                    }`}
                  >
                    {project.name}
                  </h4>
                  <p
                    className={`text-sm mt-1 ${
                      isLight ? "text-slate-600" : "text-slate-300"
                    }`}
                  >
                    {project.tech}
                  </p>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex items-center gap-2 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:opacity-90">
                    View Code
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;




// import React, { useRef, useState, useEffect } from 'react';
// import { ProjectCard } from './ProjectCard';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const Projects = () => {
//   const scrollRef = useRef();
//   const [pageCount, setPageCount] = useState(0);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [cardsPerPage, setCardsPerPage] = useState(2); // default for mobile

//   // Responsive card count
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setCardsPerPage(3); // desktop
//       } else if (window.innerWidth >= 640) {
//         setCardsPerPage(3); // tablets
//       } else {
//         setCardsPerPage(1); // small mobile
//       }
//     };

//     handleResize(); // call on load
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const scrollToPage = (page) => {
//     const container = scrollRef.current;
//     if (container) {
//       const card = container.querySelector('.project-card');
//       const cardWidth = card?.offsetWidth ?? 300;
//       container.scrollTo({
//         left: page * cardWidth * cardsPerPage + page * 20, // account for gap
//         behavior: 'smooth',
//       });
//     }
//   };

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (container) {
//       const totalCards = container.querySelectorAll('.project-card').length;
//       setPageCount(Math.ceil(totalCards / cardsPerPage));
//     }
//   }, [cardsPerPage]);

//   const handleScroll = () => {
//     const container = scrollRef.current;
//     if (container) {
//       const card = container.querySelector('.project-card');
//       const cardWidth = card?.offsetWidth ?? 300;
//       const page = Math.round(container.scrollLeft / (cardWidth * cardsPerPage));
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div id="Projects" className="p-10 md:p-20 text-white">
//       <h1 className="text-2xl md:text-4xl font-bold border-b-4 border-[#0e7490] pb-2 inline-block">
//         Projects
//       </h1>
//       <Swiper
//             spaceBetween={20}
//             slidesPerView={2} // Show 2 slides on small screens
//             breakpoints={{
//               768: { slidesPerView: 3 }, // Show 4 slides on larger screens
//             }}
//             pagination={{ clickable: true }}
//             modules={[Pagination]}
//             className="pb-16 overflow-visible" // Space for dots
//             >
//           {[
//             { title: "Shop Local", main: "React, Django, PostgreSQL, LLM", link: "https://github.com/Iffatahmedafia/ShopLocal.git" },
//             { title: "Personal Task Manager", main: "React, Node.js, MongoDB", link: "https://github.com/Iffatahmedafia/PersonalTaskManager.git" },
//             { title: "Hit Calculator Application", main: "Python, REST APIs, Airtable", link: "https://github.com/attiqRahman/Odds_api" },
//             { title: "Mental Health Website", main: "Laravel, HTML5, CSS, Bootstrap, MySQL", link: "https://github.com/Iffatahmedafia/MentalHealthWebsite" },
//             { title: "Journey Planner", main: "Python, Algorithm, gmplot", link: "https://github.com/Iffatahmedafia/JourneyPlanner" },
//           ].map((proj, idx) => (
//             <SwiperSlide key={idx} className="overflow-visible">
//               <div className="p-2 md:p-3"> {/* Optional padding to prevent edge clipping */}
//                 <ProjectCard {...proj} />
//               </div>
//             </SwiperSlide>
//           ))}
//       </Swiper>
//       {/* Swiper Pagination - Inline Style */}
//       <style>
//             {`
//               .swiper-pagination {
//                 position: relative !important;
//                 margin-top: 15px;
//               }

//               .swiper-pagination-bullet {
//                 width: 10px;
//                 height: 10px;
//                 opacity: 0.5;
//                 transition: all 0.3s ease;
//               }

//               .swiper-pagination-bullet-active {
//                 opacity: 1;
//               }
//             `}
//           </style> 
//     </div>
//   );
// };

// export default Projects;
