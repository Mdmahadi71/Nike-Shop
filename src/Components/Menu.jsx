import React, { useState } from 'react'
import Container from './Container'
import { FaHeart ,FaCartArrowDown } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Menu = () => {
    let [show , setshow] = useState(false)
  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-white border-b-[2px] border-b-black'>
        <Container>
            <div className=" flex justify-between items-center py-[10px] shadow-xl shadow-white ">
                <div className="lg:w-[25%]">
                    <div className="">
                        <a className=' font-Inter font-semibold text-[#c72092] text-[35px]'>Shoe <span className=' text-[#6c14d0] underline'>s</span></a>
                    </div>
                </div>
               <div className=" flex lg:justify-between items-center">
               <div className={`lg:flex justify-between lg:static absolute duration-300 ${show == true ? 'top-[70px] right-[120px]': 'top-[-200px] right-[120px] '}`}>
               <div className="lg:w-[50%]">
                    <ul className=' lg:flex lg:justify-center text-center lg:text-start  gap-x-[20px]'>
                        <li className=' font-Inter font-medium text-[18px] text-black hover:text-[#c72092] duration-200'>Home</li>
                        <li className=' font-Inter font-medium text-[18px] text-black hover:text-[#c72092] duration-200'>Products</li>
                        <li className=' font-Inter font-medium text-[18px] text-black hover:text-[#c72092] duration-200'>About</li>
                        <li className=' font-Inter font-medium text-[18px] text-black hover:text-[#c72092] duration-200'>Review</li>
                        <li className=' font-Inter font-medium text-[18px] text-black hover:text-[#c72092] duration-200'>Servises</li>
                    </ul>
                </div>
                <div className="lg:w-[25%]">
                    <div className=" flex justify-end gap-x-[20px]">
                        <FaHeart className=' text-[22px] hover:text-[#c72092] duration-300 cursor-pointer'/>
                        <FaCartArrowDown className=' text-[22px] hover:text-[#c72092] duration-300 cursor-pointer'/>
                        <RiAccountCircleFill className=' text-[22px] hover:text-[#c72092] duration-300 cursor-pointer'/>
                    </div>
                </div>
               </div>
                <div onClick={()=>setshow(!show)} className=" lg:hidden text-[25px]  text-[#c72092]">
                
                {show == true ? <RxCross1/> : <FaBars/>}
               </div>
               </div>
              
            </div>
        </Container>
    </div>
  )
}

export default Menu