import React from 'react'
import { ProjectCard } from './ProjectCard'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-20 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold border-b-4 border-[#0e7490] pb-2 inline-block">Projects</h1>
        <div className="py-12 px-8 flex flex-wrap gap-5 justify-around">
          <ProjectCard 
          title="Hit Calculator" 
          main="Python, Odds API, Airtable" 
          />
          <ProjectCard 
          title="Mental Health Website" 
          main="Laravel, HTML5, CSS, Bootstrap, MySQL" 
          />
          <ProjectCard 
          title="Journey Planner" 
          main="Python, Algorithm, gmplot" 
          />

        </div>
    </div>
  )
}

export default Projects