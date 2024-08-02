import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";


export default function Footer() {
  return (
    <div className=' footer'>
        
        <div className="container pt-3">
            <div className="row">
                <div className="col-sm-4 py-5">
                    <h4 className='text-white fw-bold'>LOCATION</h4>
                    <p className='  text-white '>2215 John Daniel Drive</p>
                    <p className='text-white  '>Clark, MO 65243</p>
                
                </div>
                <div className="col-sm-4 py-5 ">
                    <h4 className='text-white fw-bold'>AROUND THE WEB</h4>
                  <div className='d-flex    justify-content-center mt-3 '>
                  <div className=' border icon-dev border-2 border-white   '>
                        <div> <FaFacebook size={25} className='text-white' /></div>
                    </div>
                    <div className=' border icon-dev border-2 border-white   '>
                        <div> <FaTwitter  size={25} className='text-white' /></div>
                    </div>
                    <div className=' border icon-dev border-2 border-white   '>
                        <div> <FaLinkedinIn  size={25} className='text-white' /></div>
                    </div>
                    <div className=' border icon-dev border-2 border-white   '>
                        <div> <FaGlobe  size={25} className='text-white' /></div>
                    </div>
                  </div>
                
                </div>
                <div className="col-sm-4 py-5">
                    <h4 className='text-white fw-bolder'>ABOUT FREELANCER</h4>
                    <p className='  text-white '>Freelance is a free to use, licensed Bootstrap theme created by</p>
                    <p className='text-white  '>Route</p>
                
                </div>
               
            </div>
        </div>
        <div className='footer-end'>
            <p className=' text-white py-4'>Copyright © Your Website 2021</p>
        </div>
    </div>
  )
}
