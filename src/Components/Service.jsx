import React from 'react'
import Container from './Container'
import { TbTruckDelivery } from "react-icons/tb";
import { MdReplay } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";

const Service = () => {
  return (
    <div className=' py-[40px]'>
      <Container>
        <div className="">
            <h2 className=' font-bold font-Inter text-[45px] text-black text-center my-[20px]'>Our <span className='text-[#c72092] '>Service</span></h2>
        </div>
        <div className=" w-[800px] mx-auto">
            <div className=" flex justify-between">
                <div className=" w-[32%] ">
                    <div className=" w-[80px] mx-auto text-[60px] text-yellow-400 text-center">
                        <TbTruckDelivery className=''/>
                    </div>
                    <h2 className=' font-Inter font-medium text-[20px] text-[#000000] text-center my-[10px]'>Fast Delivery</h2>
                    <p className=' font-Inter font-normal text-[15px] text-[#000000] text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div className=" w-[32%]">
                    <div className="w-[80px] mx-auto text-[60px] text-yellow-400 text-center">
                        <MdReplay/>
                    </div>
                    <h2 className=' font-Inter font-medium text-[20px] text-[#000000] text-center my-[10px]'>10 Days Replacement</h2>
                    <p className=' font-Inter font-normal text-[15px] text-[#000000] text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div className=" w-[32%]">
                    <div className=" w-[80px] mx-auto text-[60px] text-yellow-400 text-center">
                        <FaHeadphonesAlt/>
                    </div>
                    <h2 className=' font-Inter font-medium text-[20px] text-[#000000] text-center my-[10px]'>24 x 7 Support</h2>
                    <p className=' font-Inter font-normal text-[15px] text-[#000000] text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Service
