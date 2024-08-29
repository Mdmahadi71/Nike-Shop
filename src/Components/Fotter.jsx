import React from 'react'
import Container from './Container'
import { FaHome ,FaPhoneAlt,FaFacebookF,FaInstagramSquare ,FaTwitter ,FaLinkedin  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Fotter = () => {
  return (
    <div className=' py-[20px]'>
      <Container>
        <div className=" lg:flex">
            <div className="lg:w-[24%]">
                <div className="">
                    <h2 className=' font-Inter font-medium text-[20px] text-blue-400 text-center lg:text-start' >Contact</h2>
                    <div className=" flex gap-x-[10px] items-center  justify-center lg:justify-start">
                        <FaHome/>
                        <p className=' font-Inter font-normal text-[13px] text-black my-1'>R/42/Dhaka/Bangladesh</p>
                    </div>
                    <div className=" flex gap-x-[10px] items-center justify-center lg:justify-start">
                        <FaPhoneAlt />
                        <p className=' font-Inter font-normal text-[13px] text-black my-1'>01317159871</p>
                    </div>
                    <div className="flex gap-x-[5px] items-center justify-center lg:justify-start">
                        <MdEmail className=' text-black'/>
                        <p className=' font-Inter font-normal text-[13px] text-black my-1'>mahadialmasud2@gmail.com</p>
                    </div>
                </div>
            </div>
           
           <div className=" lg:w-[55%] flex justify-around my-5 lg:my-0">
           <div className="lg:w-[20%]">
                <div className="">
                    <h3 className=' font-Inter font-medium text-[20px] text-blue-400 text-center'>Get Help</h3>
                    <div className=" text-center">
                        <h3 className=' font-Inter font-normal text-[13px] text-black my-1'>FAQ</h3>
                        <h3 className=' font-Inter font-normal text-[13px] text-black my-1'>Shipping</h3>
                        <h3 className=' font-Inter font-normal text-[13px] text-black my-1'>Returns</h3>
                        <h3 className=' font-Inter font-normal text-[13px] text-black my-1'>Payment Options</h3>
                    </div>
                </div>
            </div>
            <div className="lg:w-[20%]">
                <div className="">
                    <h2 className=' font-Inter font-medium text-[20px] text-blue-400 text-center'>Our Stores</h2>
                    <div className=" text-center">
                        <h3 className=' font-Inter font-normal text-[13px] text-black my-1'>Bangladesh</h3>
                        <h3 className=' font-Inter font-normal text-[13px] text-black my-1'>India</h3>
                        <h3 className=' font-Inter font-normal text-[13px] text-black my-1'>USA</h3>
                    </div>
                </div>
            </div>
            <div className="lg:w-[16%]">
                <div className="">
                    <h3 className=' font-Inter font-medium text-[20px] text-blue-400'>Follw Us</h3>
                    <div className=" flex gap-x-2">
                        <FaFacebookF/>
                        <FaInstagramSquare />
                        <FaTwitter />
                        <FaLinkedin />
                    </div>
                </div>
            </div>
           </div>

            <div className="lg:w-[20%]">
                <div className="">
                    <h3 className=' font-Inter font-medium text-[20px] text-blue-400 lg:text-start text-center'>Newsletter</h3>
                    <div className="">
                        <input type="text" className=' w-full h-[30px] outline-none rounded-[10px]
                         bg-slate-500 border-[1px] border-slate-400 font-Inter font-normal text-[12px] text-gray-300' placeholder='Your Email id' name="" id="" />
                        <button className=' py-2 px-3 bg-gradient-to-r from-violet-500
                         to-fuchsia-500 font-Inter font-normal text-[12px] text-white rounded-[9px] my-[10px]'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Fotter
