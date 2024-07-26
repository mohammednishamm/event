import React from 'react'
import Navbar from '../components/Navbar'
import Navbar1 from './Navbar1'
import MainPage from './MainPage'
import './Home.css'
import Second from './Second'
import Service from './Service'
import Works from './Works'
import Background from './Background'
import Mentor from './Mentor'
import Footer from './Footer'
import { FiMenu } from 'react-icons/fi'
import About from './About'
const Home1 = () => {

  return (
    <div className='d-flex w-100'>
        
        <Navbar1/>
      
        <div className='contentmain'>
         <MainPage/>
         <About/>
         {/* <Second/> */}
         <Service/>
         <div className='backadditional'>
          <Mentor />
         <Background/>
         </div>
         <Works/>
         <Footer/>
        </div>
    </div>
  )
}

export default Home1