//import React from 'react'
import blog1 from '../../assets/blog1.png'
import bookingicon from '../../assets/bookingimage.png'
import blog2 from '../../assets/blog2.png'

const Blog = () => {
    return (
        <>
            <section className="lg:px-40 py-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full text-center">
                                <h1 className="title text-secondary">
                                    LATEST BLOGS
                                </h1>
                                <h1 className="subtitle">
                                    Our Recent Blog
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 py-5 gap-10">
                        <div className="col-span-1">
                            <div className="w-full">
                                <img src={blog1} alt="image" className='w-full' />
                                <div className="px-7 w-full py-4 sweep2-to-bottom">
                                    <h1 className='text-[#2E3E4E] text-[20px] font-[700]'>
                                        How to modify your car engine properly?
                                    </h1>
                                    <p className='text-[#5B6B7A] text-[18px] font-[400] py-2 border-b border-[#BDBDBD] border-top-white'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                    </p>
                                    <div className="flex gap-5 items-center py-2">
                                        <div className="flex gap-3 px-3 border-l border-[#BDBDBD] border-top-white">
                                            <div className="icon">
                                                <img src={bookingicon} alt='image' />
                                            </div>
                                            <div className="text">
                                                <p className='text-[#5B6B7A] text-[14px] font-[400]'>
                                                    10 March 2024
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <button className='text-primary text-[20px] font-[500]'>
                                                Read More
                                            </button>
                                            <div className="flex-grow border-t-2 border-primary w-[32px] ml-2 border-top-white"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <img src={blog2} alt="image" className='w-full' />
                                <div className="px-7 w-full py-4 sweep2-to-bottom ">
                                    <h1 className='text-[#2E3E4E] text-[20px] font-[700]'>
                                        How to modify your car engine properly?
                                    </h1>
                                    <p className='text-[#5B6B7A] text-[18px] font-[400] py-2 border-b border-[#BDBDBD] border-top-white'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                    </p>
                                    <div className="flex gap-5 items-center py-2">
                                        <div className="flex gap-3 px-3 border-l border-[#BDBDBD] border-top-white">
                                            <div className="icon">
                                                <img src={bookingicon} alt='image' />
                                            </div>
                                            <div className="text">
                                                <p className='text-[#5B6B7A] text-[14px] font-[400]'>
                                                    10 March 2024
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <button className='text-primary text-[20px] font-[500]'>
                                                Read More
                                            </button>
                                            <div className="flex-grow border-t-2 border-primary w-[32px] ml-2 border-top-white"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full text-center">
                                <button className='bg-primary text-white rounded-[10px] text-[20px] font-[700] px-6 py-2'>
                                    VIEW ALL BLOGS
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Blog