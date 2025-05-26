import React from 'react';

const experiences = [
  {
    role: "Full Stack Software Engineer (Remote), Integrate Tech Solution",
    duration: "Oct 2024 to Present",
    bullets: [
      "Involved in complete revamp of the existing system, migrating it to a modern React-Django architecture for improved scalability and maintainability.",
      "Integrated AI-powered features using locally fine-tuned LLM",
      "Developed automation scripts in Python, integrating RESTful APIs and databases to streamline data workflows.",
      "Designed and enhanced interactive web pages using React Material UI.",
      "Conducted thorough testing and debugging of existing web systems to ensure reliability and functionality.",
    ],
  },
  {
    role: "Junior RPA Developer, DHL APSSC",
    duration: "September 2022 - October 2023",
    bullets: [
      "Fully automated the process of downloading, merging, and uploading 3,000–5,000 PDFs daily to SharePoint, significantly improving operational efficiency.",
      "Managed high-priority, critical support tickets and ensured timely resolutions.",
      "Designed and developed end-to-end automation solutions for various business units using UiPath.",
      "Led TAT, UAT, and country-level deployments to ensure successful rollout of automation projects.",
      "Created interactive Power BI, SSRS reports to support data-driven decision-making and business insights.",
    ],
  },
  {
    role: "Web Developer Intern, HomeCrowd Sdn Bhd",
    duration: "February 2022 - July 2022",
    bullets: [
      "Worked closely as part of the web development team to test, report and debug the existing system based on Laravel.",
      "Modified and introduced significant UI changes and new featured to enhance user experience.",
      "Involved in planning and developing new projects based on web3 concept (smart contract)",
      "Assisted in maintaining and updating technical documentation to ensure accuracy and consistency across development phases.",
    ],
  },
];

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-20">
      <h1 className="text-2xl md:text-4xl text-white font-bold border-b-4 border-[#0e7490] pb-2 inline-block">
        Experience
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="md:min-h-[450px] bg-slate-950 bg-opacity-45 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:bg-[#0e7490]/80 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h1 className="text-white leading-tight font-semibold pb-2">
                {exp.role}
              </h1>
              <p className="text-sm text-white font-thin">{exp.duration}</p>
              <ul className="text-sm list-disc text-white p-2 pl-5 space-y-1">
                {exp.bullets.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
