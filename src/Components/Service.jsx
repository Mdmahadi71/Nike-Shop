import React from 'react'
import Container from './Container'
import { TbTruckDelivery } from "react-icons/tb";
import { MdReplay } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";

const Service = () => {
  return (
    <div>
      <Container>
        <div className="">
            <h2>Our Service</h2>
        </div>
        <div className=" w-[800px] mx-auto">
            <div className=" flex justify-between">
                <div className=" w-[32%]">
                    <div className=" text-[60px] text-orange-200 text-center">
                        <TbTruckDelivery/>
                    </div>
                    <h2>Fast Delivery</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div className=" w-[32%]">
                    <div className="">
                        <TbTruckDelivery/>
                    </div>
                    <h2>Fast Delivery</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div className=" w-[32%]">
                    <div className="">
                        <TbTruckDelivery/>
                    </div>
                    <h2>Fast Delivery</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Service
