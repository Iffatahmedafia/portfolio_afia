import React from 'react';

export const ProjectCard = (props) => {
  return (
    <div className="p-4 md:p-6 mt-6 flex flex-col justify-between h-full min-h-[250px] bg-slate-950 bg-opacity-60 shadow-lg shadow-slate-900  rounded-2xl transform transition-transform hover:scale-105 hover:shadow-cyan-800 duration-300">
      <div className="flex-grow">
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white">
          {props.title}
        </h3>
        <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300 line-clamp-3">
          {props.main}
        </p>
      </div>
      <div className="p-2 md:p-4 flex gap-4">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button className="text-white py-2 px-3 text-sm md:text-md font-semibold rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 hover:scale-105 duration-300">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};
