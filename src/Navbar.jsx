import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio '


export default function Navbar() {

 
  return (
    <div className='navbarfix  '>
        <nav class="navbar  py-3 px-5 d-flex Start Framework 
 navbar-expand-lg navbar-light bg-dark">
  <Link className="navbar-brand text-decoration-none  ms-5   link-nav text-white h1 fs-1 fw-bolder " to={''} href="#">Start Framework
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse me-5 pe-5 " id="navbarNav">
    <ul class="navbar-nav   w-100 d-flex justify-content-end me-5">
      
      <li class="nav-item">
        <NavLink className="nav-link text-white fw-bolder" to={'About'} >ABOUT</NavLink>
      </li>
      <li class="nav-item">

        <NavLink className="nav-link text-white fw-bolder" to={'Portfolio'} >PORTFOLIO</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link text-white fw-bolder" to={'Contact'}>CONTACT</NavLink>
      </li>
    
    </ul>
  </div>
</nav>


    </div>
  )
}
