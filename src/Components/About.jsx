import React, { useState } from 'react'
import Container from './Container'
import abImgone from '../assets/red_shoes1.png'
import abImgtow from '../assets/red_shoes2.png'
import abImgthree from '../assets/red_shoes3.png'
import abImgfure from '../assets/red_shoes4.png'

const About = () => {

    const [imageSrc, setImageSrc] = useState('image/red_shoes1.png');

    const handleImageClick = (small) => {
        setImageSrc(small.src);
    };


  return (
    <div className=' py-[50px]'>
      <Container>
        <div className="">
            <h2 className=' font-Inter font-bold text-[45px] text-[#c72092] text-center my-[20px]'>About</h2>
        </div>
        <div className=" flex justify-between items-center">
            <div className="w-[48%]">
                <div className=" flex justify-between items-center">
                    <div className="w-[25%]">
                        <div  className=" py-2 px-2 bg-gradient-to-r from-violet-500 to-fuchsia-500  rounded-[10px] my-[10px]">
                            <img src={abImgone} onClick={(e) => handleImageClick(e.target)} alt="" />
                        </div>
                        <div  className=" py-2 px-2 bg-gradient-to-r from-violet-500 to-fuchsia-500  rounded-[10px] my-[10px]">
                            <img src={abImgtow} onClick={(e) => handleImageClick(e.target)} alt="" />
                        </div>
                        <div className=" py-2 px-2 bg-gradient-to-r from-violet-500 to-fuchsia-500  rounded-[10px] my-[10px]">
                            <img src={abImgthree} onClick={(e) => handleImageClick(e.target)} alt="" />
                        </div>
                        <div  className=" py-2 px-2 bg-gradient-to-r from-violet-500 to-fuchsia-500  rounded-[10px] my-[10px]">
                            <img src={abImgfure} onClick={(e) => handleImageClick(e.target)} alt="" />
                        </div>
                    </div>
                    <div className="w-[73%]">
                        <div className=" border-[2px] border-[#6c14d0] p-[30px] shadow-xl shadow-[#6c14d0] rounded-[15px] w-full h-[400px] items-center">
                            <img src={imageSrc} className=' w-full h-full' alt="" id='mahadi' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[48%]">
                <div className=" border-[2px] border-[#c72092] p-[20px] shadow-xl shadow-[#c72092] rounded-[15px]">
                    <p className=' font-Inter font-normal text-[15px] text-black'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece 
                        of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor
                         at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                          Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
                          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
                          by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                           chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 
                           "de Finibus Bonorum et Malorum" by Cicero are also 
                        reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
            </div>
        </div>
        
        <div className=" w-[150px] mx-auto my-4">
        <button className=' py-[8px] px-[15px] bg-gradient-to-r from-violet-500 to-fuchsia-500  rounded-[10px] text-[15px] font-Inter font-medium text-white hover:shadow-lg hover:shadow-[#c72092] duration-300'>Shop Now</button>
        </div>
        
      </Container>
    </div>
  )
}

export default About
