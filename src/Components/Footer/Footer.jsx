import React from 'react'
import {MdOutlineEmail} from "react-icons/md";
import {CiLinkedin} from "react-icons/ci";
import {FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <div id="Footer" className="flex justify-around bg-[#0e7490] text-white p-10 md:p-12 items-center">
        <div>
            <h1 className="text-xl md:text-6xl font-bold">Get In Touch</h1>
            <h3 className="text-sm md:text-xl font-normal md:p-3">Will love to get connected</h3>
        </div>
        <ul className="text-sm md:text-xl">
            <li className="flex gap-1 items-center">
                <MdOutlineEmail size={20} />
                ahmediffat11@gmail.com
            </li>
            <li className="flex gap-1 items-center">
                <CiLinkedin />
                https://www.linkedin.com/in/afia-ahmed/
            </li>
            <li className="flex gap-1 items-center">
                <FaGithub />
                https://github.com/Iffatahmedafia
            </li>
        </ul>
    </div>
  )
}

export default Footer