import React, { useEffect } from 'react'
import './Work.css'
import pic1 from './images/all images/42752.jpg'
import pic2 from './images/all images/allef-vinicius-Iv3yJpmOmZc-unsplash.jpg'
import pic3 from './images/all images/jonathan-borba-SM5sKMxoJAs-unsplash.jpg'
import pic4 from './images/all images/jonathan-borba-XDpOvTZhDTg-unsplash.jpg'
import pic5 from './images/all images/jonathan-borba-i2gom1zDv5Y-unsplash.jpg'
import pic6 from './images/all images/jonathan-borba-pqcw351eV_U-unsplash.jpg'
import pic7 from './images/all images/mei-bakker-UgOSM6gye3E-unsplash (1).jpg'
import pic8 from './images/all images/olivia-bauso-30UOqDM5QW0-unsplash.jpg'
import pic9 from './images/all images/samantha-gades-2TdhwS6Y3pU-unsplash (1).jpg'
import AOS from 'aos'

const Works = () => {
    useEffect(()=>{
        AOS.init({duration:1000})
      })
  return (
    <div className='work-work'>
        <span className="fs-5 font-monospace ms-4">OUR WORKS</span>
         <div className='container-fluid p-md-4 p-4 d-flex justify-content-center  portfolio-images-main-div'>

<div className=' gap-2 col-12  portfolio-images-gallery-div '>

    <div className=' col-4 gap-2  image-column'>

        <div className=' portfolio-image-div' >
            <img className=' img-fluid ' data-aos='fade-up' src={pic1} alt="" />
        </div>

        <div className='  portfolio-image-div' >
            <img className=' img-fluid 'data-aos='fade-up' src={pic6} alt="" />
        </div>

        <div className='  portfolio-image-div' >
            <img className=' img-fluid 'data-aos='fade-up' src={pic9} alt="" />
        </div>

        
    </div>


    <div className='col-4 gap-2 image-column'>

        <div className='  portfolio-image-div' >
            <img className=' img-fluid 'data-aos='fade-up' src={pic4} alt="" />
        </div>

        <div className='  portfolio-image-div' >
            <img className=' img-fluid 'data-aos='fade-up' src={pic3} alt="" />
        </div>

        <div className='  portfolio-image-div' >
            <img className=' img-fluid 'data-aos='fade-up' src={pic5} alt="" />
        </div>

    
    </div>


    <div className='col-4 gap-2 image-column'>

        <div className='  portfolio-image-div' >
            <img className=' img-fluid 'data-aos='fade-up' src={pic7} alt="" />
        </div>

        <div className='  portfolio-image-div' >
            <img className=' img-fluid 'data-aos='fade-up' src={pic8} alt="" />
        </div>

        <div className='  portfolio-image-div' >
            <img className=' img-fluid 'data-aos='fade-up' src={pic2} alt="" />
        </div>
       
    </div>


</div>

</div>

</div>
  )
}

export default Works