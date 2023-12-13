import React from 'react'
import {useParams} from 'react-router-dom'
import { ProjectList } from './MAPPING PROJECT/ProjectList'

function ProjectDisplay() {
     const { id } = useParams();
    const project = ProjectList[id]
  return (
  <>
   
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image}/>
        <p>Skills:<b>{project.skills}</b></p>
    </div>
    </>
  )
}

export default ProjectDisplay