import React from 'react'
import { PiAsteriskSimpleBold } from "react-icons/pi";

export default function Contact() {
  return (
    <div className=' mt-5'>
        
        <div className="container">
            <h2 className=' fw-bolder'>CONTACT SECTION</h2>
            <div className=' d-flex justify-content-center'>
                <div className=' undeLine me-2 mt-3 '></div>
                <PiAsteriskSimpleBold size={30}/>
                <div className='undeLine mt-3 ms-2'></div>
            </div>
            <div className=' pt-5 '>
                <input className=' form-control w-50 mx-auto border-0 border-bottom mt-5' placeholder='User Name' type="text" />
                <input className=' form-control w-50 mx-auto border-0 border-bottom mt-5' placeholder='User Age' type="text" />
                <input className=' form-control w-50 mx-auto border-0 border-bottom mt-5' placeholder='User Email' type="text" />
                <input className=' form-control w-50 mx-auto border-0 border-bottom mt-5' placeholder='User Password' type="text" />
                <button className='  btn btn-success   my-4'>send Massege</button>
            </div>

        </div>
    </div>
  )
}
