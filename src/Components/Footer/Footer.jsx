import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = ({ theme }) => {
  const isLight = theme === "light";

  return (
    <footer
      id="Footer"
      className={`relative overflow-hidden py-10 md:py-12 px-6 md:px-12 ${
        isLight
          ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
          : "bg-gradient-to-r from-slate-950 via-cyan-950 to-blue-950 text-white"
      }`}
    >
      <div
        className={`absolute inset-0 opacity-20 blur-3xl ${
          isLight ? "bg-white/20" : "bg-cyan-500/20"
        }`}
      ></div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-2xl">
          <p
            className={`text-sm font-bold uppercase tracking-[0.2em] ${
              isLight ? "text-white" : "text-cyan-300"
            }`}
          >
            Contact
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Connect With Me
          </h2>

          <p
            className={`mt-5 text-base md:text-lg leading-8 ${
              isLight ? "text-white/90" : "text-slate-200"
            }`}
          >
            I’m open to full-stack, AI-focused, and software engineering
            opportunities. Feel free to reach out if you’d like to connect,
            collaborate, or discuss a role.
          </p>
        </div>

        <div className="mt-5 space-y-5">
          <a
            href="mailto:ahmediffat11@gmail.com"
            className="group flex items-center gap-4 text-sm md:text-base transition duration-300 hover:translate-x-1"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
              <MdOutlineEmail size={22} className="text-white" />
            </span>
            <span className="text-white/95 group-hover:text-white">
              ahmediffat11@gmail.com
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/afia-ahmed/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-sm md:text-base transition duration-300 hover:translate-x-1"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
              <CiLinkedin size={24} className="text-white" />
            </span>
            <span className="text-white/95 group-hover:text-white">
              linkedin.com/in/afia-ahmed
            </span>
          </a>

          <a
            href="https://github.com/Iffatahmedafia"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-sm md:text-base transition duration-300 hover:translate-x-1"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
              <FaGithub size={20} className="text-slate-100" />
            </span>
            <span className="text-white/95 group-hover:text-white">
              github.com/Iffatahmedafia
            </span>
          </a>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto mt-5 pt-6 border-t border-white/20">
        <p className="text-sm text-white/75">
          © {new Date().getFullYear()} Iffat Ahmed Afia
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// import React from 'react';
// import { MdOutlineEmail } from 'react-icons/md';
// import { CiLinkedin } from 'react-icons/ci';
// import { FaGithub } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <div
//       id="Footer"
//       className="bg-[#0e7490] text-white p-6 md:p-12 flex flex-col md:flex-row justify-between md:justify-around items-start md:items-center gap-8"
//     >
//       {/* Left Section */}
//       <div>
//         <h1 className="text-2xl md:text-5xl font-bold mb-2">Let's Connect</h1>
//         <p className="text-sm md:text-lg text-gray-200">
//           Looking forward to connecting with you!
//         </p>
//       </div>

//       {/* Right Section */}
//       <ul className="text-sm md:text-lg space-y-3 w-full md:w-auto">
//         <li className="flex items-center gap-2 hover:text-gray-300 transition duration-300 break-words">
//           <MdOutlineEmail size={20} />
//           <span className="truncate">ahmediffat11@gmail.com</span>
//         </li>
//         <li className="flex items-center gap-2 hover:text-gray-300 transition duration-300 break-all">
//           <CiLinkedin size={20} />
//           <a
//             href="https://www.linkedin.com/in/afia-ahmed/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="underline"
//           >
//             linkedin.com/in/afia-ahmed
//           </a>
//         </li>
//         <li className="flex items-center gap-2 hover:text-gray-300 transition duration-300 break-all">
//           <FaGithub size={20} />
//           <a
//             href="https://github.com/Iffatahmedafia"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="underline"
//           >
//             github.com/Iffatahmedafia
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Footer;
