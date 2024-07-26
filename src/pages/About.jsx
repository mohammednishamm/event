import React from 'react'
import './About.css'
const About = () => {
  return (


    <div>
        <section class="designer-section black-bg theme-dark position-relative">
    <h2  class="title text-center ">ABOUT US</h2>
    <div class="container">
      <div class="row gx-4 align-items-stretch">
        <div class="col-md-6">
          <div class="designer-box position-relative">
            <div class="team-member team1">
              <img src="https://www.yudiz.com/codepen/interior-design/team-1.jpg" class="img-fluid" alt="Team Member"/>
            </div>
            <div class="team-member team2">
              <img src="https://www.yudiz.com/codepen/interior-design/team-2.jpg" class="img-fluid" alt="Team Member"/>
            </div>
            <div class="team-member team3">
              <img src="https://www.yudiz.com/codepen/interior-design/team-3.jpg" class="img-fluid" alt="Team Member"/>
            </div>
            <div class="box-border"></div>
          </div>
        </div>
    
        <div class="col-md-6 align-self-center">
          <div class="py-4 py-lg-5" id="designDescription">
            <div class="pb-3 paragraph">
            <span className="text-start textinab"  data-aos='fade-up'>
          As we step into the limelight, Artist Bank is committed to pushing the
          boundaries of entertainment. Our journey is fueled by a deep-seated
          passion for the arts, a boundless wellspring of creativity, and an
          unwavering dedication to excellence. <br /><br /> We strive to redefine the
          landscape of entertainment, constantly seeking innovative ways to
          captivate and inspire audiences worldwide.
        </span>
        <span className="text-start textinab mt-3"  data-aos='fade-up'>
        With every project we undertake, our goal is to set new standards of brilliance and artistic achievement, forging a path that others can only aspire to follow.
        </span>
        <span className="text-start textinab mt-3"  data-aos='fade-up'>
          At Artist Bank, we've meticulously crafted a comprehensive suite of
          services designed to elevate every aspect of your
          entertainment endeavors.
        </span>
            </div>
            <a href="javascript:void(0)" class="common-btn">read more <img src="https://www.yudiz.com/codepen/interior-design/arrow-right.svg" class="img-fluid" alt="Arrow"/></a>
          </div>
        </div>
      
      </div>
    
    </div>
  </section>
  </div>
  )
}

export default About