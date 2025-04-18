import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div
      id="Footer"
      className="bg-[#0e7490] text-white p-6 md:p-12 flex flex-col md:flex-row justify-between md:justify-around items-start md:items-center gap-8"
    >
      {/* Left Section */}
      <div>
        <h1 className="text-2xl md:text-5xl font-bold mb-2">Let's Connect</h1>
        <p className="text-sm md:text-lg text-gray-200">
          Looking forward to connecting with you!
        </p>
      </div>

      {/* Right Section */}
      <ul className="text-sm md:text-lg space-y-3 w-full md:w-auto">
        <li className="flex items-center gap-2 hover:text-gray-300 transition duration-300 break-words">
          <MdOutlineEmail size={20} />
          <span className="truncate">ahmediffat11@gmail.com</span>
        </li>
        <li className="flex items-center gap-2 hover:text-gray-300 transition duration-300 break-all">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/afia-ahmed/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin.com/in/afia-ahmed
          </a>
        </li>
        <li className="flex items-center gap-2 hover:text-gray-300 transition duration-300 break-all">
          <FaGithub size={20} />
          <a
            href="https://github.com/Iffatahmedafia"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            github.com/Iffatahmedafia
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
