import React from 'react'
import ProjectItem from './Components/ProjectItem'

import { ProjectList } from './MAPPING PROJECT/ProjectList'

import './App.css'

function Project() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
    <div className='projectList'>
      {ProjectList.map((project, idx)=>{
       return <ProjectItem key={idx} id={idx} name={project.name} image={project.image} />})}
    
      </div></div>
  )
}

export default Project

















