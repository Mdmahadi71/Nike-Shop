import React from 'react'
import Container from './Container'
import { FaStar ,FaHeart,FaShare } from "react-icons/fa";
import shoeone from '../assets/shoes1.png'
import shoetow from '../assets/shoes8.png'
import shoethree from '../assets/shoes2.png'
import shoefore from '../assets/shoes3.png'
import shoefive from '../assets/shoes4.png'
import shoesix from '../assets/shoes5.png'
import shoeseven from '../assets/shoes6.png'
import shoeeight from '../assets/shoes7.png'



const Product = () => {
  return (
    <div className=' py-[50px]'>
      <Container>
        <div className=" text-center py-[30px]">
            <h2 className=' font-Inter font-semibold text-[45px] text-[#c72092]'>Products</h2>
        </div>
        <div className=" flex justify-between">
            <div className="w-[24%]">
                <div className=" border-[2px] border-[#6c14d0] py-[20px] px-[15px] items-center text-center
                  bg-[#f6f6f6] rounded-[8px] shadow-xl shadow-[#6c14d0] relative  group overflow-hidden">
                    <div className=" w-[100px] mx-auto transform group-hover:scale-[1.3] duration-300">
                        <img src={shoeone} className=' w-full' alt="" />
                    </div>
                 
                        <h2 className=' font-Inter font-semibold text-[23px] text-black'>NIKE</h2>
                        <p className=' font-Inter font-light text-[15px] text-[#91919191]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <h4 className=' font-Inter font-bold text-[18px] text-black my-[8px]'>$100.00</h4>
                        <div className=" flex gap-x-[12px] justify-center text-yellow-400">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                
                    <div className=" py-[8px] px-[16px] bg-gradient-to-r from-violet-500 to-fuchsia-500 
                       text-center font-Inter font-medium text-[17px] text-white inline-block my-[10px]">
                        <button>Add To Cart</button>
                    </div>
                    <div className=" absolute top-2 left-[-150px] group-hover:left-[10px] group-hover:top-2 duration-300 ">
                        <div className=" border-[1px] border-gray-400 p-[10px] inline-block hover:text-[#6c14d0] mx-1 rounded-[5px] duration-300">
                            <FaHeart/>
                        </div>
                        <div className=" border-[1px] border-gray-400 p-[10px] inline-block hover:text-[#6c14d0] gap-x-[10px] rounded-[5px] duration-300">
                            <FaShare />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[24%]">
                <div className=" border-[2px] border-[#6c14d0] py-[20px] px-[15px] items-center text-center
                  bg-[#f6f6f6] rounded-[8px] shadow-xl shadow-[#6c14d0] relative  group overflow-hidden">
                    <div className=" w-[100px] mx-auto transform group-hover:scale-[1.3] duration-300">
                        <img src={shoetow} className=' w-full' alt="" />
                    </div>
                 
                        <h2 className=' font-Inter font-semibold text-[23px] text-black'>NIKE</h2>
                        <p className=' font-Inter font-light text-[15px] text-[#91919191]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <h4 className=' font-Inter font-bold text-[18px] text-black my-[8px]'>$150.00</h4>
                        <div className=" flex gap-x-[12px] justify-center text-yellow-400">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                
                    <div className=" py-[8px] px-[16px] bg-gradient-to-r from-violet-500 to-fuchsia-500 
                       text-center font-Inter font-medium text-[17px] text-white inline-block my-[10px]">
                        <button>Add To Cart</button>
                    </div>
                    <div className=" absolute top-2 left-[-150px] group-hover:left-[10px] group-hover:top-2 duration-300 ">
                        <div className=" border-[1px] border-gray-400 p-[10px] inline-block hover:text-[#6c14d0] mx-1 rounded-[5px] duration-300">
                            <FaHeart/>
                        </div>
                        <div className=" border-[1px] border-gray-400 p-[10px] inline-block hover:text-[#6c14d0] gap-x-[10px] rounded-[5px] duration-300">
                            <FaShare />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[24%]">
                <div className=" border-[2px] border-[#6c14d0] py-[20px] px-[15px] items-center text-center
                  bg-[#f6f6f6] rounded-[8px] shadow-xl shadow-[#6c14d0] relative  group overflow-hidden">
                    <div className=" w-[100px] mx-auto transform group-hover:scale-[1.3] duration-300">
                        <img src={shoethree} className=' w-full' alt="" />
                    </div>
                 
                        <h2 className=' font-Inter font-semibold text-[23px] text-black'>NIKE</h2>
                        <p className=' font-Inter font-light text-[15px] text-[#91919191]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <h4 className=' font-Inter font-bold text-[18px] text-black my-[8px]'>$200.00</h4>
                        <div className=" flex gap-x-[12px] justify-center text-yellow-400">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                
                    <div className=" py-[8px] px-[16px] bg-gradient-to-r from-violet-500 to-fuchsia-500 
                       text-center font-Inter font-medium text-[17px] text-white inline-block my-[10px]">
                        <button>Add To Cart</button>
                    </div>
                    <div className=" absolute top-2 left-[-150px] group-hover:left-[10px] group-hover:top-2 duration-300 ">
                        <div className=" border-[1px] border-gray-400 p-[10px] inline-block hover:text-[#6c14d0] mx-1 rounded-[5px] duration-300">
                            <FaHeart/>
                        </div>
                        <div className=" border-[1px] border-gray-400 p-[10px] inline-block hover:text-[#6c14d0] gap-x-[10px] rounded-[5px] duration-300">
                            <FaShare />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[24%]">
                <div className=" border-[2px] border-[#6c14d0] py-[20px] px-[15px] items-center text-center
                  bg-[#f6f6f6] rounded-[8px] shadow-xl shadow-[#6c14d0] relative  group overflow-hidden">
                    <div className=" w-[100px] mx-auto transform group-hover:scale-[1.3] duration-300">
                        <img src={shoefore} className=' w-full' alt="" />
                    </div>
                 
                        <h2 className=' font-Inter font-semibold text-[23px] text-black'>NIKE</h2>
                        <p className=' font-Inter font-light text-[15px] text-[#91919191]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <h4 className=' font-Inter font-bold text-[18px] text-black my-[8px]'>$250.00</h4>
                        <div className=" flex gap-x-[12px] justify-center text-yellow-400">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                
                    <div className=" py-[8px] px-[16px] bg-gradient-to-r from-violet-500 to-fuchsia-500 
                       text-center font-Inter font-medium text-[17px] text-white inline-block my-[10px]">
                        <button>Add To Cart</button>
                    </div>
                    <div className=" absolute top-2 left-[-150px] group-hover:left-[10px] group-hover:top-2 duration-300 ">
                        <div className=" border-[1px] border-gray-400 p-[10px] inline-block hover:text-[#6c14d0] mx-1 rounded-[5px] duration-300">
                            <FaHeart/>
                        </div>
                        <div className=" border-[1px] border-gray-400 p-[10px] inline-block hover:text-[#6c14d0] gap-x-[10px] rounded-[5px] duration-300">
                            <FaShare />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=" flex justify-between my-[20px]">
            <div className="w-[24%]">
                <div className=" border-[2px] border-[#6c14d0] py-[20px] px-[15px] items-center text-center
                  bg-[#f6f6f6] rounded-[8px] shadow-xl shadow-[#6c14d0] relative  group overflow-hidden">
                    <div className=" w-[100px] mx-auto transform group-hover:scale-[1.3] duration-300">
                        <img src={shoefive} className=' w-full' alt="" />
                    </div>
                 
                        <h2 className=' font-Inter font-semibold text-[23px] text-black'>NIKE</h2>
                        <p className=' font-Inter font-light text-[15px] text-[#91919191]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <h4 className=' font-Inter font-bold text-[18px] text-black my-[8px]'>$300.00</h4>
                        <div className=" flex gap-x-[12px] justify-center text-yellow-400">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                
                    <div className=" py-[8px] px-[16px] bg-gradient-to-r from-violet-500 to-fuchsia-500 
                       text-center font-Inter font-medium text-[17px] text-white inline-block my-[10px]">
                        <button>Add To Cart</button>
                    </div>
                    <div className=" absolute top-2 left-[-150px] group-hover:left-[10px] group-hover:top-2 duration-300 ">
                        <div className=" border-[1px] border-gray-400 p-[10px] inline-block hover:text-[#6c14d0] mx-1 rounded-[5px] duration-300">
                            <FaHeart/>
                        </div>
                        <div className=" border-[1px] border-gray-400 p-[10px] inline-block hover:text-[#6c14d0] gap-x-[10px] rounded-[5px] duration-300">
                            <FaShare />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[24%]">
                <div className=" border-[2px] border-[#6c14d0] py-[20px] px-[15px] items-center text-center
                  bg-[#f6f6f6] rounded-[8px] shadow-xl shadow-[#6c14d0] relative  group overflow-hidden">
                    <div className=" w-[100px] mx-auto transform group-hover:scale-[1.3] duration-300">
                        <img src={shoesix} className=' w-full' alt="" />
                    </div>
                 
                        <h2 className=' font-Inter font-semibold text-[23px] text-black'>NIKE</h2>
                        <p className=' font-Inter font-light text-[15px] text-[#91919191]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <h4 className=' font-Inter font-bold text-[18px] text-black my-[8px]'>$350.00</h4>
                        <div className=" flex gap-x-[12px] justify-center text-yellow-400">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                
                    <div className=" py-[8px] px-[16px] bg-gradient-to-r from-violet-500 to-fuchsia-500 
                       text-center font-Inter font-medium text-[17px] text-white inline-block my-[10px]">
                        <button>Add To Cart</button>
                    </div>
                    <div className=" absolute top-2 left-[-150px] group-hover:left-[10px] group-hover:top-2 duration-300 ">
                        <div className=" border-[1px] border-gray-400 p-[10px] inline-block hover:text-[#6c14d0] mx-1 rounded-[5px] duration-300">
                            <FaHeart/>
                        </div>
                        <div className=" border-[1px] border-gray-400 p-[10px] inline-block hover:text-[#6c14d0] gap-x-[10px] rounded-[5px] duration-300">
                            <FaShare />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[24%]">
                <div className=" border-[2px] border-[#6c14d0] py-[20px] px-[15px] items-center text-center
                  bg-[#f6f6f6] rounded-[8px] shadow-xl shadow-[#6c14d0] relative  group overflow-hidden">
                    <div className=" w-[100px] mx-auto transform group-hover:scale-[1.3] duration-300">
                        <img src={shoeseven} className=' w-full' alt="" />
                    </div>
                 
                        <h2 className=' font-Inter font-semibold text-[23px] text-black'>NIKE</h2>
                        <p className=' font-Inter font-light text-[15px] text-[#91919191]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <h4 className=' font-Inter font-bold text-[18px] text-black my-[8px]'>$400.00</h4>
                        <div className=" flex gap-x-[12px] justify-center text-yellow-400">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                
                    <div className=" py-[8px] px-[16px] bg-gradient-to-r from-violet-500 to-fuchsia-500 
                       text-center font-Inter font-medium text-[17px] text-white inline-block my-[10px]">
                        <button>Add To Cart</button>
                    </div>
                    <div className=" absolute top-2 left-[-150px] group-hover:left-[10px] group-hover:top-2 duration-300 ">
                        <div className=" border-[1px] border-gray-400 p-[10px] inline-block hover:text-[#6c14d0] mx-1 rounded-[5px] duration-300">
                            <FaHeart/>
                        </div>
                        <div className=" border-[1px] border-gray-400 p-[10px] inline-block hover:text-[#6c14d0] gap-x-[10px] rounded-[5px] duration-300">
                            <FaShare />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[24%]">
                <div className=" border-[2px] border-[#6c14d0] py-[20px] px-[15px] items-center text-center
                  bg-[#f6f6f6] rounded-[8px] shadow-xl shadow-[#6c14d0] relative  group overflow-hidden">
                    <div className=" w-[100px] mx-auto transform group-hover:scale-[1.3] duration-300">
                        <img src={shoeeight} className=' w-full' alt="" />
                    </div>
                 
                        <h2 className=' font-Inter font-semibold text-[23px] text-black'>NIKE</h2>
                        <p className=' font-Inter font-light text-[15px] text-[#91919191]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <h4 className=' font-Inter font-bold text-[18px] text-black my-[8px]'>$500.00</h4>
                        <div className=" flex gap-x-[12px] justify-center text-yellow-400">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                
                    <div className=" py-[8px] px-[16px] bg-gradient-to-r from-violet-500 to-fuchsia-500 
                       text-center font-Inter font-medium text-[17px] text-white inline-block my-[10px]">
                        <button>Add To Cart</button>
                    </div>
                    <div className=" absolute top-2 left-[-150px] group-hover:left-[10px] group-hover:top-2 duration-300 ">
                        <div className=" border-[1px] border-gray-400 p-[10px] inline-block hover:text-[#6c14d0] mx-1 rounded-[5px] duration-300">
                            <FaHeart/>
                        </div>
                        <div className=" border-[1px] border-gray-400 p-[10px] inline-block hover:text-[#6c14d0] gap-x-[10px] rounded-[5px] duration-300">
                            <FaShare />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Product
