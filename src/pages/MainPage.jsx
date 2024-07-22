import React, { useEffect, useState } from 'react'
import photoOne from './images/drew-coffman-llWjwo200fo-unsplash - Copy.db8d46fcb011bc60e041.jpg'
import photoTwo from './images/scott-webb-Wa0tqJ8vvuw-unsplash.jpg'
import './Home.css'
import FbIcon from './images/facebook-app-symbol.png'
import InstaIcon from './images/instagram-symbol.png'
import PinterestIcon from './images/pinterest.png'
import MailIcon from './images/envelope.png'
import { Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
const MainPage = () => {

    const [navModal, setNavModal] = useState(false)
    const [currentImage, setCurrentImage] = useState('');

    const imageUrls = [
        photoOne,
        photoTwo,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
           
            const nextIndex = (currentIndex + 1) % imageUrls.length;
            setCurrentIndex(nextIndex);
        }, 5000); 

        return () => clearInterval(timer);
    }, [currentIndex, imageUrls.length]);

    useEffect(() => {
        setCurrentImage(imageUrls[currentIndex]);
    }, [currentIndex, imageUrls]);
  return (
    <>
    <div>
          <div className='  p-0 d-flex justify-content-center  align-items-center position-relative  about-potos-ad-div z-0'>
         
                    <img className='img1 z-0' src={currentImage} alt="" />
                
                    <span className='d-md-none d-block position-absolute top-0 end-0' ><BiMenu style={{fontSize:"28px"}}/></span>
                    <div className='d-flex flex-column bg-light col-5 align-items-start position-absolute p-4 gap-3  positionsmain'>
                             <span className='fs-5 font-monospace'> TO KNOW US IS TO LOVE US!</span>
                             <span className='text-start fw-lighter'>We design your dream event with classic ideas , extreme themes and loves</span>
                             <button className='quick-button'>QUICK CONTACT</button>
                    </div>
                </div>
    </div>
   
   
   
    </>
  )
}

export default MainPage