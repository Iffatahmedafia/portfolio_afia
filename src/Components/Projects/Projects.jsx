import React from 'react'
import { ProjectCard } from './ProjectCard'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
        <div className="py-12 px-8 flex flex-wrap gap-5 justify-around">
          <ProjectCard 
          title="Mental Health Website" 
          main="this is a blogging website" 
          />
          <ProjectCard 
          title="Laravel Website" 
          main="this is a blogging website" 
          />
          <ProjectCard 
          title="Blogging Website" 
          main="this is a blogging website" 
          />

        </div>
    </div>
  )
}

export default Projects