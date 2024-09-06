//import React from 'react'
import rectangle from '../../assets/Rectangle 2041.png'
import testimonial from '../../assets/testimonial (1).png'
import play from '../../assets/play.png'
import TstimonialBox from './TstimonialBox'

const Testimonial = () => {
    return (
        <>
            <section className="lg:px-20 pb-10">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full text-center">
                                <h1 className="title text-secondary">
                                    CLIENT TESTIMONIALS
                                </h1>
                                <h1 className="subtitle">
                                    What our Clients Say
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 py-5 gap-10 items-center">
                        <div className="col-span-2">
                            
                                 <TstimonialBox/>
                           
                        </div>
                        <div className="col-span-1">
                            <div className="w-full relative">
                                <img src={rectangle} alt="image"  className='absolute right-[59px]  z-[-2] top-[-11px]'/>
                                <img src={testimonial} alt='image'/>
                                <img src={play} alt='image'  className='absolute inset-0 m-auto top-[10%] right-[39px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
