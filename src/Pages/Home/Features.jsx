//import React from 'react'
 import carwashing from '../../assets/carwashing.png'
import clean from '../../assets/clean.png'
import equipement from '../../assets/equipement.png'
import safety from '../../assets/service.png'
const Features = () => {
    return (
        <>
            <div className=" grid grid-cols-4 gap-10">
                <div className="col-span-1">
                    <div className="h-full w-full bg-white p-2  border-secondary text-center shadow-lg shadow-gray-300  sweep-to-bottom " style={{ borderTopWidth: '5px' }}>
                        <img src={carwashing} alt="image" className='mx-auto py-3' />
                        <h1 className='font-bold text-lg py-2'>Exterior Washing</h1>
                        <p className='text-[#ABA9A9] text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoelit</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className=" h-full w-full bg-white p-2 border-t-2 border-secondary text-center  shadow-lg shadow-gray-300 sweep-to-bottom  " style={{ borderTopWidth: '5px' }}>
                        <img src={clean} alt="image" className='mx-auto py-3' />
                        <h1 className='font-bold text-lg py-2 '>Extensive Clean</h1>
                        <p className='text-[#ABA9A9] text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoelit</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className=" h-full w-full bg-white p-2 border-t-2 border-secondary text-center  shadow-lg shadow-gray-300 sweep-to-bottom " style={{ borderTopWidth: '5px' }}>
                        <img src={equipement} alt="image" className='mx-auto py-3' />
                        <h1 className='font-bold text-lg py-2 '>Exterior Washing</h1>
                        <p className='text-[#ABA9A9] text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoelit</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className=" h-full w-full bg-white p-2 border-t-2 border-secondary text-center  shadow-lg shadow-gray-300 sweep-to-bottom " style={{ borderTopWidth: '5px' }}>
                        <img src={safety} alt="image" className='mx-auto py-3' />
                        <h1 className='font-bold text-lg py-2'>Exterior Washing</h1>
                        <p className='text-[#ABA9A9] text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempoelit</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features