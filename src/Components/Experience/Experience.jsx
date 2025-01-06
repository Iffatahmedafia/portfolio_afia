import React from 'react';
import {FaCss3, FaFigma, FaHtml5, FaJs} from "react-icons/fa";


const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
        <div className="flex flex-wrap py-12 px-8 items-center justify-around">
            <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-3 rounded-lg p-8 items-center">
                <span className="text-white">
                    <h1 className="leading-tight font-semibold pb-2"> Junior RPA Developer, DHL APSSC</h1>
                    <p className="text-sm leading-tight font-thin">September 2022 - October 2023</p>
                    <ul className="text-sm list-disc p-2">
                        <li>Designing and developing automation projects for different business units using UiPath.</li>
                        <li>PDD analysis, SDD and Process Map creation for new automation projects.</li>
                        <li>Running TAT, UAT and Country deployments for RPA projects.</li>
                        <li>Monitoring, supporting tickets and troubleshooting issues for existing solutions.</li>
                        <li>Building Power BI, SSRS report for data analysis and visualization.</li>
                    </ul>
                </span>
            </div>
            <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-3 rounded-lg p-8 items-center">
                <span className="text-white">
                    <h1 className="leading-tight font-semibold pb-2">Web Developer Intern, HomeCrowd Sdn Bhd</h1>
                    <p className="text-sm leading-tight font-thin">February 2022 - July 2022</p>
                    <ul className="text-sm list-disc p-2">
                        <li>Test and troubleshoot bugs on  the existing system based on Laravel</li>
                        <li>Modified and introduced some UI changes to enhance user experience.</li>
                        <li>Proposed and implemented new features for the existing system.</li>
                        <li>Involved in planning and developing new project based on web3 concept.</li>
                        <li>Assisted in updating technical Documents.</li>
                    </ul>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Experience