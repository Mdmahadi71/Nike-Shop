import React from 'react'
import Container from './Container'
import myteam from '../assets/girl_dp1.jpg'
import { FaFacebookF ,FaTwitter,FaInstagram ,FaLinkedin  } from "react-icons/fa";

const Myteam = () => {
  return (
    <div>
      <Container>
        <div className="">
            <h3 className=' font-Inter font-bold text-[45px] text-purple-600 my-[50px] text-center'>My Team</h3>
        </div>
        <div className=" lg:flex justify-between">
            <div className=" lg:w-[32%] lg:my-0 my-[60px] ">
                <div className="border-[2px] border-[#6c14d0] p-[30px] w-[320px] h-[320px] rounded-[50%] group relative hover:rounded-[30px] duration-300  ">
                <div className="border-[3px] border-[#6c14d0] w-[250px] h-[250px] rounded-[50%] overflow-hidden 
                 absolute group-hover:rounded-[30px] group-hover:top-[-50px] duration-500 ">
                    <img src={myteam} className='w-[250px] h-[250px]  shadow-white ' alt="" />
                    </div>
                <div className=" absolute top-[30%] group-hover:top-[63%] duration-300 w-[250px]  text-center z-[-99]">
                    <h2 className=' font-Inter font-medium text-[#c72092] text-[20px]'>John Deo</h2>
                    <p className=' font-Inter font-normal text-[15px] text-gray-700'>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className=" flex gap-x-2 text-center justify-center my-[10px] text-[#c72092]">
                        <FaFacebookF/>
                        <FaInstagram />
                        <FaTwitter />
                        <FaLinkedin />
                    </div>
                </div>

                
                </div>
            </div>
            <div className=" lg:w-[32%] lg:my-0 my-[60px] ">
                <div className="border-[2px] border-[#6c14d0] p-[30px] w-[320px] h-[320px] rounded-[50%] group relative hover:rounded-[30px] duration-300  ">
                <div className="border-[3px] border-[#6c14d0] w-[250px] h-[250px] rounded-[50%] overflow-hidden 
                 absolute group-hover:rounded-[30px] group-hover:top-[-50px] duration-500 ">
                    <img src={myteam} className='w-[250px] h-[250px]  shadow-white ' alt="" />
                    </div>
                <div className=" absolute top-[30%] group-hover:top-[63%] duration-300 w-[250px]  text-center z-[-99]">
                    <h2 className=' font-Inter font-medium text-[#c72092] text-[20px]'>John Deo</h2>
                    <p className=' font-Inter font-normal text-[15px] text-gray-700'>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className=" flex gap-x-2 text-center justify-center my-[10px] text-[#c72092]">
                        <FaFacebookF/>
                        <FaInstagram />
                        <FaTwitter />
                        <FaLinkedin />
                    </div>
                </div>

                
                </div>
            </div>
            <div className="lg:w-[32%] lg:my-0 my-[60px] ">
                <div className="border-[2px] border-[#6c14d0] p-[30px] w-[320px] h-[320px] rounded-[50%] group relative hover:rounded-[30px] duration-300  ">
                <div className="border-[3px] border-[#6c14d0] w-[250px] h-[250px] rounded-[50%] overflow-hidden 
                 absolute group-hover:rounded-[30px] group-hover:top-[-50px] duration-500 ">
                    <img src={myteam} className='w-[250px] h-[250px]  shadow-white ' alt="" />
                    </div>
                <div className=" absolute top-[30%] group-hover:top-[63%] duration-300 w-[250px]  text-center z-[-99]">
                    <h2 className=' font-Inter font-medium text-[#c72092] text-[20px]'>John Deo</h2>
                    <p className=' font-Inter font-normal text-[15px] text-gray-700'>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className=" flex gap-x-2 text-center justify-center my-[10px] text-[#c72092]">
                        <FaFacebookF/>
                        <FaInstagram />
                        <FaTwitter />
                        <FaLinkedin />
                    </div>
                </div>

                
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Myteam
