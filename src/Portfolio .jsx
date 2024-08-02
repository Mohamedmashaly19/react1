import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { PiAsteriskSimpleBold } from "react-icons/pi";

export default function Portfolio () {
let showDiv= document.getElementById('click-div')

function display(){
  // document.getElementById("click-div").classList.add('opacity: 1');
  // showDiv.addClassList('opacity: 1;')
  // showDiv.setState({'opacity: 0': false,'class': 'opacity: 1'})
  console.log(showDiv);
}

  return (
    <div className=''>
        <div className=" container pt-5">
         <div className="row">
            <h2 className=' fw-bolder'>PORTFOLIO COMPONENT</h2>
            <div className=' d-flex justify-content-center'>
                <div className='undeLine me-2 mt-3'></div>
                <PiAsteriskSimpleBold size={35}/>
                <div className='undeLine mt-3 ms-2'></div>
            </div>

        <div onClick={()=>{display()}} className=" col-lg-4 my-4  col-md-6">    
       <div className="img-hover position-relative overflow-hidden">
        <img className='img-hover rounded-4 w-100' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
       <div className='layer rounded-4 d-flex justify-content-center align-items-center '>
       <AiOutlinePlus size={100} className=' text-white'/>
       </div>
       </div>

       {/* <div id='click-div' className='  w-100 h-100  d-flex justify-content-center align-items-center '>
        <div className=' img-div'>

       <img className='img-hover rounded-4 w-100' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
        </div>

       </div> */}

        </div>
        <div onClick={()=>{display()}}  className=" col-lg-4 my-4  col-md-6">    
       <div className="img-hover position-relative overflow-hidden">
        <img className='img-hover rounded-4 w-100' src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" />
       <div className='layer rounded-4 d-flex justify-content-center align-items-center'>
       <AiOutlinePlus size={100} className=' text-white'/>
       </div>
       </div>

        </div>
        <div onClick={()=>{display()}} className=" col-lg-4 my-4  col-md-6">    
       <div className="img-hover position-relative overflow-hidden">
        <img className='img-hover rounded-4 w-100' src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" />
       <div className='layer rounded-4 d-flex justify-content-center align-items-center'>
       <AiOutlinePlus size={100} className=' text-white'/>
       </div>
       </div>

        </div>
        <div onClick={()=>{display()}} className=" col-lg-4 my-4  col-md-6">    
       <div className="img-hover position-relative overflow-hidden">
        <img className='img-hover rounded-4 w-100' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
       <div className='layer rounded-4 d-flex justify-content-center align-items-center'>
       <AiOutlinePlus size={100} className=' text-white'/>
       </div>
       </div>

        </div>
        <div onClick={()=>{display()}} className=" col-lg-4 my-4  col-md-6">    
       <div className="img-hover position-relative overflow-hidden">
        <img className='img-hover rounded-4 w-100' src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" />
       <div className='layer rounded-4 d-flex justify-content-center align-items-center'>
       <AiOutlinePlus size={100} className=' text-white'/>
       </div>
       </div>

        </div>
        <div onClick={()=>{display()}} className=" col-lg-4 my-4  col-md-6">    
       <div className="img-hover position-relative overflow-hidden">
        <img className='img-hover rounded-4 w-100' src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" />
       <div className='layer rounded-4 d-flex justify-content-center align-items-center'>
       <AiOutlinePlus size={100} className=' text-white'/>
       </div>
       </div>

        </div>


        </div>    
        </div>    
     </div>
  )
}
