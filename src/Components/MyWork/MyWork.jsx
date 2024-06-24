import React from 'react'
import './MyWork.css'
import theme from './../../assets/theme_pattern.svg'
import mywork_data from './../../assets/mywork_data'
import arrow from './../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div className='my-work'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>(
           <img key={index} src={work.w_img } alt="" className='image'/>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  )
}

export default MyWork
