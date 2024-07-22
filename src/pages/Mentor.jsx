import React, { useEffect } from 'react'
import a1 from "./images/min.png";
import { FaArrowRightLong } from 'react-icons/fa6';
import AOS from 'aos'
const Mentor = () => {
    useEffect(()=>{
        AOS.init({duration:1000})
      })
  return (
    <>
      <div className=' col-md-8 col-10  text-center p-md-5 p-2 our-offerings-div'  data-aos='fade-up'>
                        <h1 className='font-monospace'>Our Offerings</h1>
                        <p className='font-monospace'>MUSIC /WEDDING / ENGAGEMENTS / DESTINATIONS / FESTIVAL / SOCIAL</p>

                        <p className='font-monospace'>We provide a diverse range of services, and our passion for travel shines through in our work. We specialize to up event that embraces an organic approach, capturing moments exactly as they unfold, with a genuine and unscripted style. We capture family sessions  with a lifestyle approach, aiming to authentically reflect your family's unique personality and dynamics.</p>

                        <span className='font-monospace'>OUR INVESTMENTS</span>
                        <FaArrowRightLong />
                    </div>
    </>
  )
}

export default Mentor