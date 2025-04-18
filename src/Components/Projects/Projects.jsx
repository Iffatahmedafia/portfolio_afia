import React, { useRef, useState } from 'react';
import { ProjectCard } from './ProjectCard';

const Projects = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth; // scroll by full view width
      const newPos = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="Projects" className="p-10 md:p-20 text-white">
      <h1 className="text-2xl md:text-4xl font-bold border-b-4 border-[#0e7490] pb-2 inline-block">
        Projects
      </h1>

      {/* Card Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth whitespace-nowrap my-8"
      >
        <div className="flex gap-4">
          {[
            {
              title: "Shop Local",
              main: "React, Django, PostgreSQL",
              link: "https://github.com/Iffatahmedafia/ShopLocal.git",
            },
            {
              title: "Personal Task Manager",
              main: "React, Node.js, MongoDB",
              link: "https://github.com/Iffatahmedafia/PersonalTaskManager.git",
            },
            {
              title: "Hit Calculator Application",
              main: "Python, REST APIs, Airtable",
              link: "https://github.com/attiqRahman/Odds_api",
            },
            {
              title: "Mental Health Website",
              main: "Laravel, HTML5, CSS, Bootstrap, MySQL",
              link: "https://github.com/Iffatahmedafia/MentalHealthWebsite",
            },
            {
              title: "Journey Planner",
              main: "Python, Algorithm, gmplot",
              link: "https://github.com/Iffatahmedafia/JourneyPlanner",
            }
          ].map((project, index) => (
            <div
              key={index}
              className="shrink-0 w-full sm:w-[80%] md:w-[50%] lg:w-[33%]"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => scroll('left')}
          className="bg-[#0e7490] px-4 py-2 rounded text-white hover:bg-[#0891b2]"
        >
          ⬅️ Prev
        </button>
        <button
          onClick={() => scroll('right')}
          className="bg-[#0e7490] px-4 py-2 rounded text-white hover:bg-[#0891b2]"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default Projects;
