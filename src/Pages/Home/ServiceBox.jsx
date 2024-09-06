//import React from 'react'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'
import service4 from '../../assets/service4.png'
import service5 from '../../assets/service5.png'
import service6 from '../../assets/service6.png'
const ServiceBox = () => {
    const arr = [
        {
            image: service1,
            text: " Exterior Services",
        },
        {
            image: service2,
            text: " Interior Services",
        },
        {
            image: service3,
            text: "Ceramic Coating Services",
        },
        {
            image: service4,
            text: "Engine CleaningFleet Washing",
        },
        {
            image: service5,
            text: "Fleet Washing",
        },
        {
            image: service6,
            text: " Wax Polishing",
        },
    ]
    return (
        <>
            {
                arr.map((itm) => (
                    <>
                        <div className="col-span-1 relative group">
                            <div className="w-full h-full overflow-hidden relative transition-transform duration-800 ease-in-out transform group-hover:scale-80">
                                <img
                                    src={itm.image}
                                    alt="image"
                                    className="w-full h-full object-cover transition-transform duration-800 ease-in-out group-hover:scale-80"
                                />

                                {/* Black overlay */}
                                <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-800 ease-in-out group-hover:bg-blue-600"></div>

                                {/* Text with border */}
                                <div className="absolute inset-0 flex flex-col justify-end z-10 p-6">
                                    <h1 className="text-white text-[25px] font-[700] w-max">
                                        {itm.text}
                                    <span className="block w-[42px] border-b-2 border-secondary  mt-2 transition-all duration-800 ease-in-out group-hover:w-full"></span>

                                    </h1>
                                    <p className='text-[12px] font-[400] text-[#F4F4F4] py-2'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                    </p>
                                    <a href='' className='flex items-center text-[10px] font-[400] text-[#F4F4F4] pb-2 group relative'>
                                        <span className=" border-b-2 border-secondary inline-block mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-[20%]"></span>
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>

                ))
            }

        </>
    )
}

export default ServiceBox