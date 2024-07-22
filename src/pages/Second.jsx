import React, { useEffect } from "react";
import a1 from "./images/wedding-planner.jpg";
import AOS from 'aos'
const Second = () => {
    useEffect(()=>{
        AOS.init({duration:1000})
      })
  return (
    <div className="d-flex flex-md-row flex-column mt-5 ms-3 gap-5  ">
      <div className=" conatinerofsecond d-flex flex-column align-items-start ps-3 mt-5 gap-2"  data-aos='fade-up'>
        <span className="fs-5 font-monospace"  data-aos='fade-up'>ARTIST BANK</span>
        <span className="texteventhead"  data-aos='fade-up'>An Event Supporting Company</span>
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
      <img  data-aos='fade-up' className="img-conatiner-ab mt-5" src={a1} alt="" />
    </div>
  );
};

export default Second;
