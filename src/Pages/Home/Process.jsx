//import React from 'react'
import process1 from '../../assets/process1.png'
import process2 from '../../assets/procecc2.png'
import process3 from '../../assets/process3.png'

const Process = () => {
    return (
        <>
            <section className="lg:px-20 py-10">
                <div className="container mx-auto ">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full text-center">
                                <h1 className="title text-secondary">
                                    WORK PROCESS
                                </h1>
                                <h1 className="subtitle">
                                    How it Works
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-7 py-5">
                        <div className="col-span-1">
                            <div className="w-full h-full">
                                <img src={process1} alt='image' className=' w-full' />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full bg-primary text-white rounded-[30px] p-[30px] text-center h-full flex flex-col justify-center items-center">
                                <h1 className='text-[28px] font-bold pb-5'>Choose Your Location</h1>
                                <p className='text-[18px] font-[500]'>Tell us your location, and our eco-friendly car care team will come to you, ensuring a convenient and sustainable experience</p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full h-full">
                                <img src={process2} alt='image' className=' w-full' />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full bg-primary text-white rounded-[30px] p-[30px] text-center h-full flex flex-col justify-center items-center">
                                <h1 className='text-[28px] font-bold pb-5'>Select Your Service</h1>
                                <p className='text-[18px] font-[500]'>Choose from our range of eco-friendly services, each designed to leave your car gleaming while minimizing environmental impact</p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full h-full">
                                <img src={process3} alt='image' className='w-full' />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full bg-primary text-white rounded-[30px] p-[30px] text-center h-full flex flex-col justify-center items-center">
                                <h1 className='text-[28px] font-bold pb-5'>Book and Relax</h1>
                                <p className='text-[18px] font-[500] '>Schedule your service through our user-friendly app, then sit back and relax. We will handle the rest, providing a top-notch, environmentally conscious car wash at your convenience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Process