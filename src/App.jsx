//import { useState } from 'react'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import AuthLayout from './AuthLayout'
import Register from './AuthLayout/Register'
import Login from './AuthLayout/Login'
import Booking from './Pages/Booking'
import Services from './Pages/Services/Services'


function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Routes that use the WebLayout (with Header and Footer) */}
        <Route path='/' element={<WebLayout />}>
          <Route index element={<Home />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/services' element={<Services />} />

        </Route>

        {/* Routes that use the AuthLayout (no Header and Footer) */}
        <Route element={<AuthLayout />}>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Route>
      </>

    )
  )

  return (
    <>
      <RouterProvider router={ThemeRoute} />
    </>
  )
}

export default App
