import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function Layaute() {
  return (
    <div>

        <Navbar></Navbar>
            
            <Outlet></Outlet>

        <Footer></Footer>
    </div>
  )
}
