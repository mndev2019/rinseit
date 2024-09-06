//import React from 'react'

import Actionbox from "./Actionbox"
import Banner from "./Banner"
import Blog from "./Blog"
import Information from "./Information"

import Process from "./Process"
import Services from "./Services"
import Subscription from "./Subscription"
import Testimonial from "./Testimonial"

const Home = () => {
  return (
   <>
    <Banner/>
    <Services/>
    <Actionbox/>
    <Process/>
    <Subscription/>
    <Blog/>
    <Testimonial/>
    <Information/>
   </>
  )
}

export default Home