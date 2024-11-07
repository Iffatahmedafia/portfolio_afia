import React from 'react';
import {FaCss3, FaFigma, FaHtml5, FaJs} from "react-icons/fa";


const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
        <div className="flex flex-wrap py-12 px-8 items-center justify-around">
            <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-3 rounded-lg p-8 items-center">
                <span className="text-white">
                    <h1 className="leading-tight">RPA Developer, DHL</h1>
                    <p className="text-sm leading-tight font-thin">September 2022 - October 2023</p>
                    <ul className="text-sm p-2">
                        <li>Lorem ipsum dolor sit amet, consectetur,Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                    </ul>
                </span>
            </div>
            <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-3 rounded-lg p-8 items-center">
                <span className="text-white">
                    <h1 className="leading-tight">RPA Developer, DHL</h1>
                    <p className="text-sm leading-tight font-thin">September 2022 - October 2023</p>
                    <ul className="text-sm p-2">
                        <li>Lorem ipsum dolor sit amet, consectetur,Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                    </ul>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Experience