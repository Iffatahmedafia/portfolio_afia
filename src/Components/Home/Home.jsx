import React from 'react';
import afiaImg from "../../assets/Iffat-Ahmed-Afia_photo.png"

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
        <div className="md:w-2/4 md:pt-10">
          <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">Hello, I am Afia</h1>
          <p className="text-sm md:text-2xl tracking-tight">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button className="mt-5 mr-2 md:md-10 text-white py-2 px-3 text-sm md:text-lg 
            md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Contact Me</button>
            <button className="mt-5 ml-3 md:md-10 text-white py-2 px-3 text-sm md:text-lg 
            md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Download CV</button>
        </div>
        <div><img className="" src={afiaImg} alt="Profile img" />
        </div>
    </div>
  )
}

export default Home