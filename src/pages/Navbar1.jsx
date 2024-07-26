import React, { useEffect, useState } from 'react'
import a1 from '../components/images/artistebankpngss[1].png'

import './Home.css'
import FbIcon from './images/facebook-app-symbol.png'
import InstaIcon from './images/instagram-symbol.png'
import PinterestIcon from './images/pinterest.png'
import MailIcon from './images/envelope.png'
import { Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'
import { SiFacebook } from 'react-icons/si'
import { FaFacebookF } from "react-icons/fa";
import { MdClose, MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { CgCross } from 'react-icons/cg'
import AOS from 'aos'
const Navbar1 = () => {
   const [side ,setSide]=useState(false)
   useEffect(()=>{
    AOS.init({duration:1000})
  })

  return (
    <>
    <div  className='sidenavs d-flex   pe-3 ps-3  flex-column  vh-100 justify-content-between pb-3 position-fixed top-0'>
       <BiMenu onClick={()=>setSide(true)}  className='' style={{fontSize:"28px",color:"#DE2A1B"}}/>
       <div className='col-12  gap-5  d-flex d-md-flex d-none flex-column justify-content-between align-items-center '>
             <FaFacebookF style={{fontSize:"28px",color:"#DE2A1B"}}/>
             <FaInstagram  style={{fontSize:"28px",color:"#DE2A1B"}}/>
             <FaPinterest style={{fontSize:"28px",color:"#DE2A1B"}}/>
             <MdOutlineMail style={{fontSize:"28px",color:"#DE2A1B"}}/>
            
       

            </div>
            <span></span>
            <IoCall className='d-md-flex d-none' style={{fontSize:"28px" ,color:"#DE2A1B"}} />
    </div>
    {side && (
    <div   data-aos='fade-right'  className=' navside22 bg-white position-fixed z-3'>
      <div className='w-100 d-flex mt-2 ms-1'>


      <MdClose onClick={()=>setSide(false)} className='fs-3' />
      </div>
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
   )}

    </>
  )
}

export default Navbar1