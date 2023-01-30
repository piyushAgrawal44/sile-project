import React, { useEffect } from 'react'
import img1 from "../images/games-2.jpg";
// import img2 from "../images/man.png";
import img3 from "../images/enterprise.webp";
import Carousel from './Carousel';
import Slider from './Slider';
import FAQ from './FAQ';

function Home(props) {


    useEffect(() => {
        props.setProgress(100);
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="">
                <div className="banner bg-[#D1D1F7] px-5 sm:px-16 py-12 pt-14 flex items-center justify-between md:space-x-4 flex-wrap md:flex-nowrap">
                    <div className='mb-5 md:mb-0 max-w-[600px]'>
                        <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl mb-2'>
                            SILE on.
                        </h1>
                        <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl'>
                            Problem gone.
                        </h1>
                        <br />
                        <h3 className='text-lg'>
                            We provide complete business management solution and develop custom games for employee traing. SILE gives wing to your business.
                        </h3>
                        <br />
                        <button className='bg-[#565ADD] px-16 py-5 text-white font-semibold rounded-[40px] text-2xl'>Get started with SILE</button>
                    </div>
                    <div className='max-w-[600px]'>
                        <div className="bg-[#9F92EC] px-5 sm:px-16 py-5 sm:py-10 rounded-[30px]">
                            <img src={img1} className="w-[100%] max-w-[600px] m-auto rounded-md" alt="" />
                        </div>
                    </div>
                </div>

                <br /><br />
                <div className="our_customers">
                    <h3 className='font-bold text-xl sm:text-2xl md:text-3xl text-center px-5 sm:px-10 my-10'>
                        More than 14 million people across 200,000 companies choose SILE
                    </h3>
                    <Slider />
                </div>

                <div className='px-5 sm:px-10 mt-[120px] text-center'>
                    <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>What We Offer</h1>
                    <h3 className='text-lg sm:text-2lg md:text-3lg mt-3'>
                        We offer wide range of services that can help your business to grow !
                    </h3>
                </div>

                <div className="what_we_offer mt-16 px-5 sm:px-16">

                    <div className="flex flex-wrap sm:px-10 md:flex-nowrap md:space-x-16 mb-12 lg:mb-0 items-center">
                        <div className="card bg-[#2B1C50] py-5 px-5 sm:px-16 sm:py-16 rounded-[35px] lg:rounded-[40px] text-center w-[100%] md:w-[55%]">
                            <img src={img1} className="rounded-3xl  h-[100%] max-h-[800px] m-auto" alt="" />
                        </div>
                        <div className='flex md:space-x-4 w-[100%] md:w-[45%] justify-center  mt-3 md:mt-0'>
                            <div className='pt-3 text-3xl hidden lg:block'>
                            <i class="bi bi-asterisk"></i>
                            </div>
                            <div className="sm:max-w-[500px]">
                                <h1 className='font-semibold text-xl sm:text-2xl md:text-[35px]'>Application Development</h1>
                                <h3 className='text-2sm sm:text-lg md:text-xl mt-5 text-slate-500 font-medium'>
                                    Start recording your screen and camera easily. Works on any device using Loom’s desktop and mobile apps or Chrome extension.
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:px-10 md:flex-nowrap md:space-x-16 mb-12 lg:mb-0 items-center lg:translate-y-[-40px]">
                        <div className='flex md:space-x-4 w-[100%] md:w-[45%] justify-center mt-3 md:mt-0 order-2 md:order-1'>
                            <div className='pt-3 text-3xl hidden lg:block'>
                                <i className="bi bi-bookmark-check"></i>
                            </div>
                            <div className="sm:max-w-[500px]">
                                <h1 className='font-semibold text-xl sm:text-2xl md:text-[35px]'>Application Development</h1>
                                <h3 className='text-2sm sm:text-lg md:text-xl mt-5 text-slate-500 font-medium'>
                                    Start recording your screen and camera easily. Works on any device using Loom’s desktop and mobile apps or Chrome extension.
                                </h3>
                            </div>
                        </div>
                        <div className="card bg-[#AFB0ED] py-5 px-5 sm:px-16 sm:py-16 rounded-[35px] lg:rounded-[40px] text-center w-[100%] md:w-[55%] order-1 md:order-2">
                            <img src={img1} className="rounded-3xl  h-[100%] max-h-[800px] m-auto" alt="" />
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:px-10 md:flex-nowrap md:space-x-16 mb-12 lg:mb-0 items-center lg:translate-y-[-80px]">
                        <div className="card bg-[#EEF0FF] py-5 px-5 sm:px-16 sm:py-16 rounded-[35px] lg:rounded-[40px] text-center w-[100%] md:w-[55%]">
                            <img src={img1} className="rounded-3xl  h-[100%] max-h-[800px] m-auto" alt="" />
                        </div>
                        <div className='flex md:space-x-4 w-[100%] md:w-[45%] justify-center  mt-3 md:mt-0'>
                            <div className='pt-3 text-3xl hidden lg:block'>
                                <i className="bi bi-bookmark-check"></i>
                            </div>
                            <div className="sm:max-w-[500px]">
                                <h1 className='font-semibold text-xl sm:text-2xl md:text-[35px]'>Application Development</h1>
                                <h3 className='text-2sm sm:text-lg md:text-xl mt-5 text-slate-500 font-medium'>
                                    Start recording your screen and camera easily. Works on any device using Loom’s desktop and mobile apps or Chrome extension.
                                </h3>
                            </div>
                        </div>
                    </div>


                </div>


                <div className='sm:px-10'>
                    <div className="banner bg-[#111019] mt-10 px-5 sm:px-10 py-16 text-center text-white flex justify-center items-center sm:rounded-[50px] flex-wrap">
                        <div className='mb-20'>
                            <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl text-[#F1F0F3]'>
                                SILE on. Problem gone.
                            </h1>
                            <br />
                            <h3 className='text-lg sm:w-[80%] m-auto text-slate-300'>
                                We provide complete business management solution and develop custom games for employee traing. SILE gives wing to your business.
                            </h3>
                            <br />
                            <div className="text-center">
                                <button className='bg-[#565ADD] px-5 py-3 rounded-3xl text-white text-sm font-medium'> <i className="bi bi-box-arrow-up-right"></i> Learn More</button>
                            </div>
                        </div>
                        <div className=''>
                            <div className="rounded-r-2xl ">
                                <img src={img3} className="max-h-[300px] m-auto" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Team Part */}
                {/* <div className='px-5 sm:px-10 mt-[120px] text-center'>
                    <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>Our Team</h1>
                    <h3 className='text-lg sm:text-2lg md:text-3lg mt-3'>
                        We have multiple experts of multiple fields
                    </h3>
                </div> 

                <div className="px-5 sm:px-10 mt-16">
                    <div className="flex flex-wrap sm:flex-nowrap sm:space-x-10 text-center justify-center sm:text-start mb-10 items-center">
                        <div className="card bg-sub-color1 py-5 px-5 md:px-16 md:py-16 rounded-3xl text-center">
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
                        <div className="card order-first sm:order-last bg-sub-color1 py-5 px-5 md:px-16 md:py-16 rounded-3xl text-center">
                            <img src={img2} className="rounded-full h-[100%] max-h-[250px] m-auto " alt="" />
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap sm:space-x-10 text-center justify-center sm:text-start mb-10 items-center md:translate-y-[-120px]">
                        <div className="card bg-sub-color1 py-5 px-5 md:px-16 md:py-16 rounded-3xl text-center">
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

                </div> */}

                {/* <div className='px-5 sm:px-10 mt-[120px] text-center'>
                    <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>Our Clients Review</h1>
                    <h3 className='text-lg sm:text-2lg md:text-3lg mt-3'>
                        Customer choice is 1st preference. We care about our clients obssesions.
                    </h3>
                </div> */}

                <div className="mt-[80px]">
                    <Carousel />
                </div>

            </div>

            <FAQ />
        </>
    )
}

export default Home