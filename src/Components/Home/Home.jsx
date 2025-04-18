import React from 'react';
import afiaImg from "../../assets/photo_5.png"
import TextChange from '../TextChange';
import CV from "../../assets/Iffat_Ahmed_Afia_CV.pdf";

const Home = () => {
  
  return (
  //  <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
  //       <div className="md:w-3/4 md:pt-10">
  //         <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
  //           <TextChange />
  //         </h1>
  //         <p className="text-sm md:text-2xl tracking-tight">
  //           I am an experienced Web Developer having expertise in RPA as well.
  //           I am currently based in Canada and exploring opportunity in relevant sectors.
  //         </p>
  //         <div>
  //         <a href="#Footer">
  //            <button className="mt-5 mr-5 md:md-10 px-6 py-3 text-sm md:text-lg 
  //             md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-full bg-[#0e7490]">
  //               Contact Me
  //             </button>
  //           </a>
  //            <button className="mt-5 md:md-10 px-6 py-3 text-sm md:text-lg 
  //             md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-full bg-[#0e7490]">
  //               <a href={CV} download>Download CV</a> 
  //             </button>
  //         </div>
  //       </div>
  //       <div>
  //         <img className="h-auto" src={afiaImg} alt="Profile img" />
  //       </div>
  //   </div>
    <div className="text-white flex flex-col md:flex-row gap-4 p-10 md:p-16">
      <div className="">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4">
          I am an experienced Software Developer having expertise in RPA as well.
          I am currently based in Canada and exploring opportunity in relevant sectors.
        </p>
        <div>
          <a href="#Footer">
          <button className="mt-5 mr-5 md:md-10 px-6 py-3 text-sm md:text-lg 
            md:py-2 md:px-4 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90 hover:scale-105 duration-300">
              Contact Me
            </button>
          </a>
          <button className="mt-5 md:md-10 px-6 py-3 text-sm md:text-lg 
            md:py-2 md:px-4 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90 hover:scale-105 duration-300">
              <a href={CV} download>Download CV</a> 
          </button>
        </div>
      </div>
    <div className="flex justify-center items-center">
      <img className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 sm:rounded-none rounded-full object-cover mt-4" src={afiaImg} alt="Profile img" />
    </div>
</div>
  )
}

export default Home