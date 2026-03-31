import React from "react";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    skills: ["Django", "FastAPI", "Node.js"],
  },
  {
    title: "AI / ML",
    skills: ["LLMs", "LangChain", "FAISS", "Hugging Face"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "MS SQL Server"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "GitHub", "Docker", "AWS", "Power BI", "UiPath"],
  },
];

const Skills = ({ theme }) => {
  const isLight = theme === "light";

  return (
    <section id="Skills" className="py-16 md:py-20">
      <div className="mb-12">
        <h2
          className={`mt-3 text-3xl md:text-4xl font-bold ${
            isLight ? "text-slate-900" : "text-white"
          }`}
        >
          Technical Skills
        </h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className={`relative rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
              isLight
                ? "bg-white border-sky-200 shadow-md hover:shadow-xl"
                : "bg-slate-900 border-slate-800 hover:border-cyan-500/40"
            }`}
          >
            <div
              className={`absolute inset-0 rounded-3xl blur-xl opacity-0 hover:opacity-20 transition duration-300 ${
                isLight ? "bg-sky-200" : "bg-cyan-500"
              }`}
            ></div>

            <div className="relative">
              <h3
                className={`text-xl font-semibold mb-5 ${
                  isLight ? "text-slate-900" : "text-white"
                }`}
              >
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition duration-300 ${
                      isLight
                        ? "bg-slate-50 border-slate-300 text-slate-700 hover:bg-sky-50 hover:border-sky-300"
                        : "bg-slate-950 border-slate-800 text-slate-200 hover:border-cyan-400 hover:bg-slate-800"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;