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
    <Banner title="The shine that lasts" subtitle="FOREVER." search={true} para={true} button=" BOOK NOW"/>
    <Services/>
    <Actionbox/>
    <Process/>
    <Subscription title="OUR SUBSCRIPTION PLAN" subtitle="Choose a Subscription Plan"/>
    <Blog/>
    <Testimonial/>
    <Information/>
   </>
  )
}

export default Home