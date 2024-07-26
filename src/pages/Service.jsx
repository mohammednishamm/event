import React from 'react'
import './Service.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaArrowRightLong } from "react-icons/fa6"; 
import a1 from './images/mic.png'
import a2 from './images/mic1.png'
import a3 from './images/mic3.png'
import a4 from './images/msc.png'
import a5 from './images/rent.png'
import a6 from './images/live.png'

const Service = () => {
    const onAutoplayTimeLeft = (s, time, progress) => {
        // Here you can handle the time left if needed
      };
  return (
<div className='main-conatibner-ser '>
<span className="fs-4 font-monospace ms-4">OUR SERVICES</span>
    
     <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        breakpoints={{
            0: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            },
        }}
      >
        <SwiperSlide>
          
        <div class = "card">
        <img src={a1} alt=""/>
        <div class="card-content">
          <h2>
            Anchors
          </h2>
          <p>
            <FaArrowRightLong />
          </p>
        
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class = "card">
        <img src={a2} alt=""/>
        <div class="card-content">
          <h2>
           Pr.Celebrity Management
          </h2>
          <p>
          <FaArrowRightLong className='fs-4' />
          </p>
        
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide><div class = "card">
        <img src={a6} alt=""/>
        <div class="card-content">
          <h2>
            Live Concert
          </h2>
          <p>
          <FaArrowRightLong className='fs-4'/>
          </p>
        
        </div>
      </div></SwiperSlide>
        <SwiperSlide>
        <div class = "card">
        <img src={a3} alt=""/>
        <div class="card-content">
          <h2>
            Artist Management
          </h2>
          <p>
          <FaArrowRightLong className='fs-4'/>
          </p>
        
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide><div class = "card">
        <img src={a4} alt=""/>
        <div class="card-content">
          <h2>
           Music Band
          </h2>
          <p>
          <FaArrowRightLong className='fs-4'/>
          </p>
        
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div class = "card">
        <img src={a5} alt=""/>
        <div class="card-content">
          <h2>
            Rentals
          </h2>
          <p>
          <FaArrowRightLong className='fs-4'/>
          </p>
        
        </div>
      </div></SwiperSlide>
        
      </Swiper>
    

    </div>
  )
}

export default Service