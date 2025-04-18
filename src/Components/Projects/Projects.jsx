import React from 'react'
import { ProjectCard } from './ProjectCard'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-20 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold border-b-4 border-[#0e7490] pb-2 inline-block">Projects</h1>
        <div className="py-12 px-8 flex flex-wrap gap-5 justify-around">
        <ProjectCard 
          title = "Shop Local" 
          main = "React, Django, PostgreSQL" 
          link = "https://github.com/Iffatahmedafia/ShopLocal.git"
          />
          <ProjectCard 
          title = "Personal Task Manager" 
          main = "React, Node.js, MongoDB" 
          link = "https://github.com/Iffatahmedafia/PersonalTaskManager.git"
          />
          <ProjectCard 
          title = "Hit Calculator Application" 
          main = "Python, REST APIs, Airtable" 
          link = "https://github.com/attiqRahman/Odds_api"
          />
          <ProjectCard 
          title="Mental Health Website" 
          main="Laravel, HTML5, CSS, Bootstrap, MySQL"
          link = "https://github.com/Iffatahmedafia/MentalHealthWebsite"
          />
          <ProjectCard 
          title="Journey Planner" 
          main="Python, Algorithm, gmplot"
          link = "https://github.com/Iffatahmedafia/JourneyPlanner"
          />

        </div>
    </div>
  )
}

export default Projects