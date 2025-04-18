import React from 'react';
import {FaCss3, FaFigma, FaHtml5, FaJs} from "react-icons/fa";


const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-20">
        <h1 className="text-2xl md:text-4xl text-white font-bold border-b-4 border-[#0e7490] pb-2 inline-block">Experience</h1>
        <div className="flex flex-wrap py-12 px-8 items-center justify-around">
            <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-3 rounded-lg p-8 items-center shadow-lg hover:shadow-2xl hover:bg-[#0e7490] rounded-2xl transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-[#0e7490] duration-300">
                <span className="text-white">
                    <h1 className="leading-tight font-semibold pb-2">Full Stack Software Engineer (Remote),Integrate Tech Solution</h1>
                    <p className="text-sm leading-tight font-thin">Oct 2024 to Present</p>
                    <ul className="text-sm list-disc p-2">
                        <li>Involved in complete revamp of the existing system, migrating it to a modern React-Django
                        architecture for improved scalability and maintainability.</li>
                        <li>Developed automation scripts in Python, integrating RESTful APIs and databases to streamline data
                        workflows..</li>
                        <li>Designed and enhanced interactive web pages using React Material UI.</li>
                        <li>Conducted thorough testing and debugging of existing web systems to ensure reliability and
                        functionality.</li>
                    </ul>
                </span>
            </div>
            <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-3 rounded-lg p-8 items-center shadow-lg hover:shadow-2xl hover:bg-[#0e7490] rounded-2xl transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-[#0e7490] duration-300">
                <span className="text-white">
                    <h1 className="leading-tight font-semibold pb-2"> Junior RPA Developer, DHL APSSC</h1>
                    <p className="text-sm leading-tight font-thin">September 2022 - October 2023</p>
                    <ul className="text-sm list-disc p-2">
                        <li>Fully automated the process of downloading, merging, and uploading 3,000–5,000 PDFs daily to
                        SharePoint, significantly improving operational efficiency.</li>
                        <li>Managed high-priority, critical support tickets and ensured timely resolutions.</li>
                        <li>Designed and developed end-to-end automation solutions for various business units using UiPath</li>
                        <li>Led TAT, UAT, and country-level deployments to ensure successful rollout of automation projects.</li>
                        <li>Created interactive Power BI and SSRS reports to support data-driven decision-making and business
                        insights.</li>
                    </ul>
                </span>
            </div>
            <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-3 rounded-lg p-8 items-center shadow-lg hover:shadow-2xl hover:bg-[#0e7490] rounded-2xl transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-[#0e7490] duration-300">
                <span className="text-white">
                    <h1 className="leading-tight font-semibold pb-2">Web Developer Intern, HomeCrowd Sdn Bhd</h1>
                    <p className="text-sm leading-tight font-thin">February 2022 - July 2022</p>
                    <ul className="text-sm list-disc p-2">
                        <li>Worked closely as part of the web development team to test, report and debug the existing system
                        based on Laravel.</li>
                        <li>Modified and introduced significant UI changes and new featured to enhance user experience.</li>
                        <li>Involved in planning and developing new projects based on web3 concept (smart contract)</li>
                        <li>Involved in planning and developing new project based on web3 concept.</li>
                        <li>Assisted in maintaining and updating technical documentation to ensure accuracy and consistency
                        across development phases.</li>
                    </ul>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Experience