import React from 'react'
import a1 from '../components/images/artistebankpngss[1].png'
import FbIcon from './images/facebook-app-symbol.png'
import InstaIcon from './images/instagram-symbol.png'
import PinterestIcon from './images/pinterest.png'
import MailIcon from './images/envelope.png'
import { BsFacebook } from 'react-icons/bs';
import { CgFacebook } from 'react-icons/cg'
import { CgInstagram } from 'react-icons/cg'
import { CgMail } from 'react-icons/cg'
import { BsWhatsapp } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='d-flex justify-content-evenly  footbackcolor gap-md-0 gap-4'>
        <div className='w-md-25  d-flex flex-column  align-items-center'>
        <img className='main-icon-111 ' src={a1} alt="" />
        <div className='col-md-12 col-12 mt-3   d-flex justify-content-between align-items-center  socialmedia-icons-div'>
              <CgFacebook style={{color:"white",fontSize:"23px"}} />
              <CgInstagram style={{color:"white",fontSize:"20px"}} />
              <CgMail style={{color:"white",fontSize:"24px"}} />
              <BsWhatsapp style={{color:"white",fontSize:"20px"}} />
             

            </div>
        </div>
        <div>
<div className='d-flex flex-column align-items-start '>
    <span className='footclass'>RING</span>
    <span className='footclass1'>+91 8606206747</span>
</div>
<div className='d-flex flex-column align-items-start mt-3'>
    <span className='footclass'>WRITE</span>
    <span className='footclass1'>info@artistbank.com</span>
</div>
<div className='d-flex flex-column align-items-start mt-3'>
    <span className='footclass'>    MAIL</span>
    <span className='footclass1'>artistbankglobal@gmail.com</span>
</div>
        </div>
        <div className='d-flex flex-column align-items-start '>
    <span className='footclass'>ADDRESS</span>
    <span className='footclass1 text-start'>Artistbank,Kochi <br /> kerala ,India, PIN 676503</span>
</div>
    
    </div>
  )
}

export default Footer