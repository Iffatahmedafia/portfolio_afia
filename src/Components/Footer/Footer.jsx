import React from 'react'
import {MdOutlineEmail} from "react-icons/md";
import {CiLinkedin} from "react-icons/ci";
import {FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <div id="Footer" className="bg-[#0e7490] text-white p-10 md:p-16 flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
        <div>
            <h1 className="text-xl md:text-6xl font-bold mb-3">Let's Connect</h1>
            <h3 className="text-sm md:text-xl font-normal text-gray-200">Looking forward to connecting with you!</h3>
        </div>
        <ul className="text-sm md:text-xl">
            <li className="flex gap-1 items-center hover:text-gray-300 transition duration-300">
                <MdOutlineEmail size={20} />
                ahmediffat11@gmail.com
            </li>
            <li className="flex gap-1 items-center hover:text-gray-300 transition duration-300">
                <CiLinkedin />
                https://www.linkedin.com/in/afia-ahmed/
            </li>
            <li className="flex gap-1 items-center hover:text-gray-300 transition duration-300">
                <FaGithub />
                https://github.com/Iffatahmedafia
            </li>
        </ul>
    </div>
    
  )
}

export default Footer