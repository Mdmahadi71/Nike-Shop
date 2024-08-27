import React from 'react'
import Container from './Container'
import { FaStar ,FaStarHalfAlt  } from "react-icons/fa";
import reviewOne from '../assets/girl_dp1.jpg'
import reviewtow from '../assets/man_dp1.jpg'
import reviewthree from '../assets/man_dp2.jpg'
import reviewfure from '../assets/gir_dp3.jpg'
import reviewfive from '../assets/gir_dp2.jpg'
import reviewsix from '../assets/man_dp3.jpg'





const Review = () => {
  return (
    <div className=' py-[50px]'>
      <Container>
        <div className=" text-center py-[10px]">
            <h2 className=' font-Inter font-bold text-[45px] text-black'>Customer's <span className=' text-[#c72092]'>review</span></h2>
        </div>
        <div className=" flex justify-between">
            <div className="w-[32%]">
                <div className=" p-[20px] bg-[#f3f1f1] rounded-[15px] ">
                    <div className=" flex items-center gap-x-[20px]">
                        <div className=" w-[60px] h-[60px] overflow-hidden rounded-[50%] transform hover:scale-[1.2] duration-300">
                            <img src={reviewOne} alt="" />
                        </div>
                        <div className="">
                            <h2>Ranidi Lochana</h2>
                            <div className=" flex items-center gap-x-[10px] text-yellow-400">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt />
                            </div>
                        </div>
                    </div>
                    <p className=' font-Inter font-light text-[14px] text-gray-700 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla
                     voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!</p>
                </div>
            </div>
            <div className="w-[32%]">
                <div className=" p-[20px] bg-[#f3f1f1] rounded-[15px] ">
                    <div className=" flex items-center gap-x-[20px]">
                        <div className=" w-[60px] h-[60px] overflow-hidden rounded-[50%] transform hover:scale-[1.2] duration-300">
                            <img src={reviewtow} alt="" />
                        </div>
                        <div className="">
                            <h2>Ranidi Lochana</h2>
                            <div className=" flex items-center gap-x-[10px] text-yellow-400">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt />
                            </div>
                        </div>
                    </div>
                    <p className=' font-Inter font-light text-[14px] text-gray-700 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla
                     voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!</p>
                </div>
            </div>
            <div className="w-[32%]">
                <div className=" p-[20px] bg-[#f3f1f1] rounded-[15px]">
                    <div className=" flex items-center gap-x-[20px]">
                        <div className=" w-[60px] h-[60px] overflow-hidden rounded-[50%] transform hover:scale-[1.2] duration-300">
                            <img src={reviewthree} alt="" />
                        </div>
                        <div className="">
                            <h2>Ranidi Lochana</h2>
                            <div className=" flex items-center gap-x-[10px] text-yellow-400">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt />
                            </div>
                        </div>
                    </div>
                    <p className=' font-Inter font-light text-[14px] text-gray-700 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla
                     voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!</p>
                </div>
            </div>
        </div>
        <div className=" flex justify-between my-[20px]">
            <div className="w-[32%]">
                <div className=" p-[20px] bg-[#f3f1f1] rounded-[15px] ">
                    <div className=" flex items-center gap-x-[20px]">
                        <div className=" w-[60px] h-[60px] overflow-hidden rounded-[50%] transform hover:scale-[1.2] duration-300">
                            <img src={reviewfure} alt="" />
                        </div>
                        <div className="">
                            <h2>Ranidi Lochana</h2>
                            <div className=" flex items-center gap-x-[10px] text-yellow-400">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt />
                            </div>
                        </div>
                    </div>
                    <p className=' font-Inter font-light text-[14px] text-gray-700 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla
                     voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!</p>
                </div>
            </div>
            <div className="w-[32%]">
                <div className=" p-[20px] bg-[#f3f1f1] rounded-[15px] ">
                    <div className=" flex items-center gap-x-[20px]">
                        <div className=" w-[60px] h-[60px] overflow-hidden rounded-[50%] transform hover:scale-[1.2] duration-300">
                          <img src={reviewfive} alt="" />
                        </div>
                        <div className="">
                            <h2>Ranidi Lochana</h2>
                            <div className=" flex items-center gap-x-[10px] text-yellow-400">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt />
                            </div>
                        </div>
                    </div>
                    <p className=' font-Inter font-light text-[14px] text-gray-700 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla
                     voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!</p>
                </div>
            </div>
            <div className="w-[32%]">
                <div className=" p-[20px] bg-[#f3f1f1] rounded-[15px] ">
                    <div className=" flex items-center gap-x-[20px]">
                        <div className=" w-[60px] h-[60px] overflow-hidden rounded-[50%] transform hover:scale-[1.2] duration-300">
                          <img src={reviewsix} alt="" />
                        </div>
                        <div className="">
                            <h2>Ranidi Lochana</h2>
                            <div className=" flex items-center gap-x-[10px] text-yellow-400">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt />
                            </div>
                        </div>
                    </div>
                    <p className=' font-Inter font-light text-[14px] text-gray-700 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla
                     voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!</p>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Review
