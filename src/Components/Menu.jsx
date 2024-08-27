import React from 'react'
import Container from './Container'
import { FaHeart ,FaCartArrowDown } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";

const Menu = () => {
  return (
    <div>
        <Container>
            <div className=" flex justify-between items-center py-[10px] shadow-xl shadow-white ">
                <div className="w-[25%]">
                    <div className="">
                        <a className=' font-Inter font-semibold text-[#c72092] text-[35px]'>Shoe <span className=' text-[#6c14d0] underline'>s</span></a>
                    </div>
                </div>
                <div className="w-[50%]">
                    <ul className=' flex justify-center gap-x-[20px]'>
                        <li className=' font-Inter font-medium text-[18px] text-black hover:text-[#c72092] duration-200'>Home</li>
                        <li className=' font-Inter font-medium text-[18px] text-black hover:text-[#c72092] duration-200'>Products</li>
                        <li className=' font-Inter font-medium text-[18px] text-black hover:text-[#c72092] duration-200'>About</li>
                        <li className=' font-Inter font-medium text-[18px] text-black hover:text-[#c72092] duration-200'>Review</li>
                        <li className=' font-Inter font-medium text-[18px] text-black hover:text-[#c72092] duration-200'>Servises</li>
                    </ul>
                </div>
                <div className="w-[25%]">
                    <div className=" flex justify-end gap-x-[20px]">
                        <FaHeart className=' text-[22px] hover:text-[#c72092] duration-300 cursor-pointer'/>
                        <FaCartArrowDown className=' text-[22px] hover:text-[#c72092] duration-300 cursor-pointer'/>
                        <RiAccountCircleFill className=' text-[22px] hover:text-[#c72092] duration-300 cursor-pointer'/>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Menu