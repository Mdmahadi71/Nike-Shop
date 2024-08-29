import React from 'react'
import Container from './Container'
import { MdArrowForwardIos } from "react-icons/md";
import bannerimg from '../assets/shoes.png'
import { FaFacebookSquare ,FaInstagramSquare ,FaTwitter ,FaLinkedin  } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <Container>
        <div className=" flex bg-[url('../src/assets/bg1.png')] bg-no-repeat bg-center bg-cover py-[100px] ">
            <div className="w-[50%]">
                <div className="">
                    <h2 className=' text-[#c72092] font-Inter font-semibold text-[70px] '>NIKE</h2>
                    <h3 className='text-[#6c14d0] font-Inter font-semibold text-[70px]'>Collection</h3>
                    <p className=' font-Inter font-normal text-[15px] text-black'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                           specimen book. It has survived not only five centuries,
                         but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                  <button className=' flex items-center hover:gap-x-2 duration-300 border-[1px]  py-[8px] 
                     px-[15px] rounded-[15px] font-Inter font-medium
                   text-white text-[16px] bg-gradient-to-r from-violet-500 to-fuchsia-500 my-[30px]'>
                    <h3>SHOP NOW </h3>
                    <MdArrowForwardIos/>
                  </button>
                </div>
            </div>
            <div className="w-[50%]">
                <div className="">
                   <div className=" lg:w-[400px]  mx-auto">
                     <img src={bannerimg} alt="" />
                   </div>
                   <div className=" right-[20px]  absolute top-[50%]">
                        <FaFacebookSquare className=' text-[22px] hover:text-[#c72092] duration-300 my-[10px]'/>
                        <FaInstagramSquare className=' text-[22px] hover:text-[#c72092] duration-300 my-[10px]'/>
                        <FaTwitter className=' text-[22px] hover:text-[#c72092] duration-300 my-[10px]'/>
                        <FaLinkedin className=' text-[22px] hover:text-[#c72092] duration-300 my-[10px]'/>
                   </div>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner
