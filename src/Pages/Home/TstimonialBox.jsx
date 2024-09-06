//import React from 'react'
import testominial from '../../assets/testimonial.png'
import doublequotes from '../../assets/DoubleQuotes.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
import arrowdark from '../../assets/ArrowRight.png'
import arrowlight from '../../assets/ArrowRight (1).png'

const TstimonialBox = () => {
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <>
            <div className="w-full testimonial relative">
                <Slider
                 ref={slider => {
                    sliderRef = slider;
                  }} {...settings}>
                    <div>
                        <div className="w-full">
                            <div className="w-full pt-20">
                                <div className="w-full bg-primary rounded-[12px] text-[20px] font-[500] text-[#FCFCFC] p-[4rem] testimonialbox">
                                    <img src={doublequotes} alt='image' />
                                    <p className='pt-5'>“Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                                </div>
                            </div>
                            <div className="w-full shadow-sm flex items-center gap-3 pt-20">
                                <div className="icon">
                                    <img src={testominial} alt='image' />
                                </div>
                                <div className="text">
                                    <p className='text-[18px] font-[600]'>Cameron Williamson</p>
                                    <p className='text-[16px] font-[400]'>
                                        Founder of <span className='text-primary'> Relik </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full">
                            <div className="w-full pt-20">
                                <div className="w-full bg-primary rounded-[12px] text-[20px] font-[500] text-[#FCFCFC] p-[4rem] testimonialbox">
                                    <img src={doublequotes} alt='image' />
                                    <p className='pt-5'>“Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                                </div>
                            </div>
                            <div className="w-full shadow-sm flex items-center gap-3 pt-20">
                                <div className="icon">
                                    <img src={testominial} alt='image' />
                                </div>
                                <div className="text">
                                    <p className='text-[18px] font-[600]'>Cameron Williamson</p>
                                    <p className='text-[16px] font-[400]'>
                                        Founder of <span className='text-primary'> Relik </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className='flex gap-1 absolute right-[1px] bottom-[20px]'>
                    <button className="button previous" onClick={previous} >
                        <img src={arrowdark} alt='image' />
                    </button>
                    <button className="button  next" onClick={next}>
                        <img src={arrowlight} alt='image' />
                    </button>
                </div>
            </div>

        </>
    )
}

export default TstimonialBox