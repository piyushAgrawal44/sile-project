import React, { useEffect } from 'react';
import img1 from "../images/expertcollective1.png";
import img2 from "../images/expertcollective2.png";
import img3 from "../images/expertcollective3.png";

function Blog(props) {
    useEffect(() => {
        props.setProgress(100);
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <div className='md:text-center bg-gradient-to-b from-indigo-100 py-10 sm:py-16 px-5 sm:px-16'>
                <br />
                <h1 className='font-bold text-3xl sm:text-3xl md:text-[45px] mb-5'>SILE Blogs</h1>
                <h6 className='font-medium text-sm sm:text-xl sm:leading-9 text-[#3D2E7C] md:px-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem asperiores consequuntur placeat cupiditate magnam, unde minus aut soluta ab eius.</h6>
                <br />
            </div>

            <div className='px-5 py-16'>
                <h1 className='font-bold text-2xl sm:text-3xl'>All Blog</h1>

                <div className="px-5">
                    <div className='mt-10'>
                        <h1 className='font-medium text-lg mb-4'>Categories</h1>

                        <div className="flex flex-wrap">
                            <div className="tag border-[1px] border-[#c6c6c6] rounded-lg px-3 py-1 active1 hover:text-white duration-150 cursor-pointer  hover:bg-[#565ADD] mr-1 mb-1">All</div>
                            <div className="tag border-[1px] border-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#565ADD] hover:text-white duration-150 cursor-pointer mr-1 mb-1">Game Design</div>
                            <div className="tag border-[1px] border-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#565ADD] hover:text-white duration-150 cursor-pointer mr-1 mb-1">NFT Games</div>
                            <div className="tag border-[1px] border-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#565ADD] hover:text-white duration-150 cursor-pointer mr-1 mb-1">Unity</div>
                            <div className="tag border-[1px] border-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#565ADD] hover:text-white duration-150 cursor-pointer mr-1 mb-1">2D modeling</div>
                            <div className="tag border-[1px] border-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#565ADD] hover:text-white duration-150 cursor-pointer mr-1 mb-1">Game Testing</div>
                            <div className="tag border-[1px] border-[#c6c6c6] rounded-lg px-3 py-1 hover:bg-[#565ADD] hover:text-white duration-150 cursor-pointer mr-1 mb-1">Web Based Game</div>

                        </div>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
                    <div className=" min-w-[200px] hover:bg-white scale-[0.98] hover:scale-100 duration-300 border-[1px] border-[#c6c6c6] hover:shadow-gray-400 hover:shadow-lg rounded-3xl text-start mb-8 md:mb-0">
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

                    <div className=" min-w-[200px] hover:bg-white scale-[0.98] hover:scale-100 duration-300 border-[1px] border-[#c6c6c6] hover:shadow-gray-400 hover:shadow-lg rounded-3xl text-start mb-8 md:mb-0">
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

                     <div className=" min-w-[200px] hover:bg-white scale-[0.98] hover:scale-100 duration-300 border-[1px] border-[#c6c6c6] hover:shadow-gray-400 hover:shadow-lg rounded-3xl text-start mb-8 md:mb-0">
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

                    <div className=" min-w-[200px] hover:bg-white scale-[0.98] hover:scale-100 duration-300 border-[1px] border-[#c6c6c6] hover:shadow-gray-400 hover:shadow-lg rounded-3xl text-start mb-8 md:mb-0">
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

                    <div className=" min-w-[200px] hover:bg-white scale-[0.98] hover:scale-100 duration-300 border-[1px] border-[#c6c6c6] hover:shadow-gray-400 hover:shadow-lg rounded-3xl text-start mb-8 md:mb-0">
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

            <div className='px-5 lg:px-10 '>


            </div>
        </>
    )
}

export default Blog