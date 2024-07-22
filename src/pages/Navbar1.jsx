import React, { useState } from 'react'
import a1 from '../components/images/artistebankpngss[1].png'

import './Home.css'
import FbIcon from './images/facebook-app-symbol.png'
import InstaIcon from './images/instagram-symbol.png'
import PinterestIcon from './images/pinterest.png'
import MailIcon from './images/envelope.png'
import { Link } from 'react-router-dom'
const Navbar1 = () => {
   
  return (
    <>
  
    <div className=' navside22 position-fixed '>
     <div className='d-flex flex-column  align-items-center justify-content-evenly vh-100 '>
                   <img className='main-icon-111 ' src={a1} alt="" />
                
                   <div className='w-100 d-flex flex-column align-items-center justify-content-center gap-3'>
                    <span className='  font-color11 '>ABOUT</span>
                    <span className='  font-color11'>SERVICES</span>
                    <span className='  font-color11'>GALLERY</span>
                    <span className='  font-color11'>TESTIMONIALS</span>
                    <span className='  font-color11'>CONTACT</span>
                   </div>

                   <div className='d-flex flex-column align-items-center mt-5'>
                    <span className='font-monospace fw-lighter  font-sicew'>+91 8606206747</span>
                    <span className='font-monospace fw-lighter font-sicew'>info@artistevent.com</span>
                    <div className='col-12 mt-3   d-flex justify-content-between align-items-center  socialmedia-icons-div'>
              <img src={FbIcon} alt="" />
              <img src={InstaIcon} alt="" />
              <img src={PinterestIcon} alt="" />
              <img src={MailIcon} alt="" />

            </div>

                   </div>
               </div>
    </div>
   

    </>
  )
}

export default Navbar1