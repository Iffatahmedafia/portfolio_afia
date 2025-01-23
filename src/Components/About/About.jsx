"use client";
import React, { useTransition, useState } from 'react';
import {IoArrowForward} from "react-icons/io5";
import TabButton from '../TabButton';
import afiaImg from "../../assets/Afia_13.jpg"

const TAB_Data =[
  {
    title: "Technical",
    id: "technical",
    content: (
      <ul className="list-disc pl-2">
        <li>Programming Languages: Java, Python</li>
        <li>Frontend: HTML5, Tailwind CSS, Bootstrap, React</li>
        <li>Backend: Nodejs, Laravel, .Net</li>
        <li>Database: MSSQL Server, MySQL</li>
        <li>Version Control: Git, GitHub</li>
        <li>RPA: UIPath</li>
        <li>Reporting: Power BI, SSRS</li>
        <li>Documentation: Lucid Chart, Diagram.net, Visio</li>
      </ul>
    )
  },
  {
    title: "Personal",
    id: "personal",
    content: (
      <ul className="list-disc pl-2">
        <li>Like to stay organized and do proper planning of my tasks</li>
        <li>Fast Learner</li>
        <li>Good Team Player</li>
        <li>Love learning new technologies and tools</li>
        <li>Punctual</li>
      </ul>
    )
  }
]

const About = () => {
  const [tab, setTab] = useState("technical");
  const [isPending , startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });

  }
  return (
    
    <div id="About" className="p-10 md:p-20 text-white">
        <h1 className="text-2xl md:text-4xl font-bold border-b-4 border-[#0e7490] pb-2 inline-block">About</h1>
        <div className="md:flex md:items-start gap-10 sm:py-12 mt-6 sm:mt-8">
          <img className="h-auto mx-auto max-w-full" src={afiaImg} width={500} height={500} alt="About Img Designed by Freepik" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg">
          A motivated and hardworking individual eager to explore, learn and leverage skills in a technical 
          world. Willingness to learn, follow instructions and work cooperatively within team environments. 
          Efficient in time management who likes to map and organize tasks ahead of time. A quick learner 
          having good computer competencies and a great interest in emerging technologies to build efficient 
          and practical solutions.
          </p>
          <div className="flex flex-row justify-start text-xl font-semibold mt-8">
         
          <TabButton selectTab={ () => handleTabChange("technical")} active={tab === "technical"}
            >
              {" "}
              Technical Skills{" "}
          </TabButton>
          <TabButton selectTab={ () => handleTabChange("personal")} active={tab === "personal"}
            >
              {" "}
              Personal Skills{" "}
          </TabButton>
          </div>
        
        
          <div className="md:flex items-center mt-2 p-4">{TAB_Data.find((t) => t.id === tab).content}
           {/* <ul>
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
            </ul>*/}
         </div>
      </div>
      </div>
    </div>
  )
}

export default About