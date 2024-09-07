/* eslint-disable react/prop-types */
//import React from 'react'
import filltwitter from '../../assets/filltwitter.png'
import fillfb from '../../assets/fillfacebook.png'
import fillinsta from '../../assets/fillInstagram.png'
import filllinkdin from '../../assets/filllinkedin.png'
import Features from './Features'
import location from '../../assets/location.png'
import arrow from '../../assets/dropdownarrow.png'
import service from '../../assets/servicetype.png'
import calender from '../../assets/calendar.png'
import { useLocation } from 'react-router-dom'


const Banner = (props) => {
  const location = useLocation();

  const home = location.pathname == '/'
  return (
    <>
      <section className={` ${home ? "banner w-full h-screen relative flex items-center lg:px-20" : "banner w-full h-[80vh] relative items-center flex lg:px-20 "}`}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 h-full items-center">
            <div className="col-span-1 flex flex-col justify-center items-start space-y-5">
              <h1 className={`${home ? "text-white text-[80px] playfair" : "text-white text-[80px] playfair leading-[92px]"}`}>
                {props?.title} <span className="text-secondary font-[900]">{props?.subtitle}</span>
              </h1>
              {props.para &&
                <p className="text-white text-[20px] font-[400] pb-7">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                </p>
              }
              <button className='bg-primary rounded-md text-white text-sm py-3 px-10'>
               {props.button}
              </button>
              {props.search && <div className="banner_box bg-white rounded-[10px] px-1 py-2 w-full flex items-center">
                <div className="banner_form w-full">
                  <div className="grid grid-cols-3">
                    <div className="col-span-1">
                      <div className="w-full flex gap-2 items-center border-r border-[#8A8A8A] px-3">
                        <img src={location} alt='image' />
                        <p className='text-[15px] font-[500]'>Location</p>
                        <img src={arrow} alt='image' />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="w-full flex gap-2 items-center border-r border-[#8A8A8A] px-3">
                        <img src={service} alt='image' />
                        <p className='text-[15px] font-[500]'>Service Type</p>
                        <img src={arrow} alt='image' />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="w-full flex gap-2 items-center border-r border-[#8A8A8A] px-3">
                        <img src={calender} alt='image' />
                        <p className='text-[15px] font-[500]'>Choose Date</p>
                        <img src={arrow} alt='image' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button_box px-3">
                  <button className='bg-primary text-white font-[700] text-[16px] px-9 py-2 rounded-[8px]'>
                    Search
                  </button>
                </div>


              </div>}

            </div>
            <div className="col-span-1">
              <div className="w-full flex flex-col items-end space-y-4 ">
                <img src={filltwitter} alt="image" />
                <img src={fillfb} alt="image" />
                <img src={fillinsta} alt="image" />
                <img src={filllinkdin} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='px-40 -mt-7 relative z-20'>
        <div className="container mx-auto">
          <Features />
        </div>
      </section>
    </>
  )
}

export default Banner
