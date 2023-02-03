import React from 'react'
import img1 from "../../images/expertcollective1.png";
import img2 from "../../images/expertcollective2.png";
import img3 from "../../images/expertcollective3.png";

function ExpertCollective() {
    return (
        <>
            <div className='md:text-center bg-gradient-to-b from-indigo-100 py-10 sm:py-16 px-5 sm:px-16'>
                <h1 className='font-bold text-3xl sm:text-3xl md:text-[45px] mb-5'>SILE Expert Collective</h1>
                <h6 className='font-medium text-sm sm:text-xl sm:leading-9 text-[#3D2E7C] md:px-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem asperiores consequuntur placeat cupiditate magnam, unde minus aut soluta ab eius.</h6>
            </div>

            <div className='px-5 lg:px-16'>
                <h1 className='text-2xl sm:text-3xl md:text-[35px] mb-5 sm:text-center'>How the <span className='font-semibold'>SILE Expert Collective</span> can help you</h1>

                <div className="mt-8 flex justify-evenly flex-wrap md:flex-nowrap md:space-x-4">
                    <div className="bg-[#E3F3FF] hover:bg-white hover:scale-[1.02] duration-200 box-shadow-hover-grey-10 rounded-3xl text-start mb-8 md:mb-0">
                        <div className=''>
                            <div className="img">
                                <img src={img3} className="max-w-[100%] m-auto mt-5" alt="" />
                            </div>
                            <div className='py-5 px-5'>
                                <h1 className='font-semibold text-2xl my-5'>Product and service design projects</h1>
                                <h3 className='text-lg font-semibold my-2'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore itaque eius fugiat quae unde eos quia sint nisi error quod!
                                </h3>

                            </div>


                        </div>
                    </div>

                    <div className="bg-[#E3F3FF] hover:bg-white hover:scale-[1.02] duration-200 box-shadow-hover-grey-10 rounded-3xl text-start mb-8 md:mb-0">
                        <div className=''>
                            <div className="img">
                                <img src={img2} className="max-w-[100%] m-auto mt-5" alt="" />
                            </div>
                            <div className='py-5 px-5'>
                                <h1 className='font-semibold text-2xl my-5'>Strategy, innovation and transformation</h1>
                                <h3 className='text-lg font-semibold my-2'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore itaque eius fugiat quae unde eos quia sint nisi error quod!
                                </h3>

                            </div>


                        </div>
                    </div>

                    <div className="bg-[#E3F3FF] hover:bg-white hover:scale-[1.02] duration-200 box-shadow-hover-grey-10 rounded-3xl text-start mb-8 md:mb-0">
                        <div className=''>
                            <div className="img">
                                <img src={img1} className="max-w-[100%] m-auto mt-5" alt="" />
                            </div>
                            <div className='py-5 px-5'>
                                <h1 className='font-semibold text-2xl my-5'>Workshop design and delivery.</h1>
                                <h3 className='text-lg font-semibold my-2'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore itaque eius fugiat quae unde eos quia sint nisi error quod!
                                </h3>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpertCollective