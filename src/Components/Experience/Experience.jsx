import React from "react";

const experiences = [
  {
    role: "Freelance Software Developer",
    company: "AI & Full Stack Projects",
    duration: "Oct 2024 – Present",
    bullets: [
        "Built AI-driven applications including a property valuation system using machine learning and scalable backend APIs.",
        "Developed automation pipelines for web scraping and data processing to streamline real-world workflows.",
        "Delivered full-stack solutions using React, Next.js, Node.js, FastAPI, and PostgreSQL with a focus on performance and usability.",
    ],
  },
  {
    role: "Junior RPA Developer",
    company: "DHL APSSC",
    duration: "Sep 2022 – Oct 2023",
    bullets: [
      "Automated the processing of 3,000–5,000 PDFs daily and improved operational efficiency through end-to-end UiPath workflows.",
      "Managed critical support tickets and contributed to successful UAT, TAT, and country-level deployments.",
      "Created Power BI and SSRS reports to support business insights and decision-making.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "HomeCrowd Sdn Bhd",
    duration: "Feb 2022 – Jul 2022",
    bullets: [
      "Tested, debugged, and improved an existing Laravel-based web platform as part of the development team.",
      "Introduced UI enhancements and new features to improve the product experience.",
      "Supported planning, documentation, and early-stage development for new web-based initiatives.",
    ],
  },
];

const Experience = ({ theme }) => {
  const isLight = theme === "light";

  return (
    <section id="Experience" className="py-16 md:py-20">
      <div className="mb-12">
        <h2
          className={`text-3xl md:text-4xl font-bold ${
            isLight ? "text-slate-900" : "text-white"
          }`}
        >
          Experience
        </h2>

        <p
          className={`mt-4 max-w-3xl text-base md:text-lg leading-7 ${
            isLight ? "text-slate-600" : "text-slate-300"
          }`}
        >
          My experience spans full-stack development, automation, AI-powered
          workflows, and product-focused engineering across software and business
          systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`group relative rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
              isLight
                ? "bg-white border-slate-200 shadow-sm hover:shadow-xl"
                : "bg-slate-900 border-slate-800 hover:border-cyan-500/40"
            }`}
          >
            <div
              className={`absolute inset-0 rounded-3xl blur-2xl opacity-0 transition duration-300 group-hover:opacity-15 ${
                isLight ? "bg-sky-200" : "bg-cyan-500"
              }`}
            ></div>

            <div className="relative">
              <p
                className={`text-sm font-medium ${
                  isLight ? "text-sky-700" : "text-cyan-300"
                }`}
              >
                {exp.duration}
              </p>

              <h3
                className={`mt-3 text-xl font-bold leading-tight ${
                  isLight ? "text-slate-900" : "text-white"
                }`}
              >
                {exp.role}
              </h3>

              <p
                className={`mt-1 text-sm md:text-base font-medium ${
                  isLight ? "text-slate-600" : "text-slate-300"
                }`}
              >
                {exp.company}
              </p>

              <ul
                className={`mt-5 space-y-3 text-sm leading-6 ${
                  isLight ? "text-slate-600" : "text-slate-300"
                }`}
              >
                {exp.bullets.map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span
                      className={`mt-2 h-2 w-2 rounded-full flex-shrink-0 ${
                        isLight ? "bg-sky-600" : "bg-cyan-400"
                      }`}
                    ></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

// import React from 'react';

// const experiences = [
//   {
//     role: "Full Stack Software Engineer (Remote), Integrate Tech Solution",
//     duration: "Oct 2024 to Present",
//     bullets: [
//       "Involved in complete revamp of the existing system, migrating it to a modern React-Django architecture for improved scalability and maintainability.",
//       "Integrated AI-powered features using locally fine-tuned LLM",
//       "Developed automation scripts in Python, integrating RESTful APIs and databases to streamline data workflows.",
//       "Designed and enhanced interactive web pages using React Material UI.",
//       "Conducted thorough testing and debugging of existing web systems to ensure reliability and functionality.",
//     ],
//   },
//   {
//     role: "Junior RPA Developer, DHL APSSC",
//     duration: "September 2022 - October 2023",
//     bullets: [
//       "Fully automated the process of downloading, merging, and uploading 3,000–5,000 PDFs daily to SharePoint, significantly improving operational efficiency.",
//       "Managed high-priority, critical support tickets and ensured timely resolutions.",
//       "Designed and developed end-to-end automation solutions for various business units using UiPath.",
//       "Led TAT, UAT, and country-level deployments to ensure successful rollout of automation projects.",
//       "Created interactive Power BI, SSRS reports to support data-driven decision-making and business insights.",
//     ],
//   },
//   {
//     role: "Web Developer Intern, HomeCrowd Sdn Bhd",
//     duration: "February 2022 - July 2022",
//     bullets: [
//       "Worked closely as part of the web development team to test, report and debug the existing system based on Laravel.",
//       "Modified and introduced significant UI changes and new featured to enhance user experience.",
//       "Involved in planning and developing new projects based on web3 concept (smart contract)",
//       "Assisted in maintaining and updating technical documentation to ensure accuracy and consistency across development phases.",
//     ],
//   },
// ];

// const Experience = () => {
//   return (
//     <div id="Experience" className="p-10 md:p-20">
//       <h1 className="text-2xl md:text-4xl text-white font-bold border-b-4 border-[#0e7490] pb-2 inline-block">
//         Experience
//       </h1>

//       <div className="grid md:grid-cols-3 gap-6 mt-10">
//         {experiences.map((exp, index) => (
//           <div
//             key={index}
//             className="md:min-h-[450px] bg-slate-950 bg-opacity-45 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:bg-[#0e7490]/80 transition-all duration-300 flex flex-col justify-between"
//           >
//             <div>
//               <h1 className="text-white leading-tight font-semibold pb-2">
//                 {exp.role}
//               </h1>
//               <p className="text-sm text-white font-thin">{exp.duration}</p>
//               <ul className="text-sm list-disc text-white p-2 pl-5 space-y-1">
//                 {exp.bullets.map((point, idx) => (
//                   <li key={idx}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;
