//import React from 'react'
import { Header } from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const WebLayout = () => {
  return (
    <>
       <Header/> 
       <main>
        {<Outlet/>}
       </main>
       <Footer/>
    </>
  )
}

export default WebLayout 