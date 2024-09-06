//import React from 'react'
import user from '../../assets/user.png'
import mail from '../../assets/email.png'
import infophone from '../../assets/infophone.png'
import infomail from '../../assets/infoemail.png'
import infolocation from '../../assets/infolocation.png'
import map from '../../assets/Maps.png'
import twitterfill from '../../assets/filltwitter.png'
import instafill from '../../assets/fillInstagram.png'
import facebookfill from '../../assets/fillfacebook.png'
import linkdin from '../../assets/filllinkedin.png'
import ellipsefull from '../../assets/ellipsefull.png'
import ellipsehalf from '../../assets/Ellipsehalf.png'

const Information = () => {
    return (
        <>
            <section className="lg:px-40 pb-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full text-center">
                                <h1 className="title text-secondary">
                                    OUR LOCATION
                                </h1>
                                <h1 className="subtitle">
                                    Rinse-it Service and Washing Point
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 py-5 gap-10 items-center">
                        <div className="col-span-1">
                            <div className="w-full bg-primary rounded-[10px] p-10 relative">
                                <img src={ellipsefull} alt='image' className='absolute top-[38px] right-[49px]'/>
                                <img src={ellipsehalf } alt='image' className='absolute right-0 top-[1px]' />
                                <h1 className='text-[36px] font-[700] text-[#FFFFFF] py-2'>Get in Touch</h1>
                                <div className="w-full flex gap-3 py-2">
                                    <div className="icon">
                                        <img src={infophone} alt='image' />
                                    </div>
                                    <div className="text">
                                        <p className='font-[400] text-[#F4F4F4] text-[20px]'>+9862233335</p>
                                    </div>
                                </div>
                                <div className="w-full flex gap-3 py-3">
                                    <div className="icon">
                                        <img src={infomail} alt='image' />
                                    </div>
                                    <div className="text">
                                        <p className='font-[400] text-[#F4F4F4] text-[20px]'>example@gmail.com</p>
                                    </div>
                                </div>
                                <div className="w-full flex gap-3 py-3">
                                    <div className="icon">
                                        <img src={infolocation} alt='image' />
                                    </div>
                                    <div className="text">
                                        <p className='font-[400] text-[#F4F4F4] text-[20px]'>102/B New Market, Chico City, Sandigo, USA.</p>
                                    </div>
                                </div>
                                <div className="w-full py-3 rounded-[10px]">
                                    <img src={map} alt='image' className='w-full' />
                                </div>
                                <div className="w-full py-2 gap-3 flex">
                                    <img src={twitterfill} alt='image' />
                                    <img src={facebookfill} alt='image' />
                                    <img src={instafill} alt='image' />
                                    <img src={linkdin} alt='image' />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <form>
                                    <div className="lg:mb-5 mb-2">
                                        <label htmlFor="name" className="block font-medium mb-1">
                                            Name
                                        </label>
                                        <div className="input-group flex items-center w-full border border-[#8A8A8A] rounded-lg justify-between px-2 py-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                                            <div className="field w-full">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Enter your first name"
                                                    className="mt-1 block w-full text-[20px] font-[400] rounded-md bg-transparent focus:outline-none"
                                                />
                                            </div>
                                            <div className="icon">
                                                <img src={user} alt="image" className="h-[18px]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:mb-5 mb-2">
                                        <label htmlFor="email" className="block font-medium mb-1">
                                            Email
                                        </label>
                                        <div className="input-group flex items-center w-full border border-[#8A8A8A] rounded-lg justify-between px-2 py-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                                            <div className="field w-full">
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Enter your Email"
                                                    className="mt-1 text-[20px] font-[400] block w-full rounded-md  focus:outline-none"
                                                />
                                            </div>
                                            <div className="icon">
                                                <img src={mail} alt="image" className="h-[18px]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:mb-5 mb-2">
                                        <label htmlFor="message" className="block font-medium mb-1">
                                            Message
                                        </label>
                                        <div className="input-group flex items-center w-full border border-[#8A8A8A] rounded-lg justify-between px-2 py-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="5" // Adjust rows as needed
                                                placeholder="Write your message"
                                                className="mt-1 text-[20px] font-[400] block w-full rounded-md focus:outline-none resize-none"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className='lg:mb-3 mb-2 mt-10 text-center'>
                                        <button className='bg-primary text-[#FCFCFC] text-[25px] font-[700] rounded-[10px] px-[100px] py-[14px]'>SEND</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Information