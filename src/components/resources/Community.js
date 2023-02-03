import React, { useEffect } from 'react';
import news1 from "../../images/news.webp";
import Carousel from '../sub_components/Carousel';

function Community(props) {
    useEffect(() => {
        props.setProgress(100);
        // eslint-disable-next-line
    }, []);
    return (

        <>
            <div className='md:text-center bg-gradient-to-b from-indigo-100  py-10 sm:py-16 px-5 sm:px-16'>
                <h1 className='font-bold text-3xl sm:text-3xl md:text-[45px] mb-5'>Community</h1>
                <h6 className='font-medium text-sm sm:text-xl sm:leading-9 text-[#3D2E7C] md:px-10'>See how Loom can save you time at work from Loom employees and customers like you.
                    Watch tips and tricks that help you level up your use of Loom, or submit your own.</h6>
            </div>

            <div className='px-5 sm:px-16'>
                <h1 className='font-semibold text-xl sm:text-2xl md:text-[30px] mb-5'>Featured</h1>

                <div className="mt-8 flex justify-evenly flex-wrap md:flex-nowrap md:space-x-4">
                    <div className="bg-gray-100 hover:bg-white hover:scale-[1.02] duration-200 box-shadow-hover-grey-10 rounded-3xl text-start mb-8 md:mb-0">
                        <div className=''>
                            <div className="img">
                                <img src={news1} className="w-[100%] rounded-t-3xl" alt="" />
                            </div>
                            <div className='py-5 px-5'>
                                <h3 className='text-lg font-semibold my-2'>
                                    Free
                                </h3>
                                <h1 className='font-semibold text-2xl my-5'>Deliver feedback with Loom.</h1>

                            </div>


                        </div>
                    </div>

                    <div className="bg-gray-100 hover:bg-white hover:scale-[1.02] duration-200 box-shadow-hover-grey-10 rounded-3xl text-start mb-8 md:mb-0">
                        <div className=''>
                            <div className="img">
                                <img src={news1} className="w-[100%] rounded-t-3xl" alt="" />
                            </div>
                            <div className='py-5 px-5'>
                                <h3 className='text-lg font-semibold my-2'>
                                    Free
                                </h3>
                                <h1 className='font-semibold text-2xl my-5'>Deliver feedback with Loom.</h1>

                            </div>


                        </div>
                    </div>

                    <div className="bg-gray-100 hover:bg-white hover:scale-[1.02] duration-200 box-shadow-hover-grey-10 rounded-3xl text-start mb-8 md:mb-0">
                        <div className=''>
                            <div className="img">
                                <img src={news1} className="w-[100%] rounded-t-3xl" alt="" />
                            </div>
                            <div className='py-5 px-5'>
                                <h3 className='text-lg font-semibold my-2'>
                                    Free
                                </h3>
                                <h1 className='font-semibold text-2xl my-5'>Deliver feedback with Loom.</h1>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[80px]">
                <Carousel />
            </div>
        </>
    )
}

export default Community