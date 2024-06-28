import React from 'react'
import './Services.css'
import theme from './../../assets/theme_pattern.svg'
import services_data from './../../assets/services_data'
import arrow from './../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='service' className='services'>
      <div className="services-title">
        <h1 className='text-6xl sm:text-md'>My Services</h1>
        <img src={theme} alt="" />
      </div>
      <div className="service-container">
        {services_data.map((service,index)=>{
            return <div key={index} className='services-format'>
               <h3>{service.s_no}</h3>
               <h2>{service.s_name}</h2>
               <p>{service.s_desc}</p>
               <div className="service-readmore">
                <p>Read More</p>
                <img src={arrow} alt="" />
               </div>
            </div>
})}
      </div>
    </div>
  )
}

export default Services
