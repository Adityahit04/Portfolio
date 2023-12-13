import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './App.css'

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, My Name is  Aditya</h2><br/><br/>
            <div className='prompt'><p>I'm Front End Developer and Freelancer</p>
            <LinkedInIcon/>
            <GitHubIcon/>
            <EmailIcon/></div>
        </div>
        <div className='skills'><h1>Skills</h1>
        <ol className='list'>
            <li className='items'><h2>Front end</h2><ul><li><span>Reactjs,Redux,JavaScript,Html,<br/>Tailwind css,Material UI,Bootstrap</span></li></ul></li>
            <li className='items'><h2>Back end</h2><span>Node</span><br/><span>ExpressJS</span><br/><span>Mongo DB</span><br/><span>Mern Application</span></li>
            </ol></div>

    </div>
  )
}

export default Home