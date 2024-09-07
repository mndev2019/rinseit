//import React from 'react'
import exterior from '../../assets/exteriorplan.png'
import reactangle from '../../assets/Rectangle 2041.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
import arrowdark from '../../assets/ArrowRight.png'
import arrowlight from '../../assets/ArrowRight (1).png'

const ExteriorServiceplan = () => {
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
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <>
            <div className="w-full exteriorservice relative">
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    <div key={1}>
                    <div className="flex items-center justify-center">
                            <div className="w-full md:w-2/3 py-[10px] relative">
                                <img src={reactangle} alt='image' className='absolute top-[-1px] right-[-11px] z-[-2]' />
                                <img src={reactangle} alt='image' className='absolute bottom-[-2px] left-[-11px] z-[-2]' />
                                <img src={exterior} className="w-full h-auto" alt="" />
                            </div>
                        </div>
                    </div>
                    <div key={2}>
                        <div className="flex items-center justify-center">
                            <div className="w-full md:w-2/3 py-[10px] relative">
                                <img src={reactangle} alt='image' className='absolute top-[-1px] right-[-11px] z-[-2]' />
                                <img src={reactangle} alt='image' className='absolute bottom-[-2px] left-[-11px] z-[-2]' />
                                <img src={exterior} className="w-full h-auto" alt="" />
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className='flex'>
                    <button className="button previous absolute  bottom-[50%] left-[73px]" onClick={previous}>
                        <img src={arrowdark} alt='image' />
                    </button>
                    <button className="button next absolute  top-[50%] right-[73px]" onClick={next}>
                        <img src={arrowlight} alt='image' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ExteriorServiceplan