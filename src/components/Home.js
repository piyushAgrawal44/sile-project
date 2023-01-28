import React from 'react'
import img1 from "../images/games-2.jpg";
import img2 from "../images/man.png";
import img3 from "../images/enterprise.webp";
import Carousel from './Carousel';

function Home() {
    return (
        <>
            <div className="">
                <div className="banner bg-sub-color3 px-5 sm:px-10 py-12 pt-14 flex items-center justify-center md:space-x-4 flex-wrap md:flex-nowrap">
                    <div className='mb-5 md:mb-0 max-w-[600px]'>
                        <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl mb-2'>
                        <span className='text-blue-700 font-mono font-bold'>SILE</span> on.
                        </h1>
                        <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl'>
                            Problem gone.
                        </h1>
                        <br />
                        <h3 className='text-lg'>
                            We provide complete business management solution and develop custom games for employee traing. <span className='text-blue-700 font-mono font-bold'>SILE</span> gives wing to your business.
                        </h3>
                        <br />
                        <button className='bg-blue-700 px-12 py-4 text-white font-semibold rounded-3xl'>Get started with SILE</button>
                    </div>
                    <div className='max-w-[600px]'>
                        <div className="bg-sub-color1 px-5 sm:px-16 py-5 sm:py-10 rounded-r-[30px] rounded-bl-[30px]">
                            <img src={img1} className="w-[100%] max-w-[600px] m-auto rounded-r-md rounded-bl-md" alt="" />
                        </div>
                    </div>
                </div>

                <br /><br />
                <div className="our_customers">
                    <h3 className='font-bold text-xl sm:text-2xl md:text-3xl text-center px-5 sm:px-10 my-10'>
                        More than 14 million people across 200,000 companies choose <span className='text-blue-700 font-mono font-bold'>SILE</span>
                    </h3>
                    {/* <div className="customers_row bg-violet-200 p-3 mb-2"></div>
                    <div className="customers_row bg-violet-200 p-3 mb-2"></div>
                    <div className="customers_row bg-violet-200 p-3 mb-2"></div> */}
                </div>

                <div className='px-5 sm:px-10 mt-[120px] text-center'>
                    <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>What We Offer</h1>
                    <h3 className='text-lg sm:text-2lg md:text-3lg mt-3'>
                        We offer wide range of services that can help your business to grow !
                    </h3>
                </div>

                <div className="what_we_offer mt-16 px-5 sm:px-10">

                    <div className="flex flex-wrap sm:flex-nowrap sm:space-x-10 text-center justify-center sm:text-start mb-10 items-center">
                        <div className="card bg-sub-color1 py-5 px-5 md:px-16 md:py-16 rounded-r-2xl rounded-bl-2xl md:rounded-r-[40px] md:rounded-bl-[40px] text-center">
                            <img src={img1} className="rounded-full  h-[100%] max-h-[250px] m-auto" alt="" />
                        </div>
                        <div className='py-3 sm:max-w-[400px] md:max-w-[500px]'>
                            <h1 className='font-semibold text-xl sm:text-2xl md:text-3xl mb-1'>Application Development</h1>
                            <h3 className='text-2sm sm:text-2sm md:text-3sm mt-3'>
                                We build stunning mobile and web apps that capture the users' imaginations.
                            </h3>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap sm:space-x-10 text-center justify-center sm:text-start  mb-10 items-center md:translate-y-[-60px]">
                        <div className='py-3 sm:max-w-[400px] md:max-w-[500px]'>
                            <h1 className='font-semibold text-xl sm:text-2xl md:text-3xl mb-1'>Learning Experience Development</h1>
                            <h3 className='text-2sm sm:text-2sm md:text-3sm mt-3'>
                                We create immersive, data-driven simulations and games for your custom training needs.
                            </h3>
                        </div>
                        <div className="card order-first sm:order-last bg-sub-color1 py-5 px-5 md:px-16 md:py-16 rounded-r-2xl rounded-bl-2xl md:rounded-r-[40px] md:rounded-bl-[40px] text-center">
                            <img src={img1} className="rounded-full h-[100%] max-h-[250px] m-auto " alt="" />
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap sm:space-x-10 text-center justify-center sm:text-start mb-10 items-center md:translate-y-[-120px]">
                        <div className="card bg-sub-color1 py-5 px-5 md:px-16 md:py-16 rounded-r-2xl rounded-bl-2xl md:rounded-r-[40px] md:rounded-bl-[40px] text-center">
                            <img src={img1} className="rounded-full h-[100%] max-h-[250px] m-auto" alt="" />
                        </div>
                        <div className='py-3 sm:max-w-[400px] md:max-w-[500px]'>
                            <h1 className='font-semibold text-xl sm:text-2xl md:text-3xl mb-1'>App Development</h1>
                            <h3 className='text-2sm sm:text-2sm md:text-3sm mt-3'>
                                Start recording your screen and camera easily. Works on any device using SILE’s desktop and mobile apps or Chrome extension.
                            </h3>
                        </div>
                    </div>
                </div>


                <div className="banner bg-black mt-10 px-5 sm:px-10 py-9 text-center text-white flex justify-center items-center space-x-2 flex-wrap md:flex-nowrap">
                    <div className='mb-20 md:mb-0'>
                        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl'>
                        <span className='text-base-color font-mono font-bold'>SILE</span> on. Problem gone.
                        </h1>
                        <br />
                        <h3 className='text-lg'>
                        We provide complete business management solution and develop custom games for employee traing. SILE gives wing to your business.
                        </h3>
                        <br />
                        <div className="text-center">
                            <button className='bg-blue-700 px-5 py-3 rounded-3xl text-white text-3sm'> <i className="bi bi-box-arrow-up-right"></i> Learn More</button>
                        </div>
                    </div>
                    <div className=''>
                        <div className="rounded-r-2xl ">
                            <img src={img3} className="max-h-[300px] m-auto" alt="" />
                        </div>
                    </div>
                </div>

                <div className='px-5 sm:px-10 mt-[120px] text-center'>
                    <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>Our Team</h1>
                    <h3 className='text-lg sm:text-2lg md:text-3lg mt-3'>
                        We have multiple experts of multiple fields
                    </h3>
                </div>

                <div className="px-5 sm:px-10 mt-16">
                    <div className="flex flex-wrap sm:flex-nowrap sm:space-x-10 text-center justify-center sm:text-start mb-10 items-center">
                        <div className="card bg-sub-color1 py-5 px-5 md:px-16 md:py-16 rounded-r-2xl rounded-bl-2xl md:rounded-r-[40px] md:rounded-bl-[40px] text-center">
                            <img src={img2} className="rounded-full h-[100%] max-h-[250px] m-auto" alt="" />
                        </div>
                        <div className='py-3 sm:max-w-[400px] md:max-w-[500px]'>
                            <h1 className='font-semibold text-xl sm:text-2xl md:text-3xl mb-1'>Hitesh Singh</h1>
                            <h3 className='text-sm mb-7'>
                                ~ Co Founder and CEO at XYZ Company
                            </h3>
                            <h3 className='text-2sm sm:text-2sm md:text-3sm mt-3'>
                                19 years of experience in Strategy Planning and implementation, operations of complex mega projects, driving company-wide change initiatives, budgeting.
                            </h3>
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap sm:space-x-10 text-center justify-center sm:text-start  mb-10 items-center md:translate-y-[-60px]">
                        <div className='py-3 sm:max-w-[400px] md:max-w-[500px]'>
                            <h1 className='font-semibold text-xl sm:text-2xl md:text-3xl mb-1'>Hitesh Singh</h1>
                            <h3 className='text-sm mb-7'>
                                ~ Co Founder and CEO at XYZ Company
                            </h3>
                            <h3 className='text-2sm sm:text-2sm md:text-3sm mt-3'>
                                19 years of experience in Strategy Planning and implementation, operations of complex mega projects, driving company-wide change initiatives, budgeting.
                            </h3>
                        </div>
                        <div className="card order-first sm:order-last bg-sub-color1 py-5 px-5 md:px-16 md:py-16 rounded-r-2xl rounded-bl-2xl md:rounded-r-[40px] md:rounded-bl-[40px] text-center">
                            <img src={img2} className="rounded-full h-[100%] max-h-[250px] m-auto " alt="" />
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap sm:space-x-10 text-center justify-center sm:text-start mb-10 items-center md:translate-y-[-120px]">
                        <div className="card bg-sub-color1 py-5 px-5 md:px-16 md:py-16 rounded-r-2xl rounded-bl-2xl md:rounded-r-[40px] md:rounded-bl-[40px] text-center">
                            <img src={img2} className="rounded-full h-[100%] max-h-[250px] m-auto" alt="" />
                        </div>
                        <div className='py-3 sm:max-w-[400px] md:max-w-[500px]'>
                            <h1 className='font-semibold text-xl sm:text-2xl md:text-3xl mb-1'>Hitesh Singh</h1>
                            <h3 className='text-sm mb-7'>
                                ~ Co Founder and CEO at XYZ Company
                            </h3>
                            <h3 className='text-2sm sm:text-2sm md:text-3sm mt-3'>
                                19 years of experience in Strategy Planning and implementation, operations of complex mega projects, driving company-wide change initiatives, budgeting.
                            </h3>
                        </div>
                    </div>

                </div>

                <div className='px-5 sm:px-10 mt-[120px] text-center'>
                    <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>Our Clients Review</h1>
                    <h3 className='text-lg sm:text-2lg md:text-3lg mt-3'>
                        Customer choice is 1st preference. We care about our clients obssesions.
                    </h3>
                </div>

                <div className="mt-12">
                <Carousel />
                </div>
            </div>
        </>
    )
}

export default Home