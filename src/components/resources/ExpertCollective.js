import React, { useEffect } from 'react';
import news1 from "../../images/news.webp";
import img1 from "../../images/expertcollective1.png";
import img2 from "../../images/expertcollective2.png";
import img3 from "../../images/expertcollective3.png";

function ExpertCollective(props) {
    useEffect(() => {
        props.setProgress(100);
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <div className='md:text-center bg-gradient-to-b from-indigo-100 py-10 sm:py-16 px-5 sm:px-16'>
                <br />
                <h1 className='font-bold text-3xl sm:text-3xl md:text-[45px] mb-5'>SILE Expert Collective</h1>
                <h6 className='font-medium text-sm sm:text-xl sm:leading-9 text-[#3D2E7C] md:px-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem asperiores consequuntur placeat cupiditate magnam, unde minus aut soluta ab eius.</h6>
                <br />
            </div>

            <div className='px-5 py-16'>
                <h1 className='font-bold text-2xl sm:text-3xl'>All Experts</h1>

                <div className='flex space-x-2 mt-10'>
                    <div className="hidden md:block px-5 max-w-[400px]">
                        <div className='mb-8'>
                            <h1 className='font-medium text-lg mb-4'>Location</h1>

                            <div className="flex flex-wrap">
                                <div className="tag border-[1px] border-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#f3f3f3] mr-1 mb-1">Banglore</div>
                                <div className="tag border-[1px] border-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#f3f3f3] mr-1 mb-1">Delhi</div>
                                <div className="tag border-[1px] border-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#f3f3f3] mr-1 mb-1">Mumbai</div>
                                <div className="tag border-[1px] border-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#f3f3f3] mr-1 mb-1">Kolkata</div>

                            </div>
                        </div>
                        <div className=''>
                            <h1 className='font-medium text-lg mb-4'>Services offered</h1>

                            <div className="flex flex-wrap">
                                <div className="tag border-[1px] border-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#f3f3f3] mr-1 mb-1">Gaming</div>
                                <div className="tag border-[1px] border-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#f3f3f3] mr-1 mb-1">Innovation</div>
                                <div className="tag border-[1px] border-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#f3f3f3] mr-1 mb-1">Training</div>
                                <div className="tag border-[1px] border-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#f3f3f3] mr-1 mb-1">Website</div>
                                <div className="tag border-[1px] border-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#f3f3f3] mr-1 mb-1">Application</div>
                                <div className="tag border-[1px] border-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#f3f3f3] mr-1 mb-1">Product & Software Development</div>
                            </div>
                        </div>

                    </div>
                    <div className='max-h-[500px] overflow-auto scrollbar-hidden'>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 justify-center gap-3">
                            <div className='border-[1px] border-gray-300 p-3 bg-white rounded-[35px] max-w-[500px] mb-5 min-w-[200px] hover:shadow-md hover:shadow-slate-200 duration-150'>
                                <div className="img">
                                    <img src={news1} className="max-w-[100%] m-auto rounded-[35px]" alt="img" />
                                </div>
                                <div className='py-2 px-5'>
                                    <h1 className='font-semibold text-lg'>Product and service design projects</h1>
                                    <h3 className='text-sm font-normal my-2'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore itaque eius fugiat quae unde eos quia sint nisi error quod!
                                    </h3>

                                </div>
                            </div>

                            <div className='border-[1px] border-gray-300 p-3 bg-white rounded-[35px] max-w-[500px] mb-5 min-w-[200px] hover:shadow-md hover:shadow-slate-200 duration-150'>
                                <div className="img">
                                    <img src={news1} className="max-w-[100%] m-auto rounded-[35px]" alt="img" />
                                </div>
                                <div className='py-2 px-5'>
                                    <h1 className='font-semibold text-lg'>Product and service design projects</h1>
                                    <h3 className='text-sm font-normal my-2'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore itaque eius fugiat quae unde eos quia sint nisi error quod!
                                    </h3>

                                </div>
                            </div>

                            <div className='border-[1px] border-gray-300 p-3 bg-white rounded-[35px] max-w-[500px] mb-5 min-w-[200px] hover:shadow-md hover:shadow-slate-200 duration-150'>
                                <div className="img">
                                    <img src={news1} className="max-w-[100%] m-auto rounded-[35px]" alt="img" />
                                </div>
                                <div className='py-2 px-5'>
                                    <h1 className='font-semibold text-lg'>Product and service design projects</h1>
                                    <h3 className='text-sm font-normal my-2'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore itaque eius fugiat quae unde eos quia sint nisi error quod!
                                    </h3>

                                </div>
                            </div>

                            <div className='border-[1px] border-gray-300 p-3 bg-white rounded-[35px] max-w-[500px] mb-5 min-w-[200px] hover:shadow-md hover:shadow-slate-200 duration-150'>
                                <div className="img">
                                    <img src={news1} className="max-w-[100%] m-auto rounded-[35px]" alt="img" />
                                </div>
                                <div className='py-2 px-5'>
                                    <h1 className='font-semibold text-lg'>Product and service design projects</h1>
                                    <h3 className='text-sm font-normal my-2'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore itaque eius fugiat quae unde eos quia sint nisi error quod!
                                    </h3>

                                </div>
                            </div>

                            <div className='border-[1px] border-gray-300 p-3 bg-white rounded-[35px] max-w-[500px] mb-5 min-w-[200px] hover:shadow-md hover:shadow-slate-200 duration-150'>
                                <div className="img">
                                    <img src={news1} className="max-w-[100%] m-auto rounded-[35px]" alt="img" />
                                </div>
                                <div className='py-2 px-5'>
                                    <h1 className='font-semibold text-lg'>Product and service design projects</h1>
                                    <h3 className='text-sm font-normal my-2'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore itaque eius fugiat quae unde eos quia sint nisi error quod!
                                    </h3>

                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

            <div className='px-5 lg:px-16 py-16'>
                <h1 className='text-2xl sm:text-3xl md:text-[35px] mb-5 sm:text-center'>How the <span className='font-semibold'>SILE Expert Collective</span> can help you</h1>

                <div className="mt-16 flex justify-evenly flex-wrap md:flex-nowrap md:space-x-4">
                    <div className=" hover:bg-white scale-[0.98] hover:scale-100 duration-300 border-[1px] border-[#c6c6c6] hover:shadow-gray-400 hover:shadow-lg rounded-3xl text-start mb-8 md:mb-0">
                        <div className=''>
                            <div className="img">
                                <img src={img1} className="max-w-[100%] m-auto mt-5" alt="" />
                            </div>
                            <div className='py-5 px-5'>
                                <h1 className='font-semibold text-2xl'>Product and service design projects</h1>
                                <h3 className='text-md font-normal my-2'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore itaque eius fugiat quae unde eos quia sint nisi error quod!
                                </h3>

                            </div>


                        </div>
                    </div>

                    <div className=" hover:bg-white scale-[0.98] hover:scale-100 duration-300 border-[1px] border-[#c6c6c6] hover:shadow-gray-400 hover:shadow-lg rounded-3xl text-start mb-8 md:mb-0">
                        <div className=''>
                            <div className="img">
                                <img src={img2} className="max-w-[100%] m-auto mt-5" alt="" />
                            </div>
                            <div className='py-5 px-5'>
                                <h1 className='font-semibold text-2xl'>Product and service design projects</h1>
                                <h3 className='text-md font-normal my-2'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore itaque eius fugiat quae unde eos quia sint nisi error quod!
                                </h3>

                            </div>


                        </div>
                    </div>

                    <div className=" hover:bg-white scale-[0.98] hover:scale-100 duration-300 border-[1px] border-[#c6c6c6] hover:shadow-gray-400 hover:shadow-lg rounded-3xl text-start mb-8 md:mb-0">
                        <div className=''>
                            <div className="img">
                                <img src={img3} className="max-w-[100%] m-auto mt-5" alt="" />
                            </div>
                            <div className='py-5 px-5'>
                                <h1 className='font-semibold text-2xl'>Product and service design projects</h1>
                                <h3 className='text-md font-normal my-2'>
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