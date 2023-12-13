import React from 'react'
import {useNavigate} from 'react-router-dom'

import '../App.css'


function ProjectItem({image, name, id}) {
  const Navigate=useNavigate()
  return (
    <div className='projectItem' onClick={()=>{Navigate('/project/' + id)}}>
        <div style={{backgroundImage:`url(${image})`}} className="bgImage"></div>
        <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem