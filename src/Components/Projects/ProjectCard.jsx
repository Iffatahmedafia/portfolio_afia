import React from "react";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({
  title,
  desc,
  stack,
  link,
  demo,
  theme,
  category,
}) => {
  const isLight = theme === "light";

  return (
    <div
      className={`group relative h-full overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
        isLight
          ? "bg-white border-sky-200 shadow-md hover:shadow-xl"
          : "bg-slate-900 border-cyan-500/30 shadow-lg shadow-cyan-900/20"
      }`}
    >
      <div
        className={`absolute inset-0 rounded-3xl blur-2xl opacity-0 transition duration-300 group-hover:opacity-15 ${
          isLight ? "bg-sky-300" : "bg-cyan-500"
        }`}
      ></div>

      <div className="relative flex h-full flex-col p-6 md:p-7">
        <div className="mb-4">
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${
              isLight
                ? "border-sky-200 bg-sky-50 text-sky-700"
                : "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
            }`}
          >
            {category}
          </span>
        </div>

        <div className="flex-grow">
          <h3
            className={`text-xl md:text-2xl font-bold leading-tight ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            {title}
          </h3>

          <p
            className={`mt-3 text-sm md:text-base leading-7 ${
              isLight ? "text-slate-600" : "text-slate-300"
            }`}
          >
            {desc}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition duration-300 ${
                  isLight
                    ? "border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-300 hover:bg-sky-50"
                    : "border-slate-800 bg-slate-950 text-slate-200 hover:border-cyan-400 hover:bg-slate-800"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-3 flex-wrap">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:opacity-90">
              <FaGithub size={14} />
              Code
            </button>
          </a>

          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <button
                className={`inline-flex items-center gap-2 rounded-3xl border px-5 py-2.5 text-sm font-semibold transition duration-300 hover:scale-105 ${
                  isLight
                    ? "border-slate-300 text-slate-700 hover:bg-slate-100"
                    : "border-slate-700 text-white hover:bg-slate-800"
                }`}
              >
                Live Demo
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// import React from 'react';

// export const ProjectCard = (props) => {
//   return (
//     <div className="p-4 md:p-6 mt-6 flex flex-col justify-between h-full min-h-[210px] bg-gray-900 bg-opacity-60 shadow-lg shadow-slate-900 rounded-2xl transform transition-transform hover:scale-105 hover:shadow-cyan-800 duration-300">
//       <div className="flex-grow">
//         <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white">
//           {props.title}
//         </h3>
//         <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300 line-clamp-3">
//           {props.main}
//         </p>
//       </div>
//       <div className="p-2 md:p-4 flex gap-4">
//         <a href={props.link} target="_blank" rel="noopener noreferrer">
//           <button className="text-white py-2 px-3 text-sm md:text-md font-semibold rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 hover:scale-105 duration-300">
//             Source Code
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };
