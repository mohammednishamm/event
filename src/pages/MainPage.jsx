import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import photoOne from './images/drew-coffman-llWjwo200fo-unsplash - Copy.db8d46fcb011bc60e041.jpg';
import photoTwo from './images/scott-webb-Wa0tqJ8vvuw-unsplash.jpg';
import './Home.css';
import { BiMenu } from 'react-icons/bi';

const MainPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentContentIndex, setCurrentContentIndex] = useState(0);
    const [isContentVisible, setContentVisible] = useState(true); // Start with content visible

    const slides = [
        {
            image: photoOne,
            title: "ARTIST BANK",
            subtitle: "An Event Supporting Company",
        },
        {
            image: photoTwo,
            title: "CREATIVE SPACE",
            subtitle: "Inspiring Your Imagination",
        }
    ];

    // Handle image and content change with delays
    useEffect(() => {
        const timer = setInterval(() => {
            const nextIndex = (currentImageIndex + 1) % slides.length;
            setCurrentImageIndex(nextIndex);
            setContentVisible(false); // Hide content before changing

            setTimeout(() => {
                setCurrentContentIndex(nextIndex);
                setContentVisible(true); // Show new content after delay
            }, 1000); // 1 second delay for content
        }, 5000);

        return () => clearInterval(timer);
    }, [currentImageIndex]);

    // Sync the content index with the initial image index
    useEffect(() => {
        setCurrentContentIndex(currentImageIndex);
    }, [currentImageIndex]);

    const createAnimatedText = (text, key) => {
        return text.split('').map((char, index) => (
            <span key={`${key}-${index}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    const currentSlide = slides[currentContentIndex];

    return (
        <div>
            <div className='p-0 d-flex justify-content-center align-items-center position-relative about-potos-ad-div z-0'>
                <img className='img1 z-0' src={slides[currentImageIndex].image} alt="" />
                <span className='d-md-none d-block position-absolute top-0 end-0'>
                    {/* <BiMenu style={{ fontSize: "28px" }} /> */}
                </span>
                <div className='d-flex flex-column bg-light col-5 align-items-center justify-content-center position-absolute p-4 gap-3 positionsmain'>
                    <div className='text-center ms-5'>
                        <TransitionGroup>
                            {isContentVisible && (
                                <>
                                    <CSSTransition
                                        key={currentSlide.title}
                                        timeout={500}
                                        classNames="fade"
                                    >
                                        <h2 className='fontart font-monospace text-white artist-bank'>
                                            {createAnimatedText(currentSlide.title, currentSlide.title)}
                                        </h2>
                                    </CSSTransition>
                                    <CSSTransition
                                        key={currentSlide.subtitle}
                                        timeout={500}
                                        classNames="fade"
                                    >
                                        <div className="nisaaa">
                                            <span className='fontart1 text-white font-monospace'>
                                                {createAnimatedText(currentSlide.subtitle, currentSlide.subtitle)}
                                            </span>
                                        </div>
                                    </CSSTransition>
                                </>
                            )}
                        </TransitionGroup>

                        <div className='d-flex justify-content-center align-items-center gap-2 margintopabout'>
                            <button className='fontaboutnew'>ABOUT US</button>
                            <button className='fontaboutnew1'>OUR SERVICES</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
}

export default MainPage;
