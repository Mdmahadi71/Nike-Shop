import React from 'react'
import Container from './Container'
import { FaLock ,FaUser ,FaGoogle ,FaFacebookF ,FaTwitter  } from "react-icons/fa";
import shoeImg from '../assets/logshoes.png'

const Login = () => {
  return (
    <div className='  '>
      <div className=" bg-[url('../src/assets/loging_bg.png')] bg-no-repeat bg-center bg-cover py-[200px]">
      <Container>
        <div className=" ">
            <div className=" flex justify-between items-center">
                <div className="w-[48%]">
                    <div className="">
                        <img src={shoeImg} alt="" />
                    </div>
                </div>
                <div className="w-[48%] ">
                    <div className="">
                      <div className="">
                        <h3 className=' font-Inter font-bold lg:text-[45px] text-[30px] text-black'>Welcome Back!</h3>
                      </div>
                        <div className="">
                            <h2 className=' font-Inter font-light text-[14px] text-black'>User Name</h2>
                            <div className=" relative">
                              <input type="text" name="" className=' w-[70%] h-[40px] pl-[30px] bg-none border-[3px] border-[#6c14d0] rounded-[5px] outline-none' placeholder='User Name' id="" />
                              <div className=" absolute top-[10px] left-[10px]">
                                <FaUser className=' text-[#c72092]'/>
                              </div>
                            </div>
                        </div>
                        <div className=" my-2">
                            <h2 className=' font-Inter font-light text-[14px] text-black'>Password</h2>
                            <div className=" relative">
                              <input type="password" name="" className=' w-[70%] h-[40px] pl-[30px] bg-none border-[3px] border-[#6c14d0] rounded-[5px] outline-none' placeholder='Password' id="" />
                              <div className=" absolute top-[10px] left-[10px]">
                                <FaLock className=' text-[#c72092]'/>
                              </div>
                            </div>
                        </div>
                 
                         <button className=' w-[70%] h-[40px] text-center bg-gradient-to-r from-violet-500 to-fuchsia-500   rounded-[5px] font-Inter font-medium text-[16px] text-white my-[10px] '>Log in</button>
                      <div className=" flex gap-x-3 w-[70%] justify-center text-[#c72092] my-[20px]">
                            <FaGoogle/>
                            <FaFacebookF/>
                            <FaTwitter />
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </Container>
      </div>
    </div>
  )
}

export default Login
