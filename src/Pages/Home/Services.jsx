//import React from 'react'
import rectangle from '../../assets/Rectangle 2041.png'
import serviceimage from '../../assets/serviceimg.png'
import ServiceBox from './ServiceBox'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';
import arrowdark from '../../assets/ArrowRight.png'
import arrowlight from '../../assets/ArrowRight (1).png'

const Services = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <>
            <section className='lg:px-20 lg:py-10'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full text-center">
                                <h1 className="title text-secondary">
                                    OUR SERVICES
                                </h1>
                                <h1 className="subtitle">
                                    Quality Washing Services
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-x-20 gap-y-10 py-5">
                        <ServiceBox />
                    </div>
                </div>
            </section>
            <section className='lg:px-20 lg:py-10 cleanwash'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="col-span-1">
                            <div className="w-full">
                                <h1 className="title text-secondary">
                                    CLEAN & WASH
                                </h1>
                            <div className="relative">
                            <Slider
                                    ref={slider => {
                                        sliderRef = slider;
                                    }} {...settings}>
                                    <div>
                                        <h1 className="text-[50px] font-[900] leading-[56px]">
                                            Dry Cleaning Any Dirt Inside The Car
                                        </h1>
                                        <p className='text-[18px] font-[400] text-[#121212] pt-5 pb-3'>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus

                                        </p>
                                        <p className='text-[18px] font-[400] text-[#121212] pb-5'>
                                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                        </p>
                                        <button className='rounded-[10px] border border-primary text-[18px] font-[700] text-primary px-5 py-2'>
                                            View More
                                        </button>
                                    </div>
                                    <div>
                                        <h1 className="text-[50px] font-[900] leading-[56px]">
                                            Feet Cleaning
                                        </h1>
                                        <p className='text-[18px] font-[400] text-[#121212] pt-5 pb-3'>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus

                                        </p>
                                        <p className='text-[18px] font-[400] text-[#121212] pb-5'>
                                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                        </p>
                                        <button className='rounded-[10px] border border-primary text-[18px] font-[700] text-primary px-5 py-2'>
                                            View More
                                        </button>
                                    </div>

                                </Slider>
                                <div className='flex absolute right-1 gap-1 bottom-1'>
                                    <button className="button previous" onClick={previous}>
                                        <img src={arrowdark} alt='image'/> 
                                    </button>
                                    <button className="button next" onClick={next}>
                                        <img src={arrowlight} alt='image'/>
                                    </button>
                                </div>
                            </div>

                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full relative">
                                <img src={rectangle} alt='image' className='absolute right-[-9px] z-[-2] top-[-11px]' />
                                <img src={serviceimage} alt='image' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services