//import React from 'react'
//import cardimage from '../../assets/CardBackground.png'
import graytik from '../../assets/tickgray.png'
import bluetik from '../../assets/tickblue.png'
import greentik from '../../assets/tickgreen.png'
import yellowtik from '../../assets/tickyellow.png'


const Subscription = () => {
    return (
        <>
            <section className="bg-[#121212] h-[648px] subscription lg:px-[15rem]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full text-center py-7">
                                <h1 className="title text-secondary">
                                    OUR SUBSCRIPTION PLAN
                                </h1>
                                <h1 className="subtitle text-white">
                                    Choose a Subscription Plan
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-20">
                        <div className="col-span-1">
                            <div className="w-full bg-[#262626] rounded-[24px] py-10 px-5">
                                

                                <div className="w-full">
                                    <h1 className="text-[16px] font-[400] text-white playfair">
                                        INR39<span className="text-[#A5ADBB] text-[12px] font-[400]"> / month</span>
                                    </h1>
                                    <p className="text-[#F3B10E] text-[23px] font-[900] pb-5 border-b border-[#EBECED]" >Weekly</p>
                                </div>
                                <div className="w-full px-4 py-3">
                                    <div className="w-full flex items-center gap-3 py-4">
                                        <div className="icon">
                                            <img src={yellowtik} alt='image' />
                                        </div>
                                        <div className="text">
                                            <p className='text-[#6E798C] font-[400] text-[12px]'>
                                                Lorem ipsum dolor sit amet
                                            </p>
                                        </div>

                                    </div>
                                    <div className="w-full flex items-center gap-3 py-4">
                                        <div className="icon">
                                            <img src={graytik} alt='image' />
                                        </div>
                                        <div className="text">
                                            <p className='text-[#6E798C] font-[400] text-[12px]'>
                                                Lorem ipsum dolor sit amet
                                            </p>
                                        </div>

                                    </div>
                                    <div className="w-full flex items-center gap-3 py-4">
                                        <div className="icon">
                                            <img src={graytik} alt='image' />
                                        </div>
                                        <div className="text">
                                            <p className='text-[#6E798C] font-[400] text-[12px]'>
                                                Lorem ipsum dolor sit amet
                                            </p>
                                        </div>

                                    </div>
                                    <div className="w-full flex items-center gap-3 py-4">
                                        <div className="icon">
                                            <img src={yellowtik} alt='image' />
                                        </div>
                                        <div className="text">
                                            <p className='text-[#6E798C] font-[400] text-[12px]'>
                                                Lorem ipsum dolor sit amet
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <button className='border border-[#EBECED] text-[#798289] rounded-[10px] w-full py-2 text-[12px] font-[400]'>Select Plan</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full bg-[#272121] rounded-[24px] py-10 px-5">
                                <div className="w-full">
                                    <h1 className="text-[16px] font-[400] text-white playfair">
                                        INR39<span className="text-[#A5ADBB] text-[12px] font-[400]"> / month</span>
                                    </h1>
                                    <p className="text-[#1DABF2] text-[23px] font-[900] pb-5 border-b border-[#EBECED]" >Weekly</p>
                                </div>
                                <div className="w-full px-4 py-3">
                                    <div className="w-full flex items-center gap-3 py-4">
                                        <div className="icon">
                                            <img src={bluetik} alt='image' />
                                        </div>
                                        <div className="text">
                                            <p className='text-[#6E798C] font-[400] text-[12px]'>
                                                Lorem ipsum dolor sit amet
                                            </p>
                                        </div>

                                    </div>
                                    <div className="w-full flex items-center gap-3 py-4">
                                        <div className="icon">
                                            <img src={bluetik} alt='image' />
                                        </div>
                                        <div className="text">
                                            <p className='text-[#6E798C] font-[400] text-[12px]'>
                                                Lorem ipsum dolor sit amet
                                            </p>
                                        </div>

                                    </div>
                                    <div className="w-full flex items-center gap-3 py-4">
                                        <div className="icon">
                                            <img src={bluetik} alt='image' />
                                        </div>
                                        <div className="text">
                                            <p className='text-[#6E798C] font-[400] text-[12px]'>
                                                Lorem ipsum dolor sit amet
                                            </p>
                                        </div>

                                    </div>
                                    <div className="w-full flex items-center gap-3 py-4">
                                        <div className="icon">
                                            <img src={graytik} alt='image' />
                                        </div>
                                        <div className="text">
                                            <p className='text-[#6E798C] font-[400] text-[12px]'>
                                                Lorem ipsum dolor sit amet
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <button className='border border-[#EBECED] text-[#798289] rounded-[10px] w-full py-2 text-[12px] font-[400]'>Select Plan</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full bg-[#402c2e] rounded-[24px] py-10 px-5">
                                <div className="w-full">
                                    <h1 className="text-[16px] font-[400] text-white playfair">
                                        INR39<span className="text-[#A5ADBB] text-[12px] font-[400]"> / month</span>
                                    </h1>
                                    <p className="text-[#46D68C] text-[23px] font-[900] pb-5 border-b border-[#EBECED]" >Weekly</p>
                                </div>
                                <div className="w-full px-4 py-3">
                                    <div className="w-full flex items-center gap-3 py-4">
                                        <div className="icon">
                                            <img src={greentik} alt='image' />
                                        </div>
                                        <div className="text">
                                            <p className='text-[#6E798C] font-[400] text-[12px]'>
                                                Lorem ipsum dolor sit amet
                                            </p>
                                        </div>

                                    </div>
                                    <div className="w-full flex items-center gap-3 py-4">
                                        <div className="icon">
                                            <img src={graytik} alt='image' />
                                        </div>
                                        <div className="text">
                                            <p className='text-[#6E798C] font-[400] text-[12px]'>
                                                Lorem ipsum dolor sit amet
                                            </p>
                                        </div>

                                    </div>
                                    <div className="w-full flex items-center gap-3 py-4">
                                        <div className="icon">
                                            <img src={greentik} alt='image' />
                                        </div>
                                        <div className="text">
                                            <p className='text-[#6E798C] font-[400] text-[12px]'>
                                                Lorem ipsum dolor sit amet
                                            </p>
                                        </div>

                                    </div>
                                    <div className="w-full flex items-center gap-3 py-4">
                                        <div className="icon">
                                            <img src={greentik} alt='image' />
                                        </div>
                                        <div className="text">
                                            <p className='text-[#6E798C] font-[400] text-[12px]'>
                                                Lorem ipsum dolor sit amet
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <button className='bg-[#46D68C]  text-white font-[700] rounded-[10px] text-[12px] w-full py-2'>Select Plan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Subscription