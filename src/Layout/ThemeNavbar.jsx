//import React from 'react'
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import cart from '../assets/cart.png'

const ThemeNavbar = () => {
  const navlist = (
    <>
      <ul className='flex lg:flex-row flex-col list-none gap-8 font-semibold items-center'>
        <li className='hover:text-secondary'>
          <a href="/">
            HOME
          </a>
        </li>
        <li className='hover:text-secondary'>
          <a href="/booking">
            BOOKING
          </a>
        </li>
        <li className='hover:text-secondary'>
          <a href="">
            PRICING
          </a>
        </li>
        <li className='hover:text-secondary'>
          <a href="">
            BLOGS
          </a>
        </li>
        <li className='hover:text-secondary'>
          <a href="">
            ABOUT US
          </a>
        </li>
        <li className='hover:text-secondary'>
          <a href="">
            SERVICES
          </a>
        </li>
        <li className='hover:text-secondary'>
          <a href="">
            CONTACT
          </a>
        </li>
        <li className='hover:text-secondary'>
          <a href="">
            <img src={search} alt='image' />
          </a>
        </li>
        <li className='hover:text-secondary'>
          <a href="">
            <img src={cart} alt='image' />
          </a>
        </li>
        <li className='hover:text-secondary'>
          <a href='' className='bg-primary rounded-md text-white text-sm py-2 px-6'>
            JOIN US
          </a>
        </li>
        <li className='hover:text-secondary'>
          <a href='/register' className='bg-primary rounded-md text-white text-sm py-2 px-6'>
            REGISTER
          </a>
        </li>
        <li className='hover:text-secondary'>
          <a href='/login' className='bg-primary rounded-md text-white text-sm py-2 px-6'>
            LOG IN
          </a>
        </li>
      </ul>
    </>
  )
  return (
    <>
      <section className='py-2 px-10'>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <a href=''>
              <img src={logo} alt='image' className='h-[70px]' />
            </a>
            <div className="lg:inline-block lg:ms-auto hidden ">
              {navlist}
            </div>
           
          </div>
        </div>
      </section>
    </>
  )
}

export default ThemeNavbar