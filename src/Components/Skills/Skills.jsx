import React from "react";
import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaLayerGroup,
  FaServer,
  FaTools,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Frontend",
    Icon: FaCode,
    accent: "cyan",
    skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    Icon: FaServer,
    accent: "cyan",
    skills: ["Django", "FastAPI", "Node.js"],
  },
  {
    title: "AI / ML",
    Icon: FaBrain,
    accent: "cyan",
    skills: ["LLMs", "LangChain", "RAG", "FAISS", "Hugging Face"],
  },
  {
    title: "Databases",
    Icon: FaDatabase,
    accent: "cyan",
    skills: ["PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    title: "Tools & Cloud",
    Icon: FaTools,
    accent: "cyan",
    skills: ["Git", "GitHub", "Docker", "AWS", "Power BI", "UiPath"],
  },
];

const accentStyles = {
  cyan: {
    light: "text-slate-900 bg-cyan-50 border-cyan-100",
    dark: "text-white bg-cyan-400/10 border-cyan-400/20",
    line: "bg-gradient-to-r from-cyan-600 to-blue-600",
  },
  emerald: {
    light: "text-emerald-700 bg-emerald-50 border-emerald-100",
    dark: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
    line: "bg-emerald-500",
  },
  violet: {
    light: "text-violet-700 bg-violet-50 border-violet-100",
    dark: "text-violet-300 bg-violet-400/10 border-violet-400/20",
    line: "bg-violet-500",
  },
  amber: {
    light: "text-amber-700 bg-amber-50 border-amber-100",
    dark: "text-amber-300 bg-amber-400/10 border-amber-400/20",
    line: "bg-amber-500",
  },
  rose: {
    light: "text-rose-700 bg-rose-50 border-rose-100",
    dark: "text-rose-300 bg-rose-400/10 border-rose-400/20",
    line: "bg-rose-500",
  },
};

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
        {skillGroups.map((group) => {
          const Icon = group.Icon || FaLayerGroup;
          const accent = accentStyles[group.accent];

          return (
            <div
              key={group.title}
              className={`group relative overflow-hidden rounded-lg border p-5 transition-all duration-300 hover:-translate-y-1 ${
                isLight
                  ? "bg-white border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
                  : "bg-slate-900 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div
                className={`absolute left-0 top-0 h-1 w-full ${accent.line}`}
              ></div>

              <div className="flex items-start gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border ${
                    isLight ? accent.light : accent.dark
                  }`}
                >
                  <Icon size={18} />
                </div>

                <div className="min-w-0">
                  <h3
                    className={`text-lg font-semibold ${
                      isLight ? "text-slate-900" : "text-white"
                    }`}
                  >
                    {group.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-md border px-3 py-1.5 text-sm font-medium transition duration-300 ${
                          isLight
                            ? "border-slate-200 bg-slate-50 text-slate-700 group-hover:border-slate-300"
                            : "border-slate-800 bg-slate-950 text-slate-200 group-hover:border-slate-700"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
