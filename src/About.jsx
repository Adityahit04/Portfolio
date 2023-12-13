import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function About() {
  return (
    <div className='experience'><VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement className='vertical-timeline-element-education' date='2014-2015' iconStyle={{background:'#3e497a' ,color:'#fff'}} icon={<SchoolIcon/>}><h3 className='vertical-timeline-element-title'>High School ,Agra ,Uttar Pradesh</h3><p>CBSE Board</p></VerticalTimelineElement>
      <VerticalTimelineElement className='vertical-timeline-element-education' date='2016-2017' iconStyle={{background:'#3e497a' ,color:'#fff'}} icon={<SchoolIcon/>}><h3 className='vertical-timeline-element-title'>10+2 ,Agra ,Uttar Pradesh</h3><p>CBSE Board</p></VerticalTimelineElement>
      <VerticalTimelineElement className='vertical-timeline-element-education' date='2018-2022' iconStyle={{background:'#3e497a' ,color:'#fff'}} icon={<SchoolIcon/>}><h3 className='vertical-timeline-element-title'>BTech ,Greater Noida ,Uttar Pradesh</h3><p>AKTU</p></VerticalTimelineElement>
      <VerticalTimelineElement className='vertical-timeline-element-education' date='Aug 2022- Present' iconStyle={{background:'#e9d35b' ,color:'#fff'}} icon={<WorkIcon/>}><h3 className='vertical-timeline-element-title'>Front End Developer at Unimrkt Research,Gurgoan</h3><p>Developed the frontend infrastructure for 3 projects</p></VerticalTimelineElement>
      

      </VerticalTimeline></div>
  )
}

export default About