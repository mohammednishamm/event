import React, { useEffect } from 'react'
import './Background.css'
import { FaArrowRightLong } from "react-icons/fa6"; 
import AOS from 'aos'
const Background = () => {
    useEffect(()=>{
        AOS.init({duration:1000})
      })
  return (
    <div className='backgroundndmain ' >
        
                        <h1 className='fs-4  font-monospace text-white'>Are you ready to chat?</h1>
<div className='d-flex justify-content-center gap-3'>
                        <span className='fs-6 text-white'>INQUIRE HERE</span>
                        <FaArrowRightLong  style={{fontSize:"25px",color:"white"}}/>
                        </div>
                        {/* <img src={require('./images/right-arrow.png')} alt="" /> */}
                    </div>
    
  )
}

export default Background