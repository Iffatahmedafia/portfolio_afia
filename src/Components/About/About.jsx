import React from 'react';
import {IoArrowForward} from "react-icons/io5"

const About = () => {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center md:justify-center md:flex-wrap bg-black shadow-xl 
    mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
        <h2 className="text-2xl md:text-4xl font-bold">
            About
        </h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
            <img className="md:h-80" alt="About img" />
            <div>
                <span>Technical Skill</span>
                <span>Personal Skill</span>
            </div>
            <ul>
                <div className="flex gap-3 py-4">
                    <IoArrowForward size={30} className="mt-1" />
                    <span className="w-96">
                       <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend Developer</h1>
                       <p className="text-sm md:text-md leading-tight">
                       Lorem ipsum dolor sit amet, consectetur
                       </p> 
                    </span>
                </div>
                <div className="flex gap-3 py-4">
                    <IoArrowForward size={30} className="mt-1" />
                    <span className="w-96">
                       <h1 className="text-xl md:text-2xl font-semibold leading-normal">Backend Developer</h1>
                       <p className="text-sm md:text-md leading-tight">
                       Lorem ipsum dolor sit amet, consectetur
                       </p> 
                    </span>
                </div>
                <div className="flex gap-3 py-4">
                    <IoArrowForward size={30} className="mt-1" />
                    <span className="w-96">
                       <h1 className="text-xl md:text-2xl font-semibold leading-normal">RPA Developer</h1>
                       <p className="text-sm md:text-md leading-tight">
                       Lorem ipsum dolor sit amet, consectetur
                       </p> 
                    </span>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default About