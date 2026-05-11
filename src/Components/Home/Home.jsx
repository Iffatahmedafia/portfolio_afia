import React from "react";
import afiaImg from "../../assets/photo_5.png";
import TextChange from "../TextChange";
import CV from "../../assets/Afia_CV.pdf";

const Home = ({ theme }) => {
  const isLight = theme === "light";

  return (
    <section
      id="Home"
      className="pt-0 pb-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full">
        <div>
          <div
            className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium mb-4 ${
              isLight
                ? "bg-white border-cyan-500 text-sky-600"
                : "bg-slate-900 border-slate-800 text-cyan-300"
            }`}
          >
            Full Stack Developer • AI-Focused Builder
          </div>

          <h1
            className={`text-3xl md:text-5xl font-bold leading-tight tracking-tight ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            <TextChange />
          </h1>

          <p
            className={`mt-6 text-base sm:text-lg lg:text-xl leading-8 max-w-2xl ${
              isLight ? "text-slate-600" : "text-slate-300"
            }`}
          >
            I’m Afia Ahmed, a software developer focused on full-stack
            applications, AI-powered features, automation, and practical digital
            products. I work with React, Django, FastAPI, Node.js, PostgreSQL,
            and modern LLM-based workflows.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-4 text-white">
            <a href="#Projects">
              <button className="px-6 py-2 text-sm md:text-lg rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90 hover:scale-105 duration-300">
                View Projects
              </button>
            </a>

            <a href={CV} download>
              <button className="px-6 py-2 text-sm md:text-lg rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90 hover:scale-105 duration-300">
                Download CV
              </button>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "React",
              "Django",
              "FastAPI",
              "Node.js",
              "PostgreSQL",
              "LLMs",
            ].map((item) => (
              <span
                key={item}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  isLight
                    ? "bg-white border-slate-300 text-slate-700"
                    : "bg-slate-900 border-slate-800 text-slate-200"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div
            className={`relative overflow-hidden rounded-[1.5rem] border max-w-sm w-full shadow-lg transition duration-300 ${
              isLight
                ? "bg-white border-slate-200 shadow-slate-200"
                : "bg-slate-900 border-slate-800 shadow-slate-950"
            }`}
          >
            <div
              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-600 to-blue-600`}
            ></div>

            <div
              className={`absolute inset-0 opacity-0 transition duration-300 hover:opacity-10 ${
                isLight ? "bg-sky-200" : "bg-cyan-400"
              }`}
            ></div>

            <div className="relative">
              <img
                className="w-full h-[340px] sm:h-[400px] object-cover object-top"
                src={afiaImg}
                alt="Afia Ahmed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;


// import React from 'react';
// import afiaImg from "../../assets/photo_5.png"
// import TextChange from '../TextChange';
// import CV from "../../assets/Iffat_Ahmed_Afia_CV.pdf";

// const Home = () => {
  
//   return (
  //  <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
  //       <div className="md:w-3/4 md:pt-10">
  //         <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
  //           <TextChange />
  //         </h1>
  //         <p className="text-sm md:text-2xl tracking-tight">
  //           I am an experienced Web Developer having expertise in RPA as well.
  //           I am currently based in Canada and exploring opportunity in relevant sectors.
  //         </p>
  //         <div>
  //         <a href="#Footer">
  //            <button className="mt-5 mr-5 md:md-10 px-6 py-3 text-sm md:text-lg 
  //             md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-full bg-[#0e7490]">
  //               Contact Me
  //             </button>
  //           </a>
  //            <button className="mt-5 md:md-10 px-6 py-3 text-sm md:text-lg 
  //             md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-full bg-[#0e7490]">
  //               <a href={CV} download>Download CV</a> 
  //             </button>
  //         </div>
  //       </div>
  //       <div>
  //         <img className="h-auto" src={afiaImg} alt="Profile img" />
  //       </div>
  //   </div>
//     <div className="text-white flex flex-col md:flex-row gap-4 p-10 md:p-16">
//       <div className="">
//         <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
//           <TextChange />
//         </h1>
//         <p className="text-sm md:text-2xl tracking-tight mt-4">
//           I am an experienced Software Developer having expertise in AI and RPA as well.
//           I am currently based in Canada and exploring opportunity in relevant sectors.
//         </p>
//         <div>
//           <a href="#Footer">
//           <button className="mt-5 mr-5 md:md-10 px-6 py-3 text-sm md:text-lg 
//             md:py-2 md:px-4 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90 hover:scale-105 duration-300">
//               Contact Me
//             </button>
//           </a>
//           <button className="mt-5 md:md-10 px-6 py-3 text-sm md:text-lg 
//             md:py-2 md:px-4 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90 hover:scale-105 duration-300">
//               <a href={CV} download>Download CV</a> 
//           </button>
//         </div>
//       </div>
//     <div className="flex justify-center items-center">
//       <img className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 sm:rounded-none rounded-full object-cover mt-4" src={afiaImg} alt="Profile img" />
//     </div>
// </div>
//   )
// }

// export default Home
