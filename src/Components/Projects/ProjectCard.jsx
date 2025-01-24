import React from 'react'

export const ProjectCard = (props) => {
  return (
    // <div className="p-4 md:p-6 flex flex-col w-96 bg-slate-950 bg-opacity-45 shadow-xl shadow-slate-900 rounded-2xl">
    //     <img className="p-4" alt="" />
    //     <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
    //         {props.title}
    //     </h3>
    //     <p className="px-4 text-sm md:text-md leading-tight py-2">{props.main}</p>
    //     <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
    //         <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
    //         duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#0e7490]">
    //          Source Code
    //         </button>
    //         {/* <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
    //         duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#0e7490]">
    //          Demo
    //         </button> */}
    //     </div>
    // </div>
    <div className="p-4 md:p-6 flex flex-col w-96 bg-slate-950 bg-opacity-60 shadow-2xl shadow-cyan-900 rounded-2xl transform transition-transform hover:scale-105 hover:shadow-cyan-800 duration-300">
        <img className="p-4" alt="" />
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white">
          {props.title}
        </h3>
        <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">
          {props.main}
        </p>
        <div className="mt-4 p-2 md:p-4 flex gap-4">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 font-semibold rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 hover:scale-105 duration-300">
            Source Code
          </button>
        </a>
          {/* Uncomment if needed */}
          {/* <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 font-semibold rounded-3xl bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 hover:scale-105 duration-300">
            Demo
          </button> */}
        </div>
  </div>
  
  )
}
