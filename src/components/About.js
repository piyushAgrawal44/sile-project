import React, { useEffect } from 'react';
import video from "../videos/aboutus.mp4";
import team1 from "../images/team1.webp";
import team2 from "../images/team2.webp";
import news1 from "../images/news.webp";
import Slider from './Slider'

function About(props) {
  useEffect(() => {
    props.setProgress(100);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className='bg-[#2B1C50]'>
        <div className="banner bg-[#140B2A] relative pt-8 sm:pt-0 text-start sm:text-center overflow-y-hidden">
          <div className='px-5 sm:px-16 py-5 sm:pt-16 lg:absolute w-[100%]'>
            <h1 className=' text-violet-50 font-bold text-[35px]  md:text-[40px] lg:text-[65px] mb-4'>Bring video messaging to the world</h1>

            <h6 className='text-sub-color1 text-lg md:text-2xl md:max-w-[80%] m-auto'>We are on a mission to empower everyone at work to communicate more effectively, wherever they are.</h6>
          </div>

          <video className='' src={video} autoPlay muted>
          </video>

          <div className="stats my-8 sm:my-0 md:absolute sm:bottom-8 w-[100%] flex items-center justify-evenly flex-wrap md:flex-nowrap">
            <div className='bg-thd-color-violet-90 rounded-2xl py-7 my-3 w-[110px] sm:w-[200px] text-center'>
              <h1 className='font-bold text-3xl text-violet-200 md:text-[40px] mb-2'>2015</h1>
              <h3 className='text-lg  md:text-2lg lg:text-3lg text-violet-300'>Founded</h3>
            </div>

            <div className='bg-thd-color-violet-90 rounded-2xl py-7 my-3 w-[110px] sm:w-[200px] text-center'>
              <h1 className='font-bold text-3xl text-violet-200 md:text-[40px]  mb-2'>100+</h1>
              <h3 className='text-lg  md:text-2lg lg:text-3lg text-violet-300'>Projects</h3>
            </div>

            <div className='bg-thd-color-violet-90 rounded-2xl py-7 my-3 w-[110px] sm:w-[200px] text-center'>
              <h1 className='font-bold text-3xl text-violet-200 md:text-[40px] mb-2'>50+</h1>
              <h3 className='text-lg  md:text-2lg lg:text-3lg text-violet-300'>Clients</h3>
            </div>

            <div className='bg-thd-color-violet-90 rounded-2xl py-7 my-3 w-[110px] sm:w-[200px] text-center'>
              <h1 className='font-bold text-3xl text-violet-200 md:text-[40px] mb-2'>10k+</h1>
              <h3 className='text-lg  md:text-2lg lg:text-3lg text-violet-300'>Users</h3>
            </div>
          </div>
        </div>

        <div className='banner bg-[#140B2A] pt-16'>
          <h1 className='text-center font-bold text-violet-50 text-3xl sm:text-[30px] md:text-[40px]'>Our Clients</h1>
          <div className="companies_slider mt-12">
            <Slider />
          </div>

          <div className=' bg-[#2B1C50] py-16 w-[98%] sm:w-[90%] mx-auto my-10 sm:rounded-[45px]'>
            <h1 className='text-center font-bold text-violet-50 text-3xl sm:text-[30px] md:text-[40px]'>Our Leadership</h1>

            <div className="flex justify-evenly flex-wrap md:flex-nowrap mt-16">
              <div className="person1 text-center min-w-[200px] mb-12">
                <img src={team1} className="rounded-full w-[90%] max-w-[300px] m-auto" alt="person1" />
                <h5 className='name font-semibold text-white text-xl mt-3 mb-2'><u>John Cena</u></h5>
                <h5 className='role font-light text-violet-50 text-sm'>~ Co Founder and CEO</h5>
              </div>

              <div className="person1 text-center min-w-[200px] mb-12">
                <img src={team2} className="rounded-full w-[90%] max-w-[300px] m-auto" alt="person1" />
                <h5 className='name font-semibold text-white text-xl mt-3 mb-2'><u>John Cena</u></h5>
                <h5 className='role font-light text-violet-50 text-sm'>~ Co Founder and CEO</h5>
              </div>

              <div className="person1 text-center min-w-[200px] mb-12">
                <img src={team1} className="rounded-full w-[90%] max-w-[300px] m-auto" alt="person1" />
                <h5 className='name font-semibold text-white text-xl mt-3 mb-2'><u>John Cena</u></h5>
                <h5 className='role font-light text-violet-50 text-sm'>~ Co Founder and CEO</h5>
              </div>
            </div>



          </div>
          <br />
        </div>
      </div>

      <div className='bg-white py-10 sm:py-16 px-5 sm:px-16'>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-[45px] text-center text-[#252434]'>News from SILE</h1>

        <div className="mt-16  flex justify-evenly flex-wrap md:flex-nowrap md:space-x-5 ">
          <div className="min-w-[200px] mb-6">
            <div className=" bg-[#F3F3FF] ease-linear duration-200 hover:bg-white hover:shadow-xl hover:shadow-violet-100 hover:scale-105 py-5 px-5 md:px-10 md:my-10 rounded-3xl md:rounded-[45px] text-start">
              <img src={news1} className="rounded-3xl " alt="" />
              <div className='py-3 '>
                <h1 className='font-semibold text-lg mb-1'>Application Development</h1>
                <h3 className='text-sm mt-2'>
                  We build stunning mobile and web apps that capture the users' imaginations. We build stunning mobile and web apps that capture the users' imaginations.
                </h3>
              </div>
            </div>
          </div>

          <div className="min-w-[200px] mb-6">
            <div className=" bg-[#F3F3FF] ease-linear duration-200 hover:bg-white hover:shadow-xl hover:shadow-violet-100 hover:scale-105 py-5 px-5 md:px-10 md:my-10 rounded-3xl md:rounded-[45px] text-start">
              <img src={news1} className="rounded-3xl " alt="" />
              <div className='py-3 '>
                <h1 className='font-semibold text-lg mb-1'>Application Development</h1>
                <h3 className='text-sm mt-2'>
                  We build stunning mobile and web apps that capture the users' imaginations. We build stunning mobile and web apps that capture the users' imaginations.
                </h3>
              </div>
            </div>
          </div>

          <div className="min-w-[200px] mb-6">
            <div className=" bg-[#F3F3FF] ease-linear duration-200 hover:bg-white hover:shadow-xl hover:shadow-violet-100 hover:scale-105 py-5 px-5 md:px-10 md:my-10 rounded-3xl md:rounded-[45px] text-start">
              <img src={news1} className="rounded-3xl " alt="" />
              <div className='py-3 '>
                <h1 className='font-semibold text-lg mb-1'>Application Development</h1>
                <h3 className='text-sm mt-2'>
                  We build stunning mobile and web apps that capture the users' imaginations. We build stunning mobile and web apps that capture the users' imaginations.
                </h3>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  )
}

export default About