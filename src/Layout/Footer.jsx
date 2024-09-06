//import React from 'react'
import logo from '../assets/logo.png'
import twitterfill from '../assets/filltwitter.png'
import instafill from '../assets/fillInstagram.png'
import facebookfill from '../assets/fillfacebook.png'
import linkdin from '../assets/filllinkedin.png'
import arrow from '../assets/arrow.png'
import phone from '../assets/phone.png'
import filllocation from '../assets/filllocation.png'
import mail from '../assets/mail.png'


const Footer = () => {
  return (
    <>
      <footer className="footer h-[508px] relative lg:px-20 lg:py-10">
        <div className="absolute inset-0 bg-[#424242] bg-opacity-[68%] z-0"></div>
        <div className="container relative mx-auto z-10">
          <div className="grid grid-cols-4 items-start gap-4">
            <div className="col-span-1">
              <div className="w-full">
                <img src={logo} alt="image" />
                <p className='text-[#ABA9A9] text-[16px] font-[400] py-6'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                <p className='text-[#F4F4F4] text-[18px] font-[500]'>
                  We are Available:
                </p>
                <p className='text-[#ABA9A9] text-[16px] font-[400] py-2'>
                  Mon - Sat (9.00am to 6:00pm)
                </p>
                <div className="w-full flex gap-3 pt-3">
                  <img src={twitterfill} alt='image' />
                  <img src={facebookfill} alt='image' />
                  <img src={instafill} alt='image' />
                  <img src={linkdin} alt='image' />
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-1">
              <div className="w-full py-5">
                <h1 className='text-[25px] font-[600] text-[#F4F4F4] inline-block pb-2'>Quick Links
                  <span className='block border-b-2 border-secondary w-[35%] '></span>
                </h1>
              </div>
              <div className="w-full pt-10">
                <ul className='space-y-5'>
                  <li>
                    <a href=''>
                      <div className="flex items-center gap-2">
                        <div className="icon">
                          <img src={arrow} alt='image' />
                        </div>
                        <div className="text">
                          <p className='text-[#ABA9A9] text-[18px] font-[600]'>About Company</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      <div className="flex items-center gap-2">
                        <div className="icon">
                          <img src={arrow} alt='image' />
                        </div>
                        <div className="text">
                          <p className='text-[#ABA9A9] text-[18px] font-[600]'>Our Services</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      <div className="flex items-center gap-2">
                        <div className="icon">
                          <img src={arrow} alt='image' />
                        </div>
                        <div className="text">
                          <p className='text-[#ABA9A9] text-[18px] font-[600]'>Client Testimonial</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      <div className="flex items-center gap-2">
                        <div className="icon">
                          <img src={arrow} alt='image' />
                        </div>
                        <div className="text">
                          <p className='text-[#ABA9A9] text-[18px] font-[600]'>Contact Us</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href=''>
                      <div className="flex items-center gap-2">
                        <div className="icon">
                          <img src={arrow} alt='image' />
                        </div>
                        <div className="text">
                          <p className='text-[#ABA9A9] text-[18px] font-[600]'>Our Technicians</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full py-5">
                <h1 className='text-[25px] font-[600] text-[#F4F4F4]  inline-block pb-2'>Contact Info
                  <span className='block border-b-2 border-secondary w-[35%]  '></span>
                </h1>
              </div>
              <div className="w-full pt-10">
                <h1 className='text-[#F4F4F4] text-[16px] font-[500]'>Phone Number</h1>
                <div className="flex gap-3 py-3">
                  <div className="icon">
                    <img src={phone} alt='image' />
                  </div>
                  <div className="text">
                    <p className='text-[#ABA9A9] text-[16px] font-[400]'>+9862233335</p>
                  </div>
                </div>
                <h1 className='text-[#F4F4F4] text-[16px] font-[500]'>E-Mail Us</h1>
                <div className="flex gap-3 py-3">
                  <div className="icon">
                    <img src={mail} alt='image' />
                  </div>
                  <div className="text">
                    <p className='text-[#ABA9A9] text-[16px] font-[400]'>example@gmail.com</p>
                  </div>
                </div>
                <h1 className='text-[#F4F4F4] text-[16px] font-[500]'>Our Address</h1>
                <div className="flex gap-3 py-3">
                  <div className="icon">
                    <img src={filllocation} alt='image' />
                  </div>
                  <div className="text">
                    <p className='text-[#ABA9A9] text-[16px] font-[400]'>102/B New Market,</p>
                    <p className='text-[#ABA9A9] text-[16px] font-[400]'> Chico City, Sandigo, USA.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer