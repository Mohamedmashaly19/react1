import React from 'react'
import { PiAsteriskSimpleBold } from "react-icons/pi";

export default function About() {
  return (
    <div className=' py-5 bg-success'>
        <div className=" container py-5 mt-5">
            <div className="row">
            <h2 className=' mt-5 pt-5 fs-1 fw-bolder text-white'>ABOUT COMPONENT</h2>
            <div className=' d-flex justify-content-center mb-3'>
                <div className=' bg-white undeLine me-2 mt-3'></div>
                <PiAsteriskSimpleBold size={35} className=' text-white'/>
                <div className=' bg-white undeLine mt-3 ms-2'></div>
            </div>
                <div className="col-lg-6">
                    <p className=' text-white fs-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-lg-6 mb-5 pb-5 ">
                    <p className=' text-white fs-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
