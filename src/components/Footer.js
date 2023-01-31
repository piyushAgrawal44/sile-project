import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="px-5 sm:px-10 translate-y-[30px]">
                <div className="bg-white box-shadow-grey  px-5 sm:px-10 py-10 sm:py-12 max-w-[800px] m-auto  rounded-3xl ">
                    <div className="flex flex-wrap justify-between md:flex-nowrap items-center">
                        <input type="text" className='px-4 py-3 border-black border-2 rounded-3xl mb-3 sm:mb-0 max-w-[100%]' placeholder='Enter your email' />
                        <button className='bg-blue-700 px-5 py-3 rounded-3xl text-white text-sm mb-3 sm:mb-0'>Contact Now</button>
                    </div>
                </div>
            </div>
            <div className="footer  py-10 pt-[80px] px-10 bg-[#EFF0FF]">

                <div className="flex justify-evenly flex-wrap  sm:space-x-5 sm:flex-nowrap">
                    <div className="min-w-[100px] mb-5 md:mb-0">
                        <h1 className='font-bold text-lg mb-4 text-[#3D2E7C]'>Links</h1>
                        <Link className='cursor-pointer block text-sm font-light mb-2 text-[#3D2E7C] hover:font-normal' to="/">Home</Link>
                        <Link className='cursor-pointer block text-sm font-light mb-2 text-[#3D2E7C] hover:font-normal' to="/about">About</Link>
                        <Link className='cursor-pointer block text-sm font-light mb-2 text-[#3D2E7C] hover:font-normal' to="/">Home</Link>
                    </div>

                    <div className="min-w-[100px] mb-5 md:mb-0">
                        <h1 className='font-bold text-lg mb-4 text-[#3D2E7C]'>Products</h1>
                        <Link className='cursor-pointer block text-sm font-light mb-2 text-[#3D2E7C] hover:font-normal' to="/pricing">Pricing</Link>
                        <Link className='cursor-pointer block text-sm font-light mb-2 text-[#3D2E7C] hover:font-normal' to="/">Website</Link>
                        <Link className='cursor-pointer block text-sm font-light mb-2 text-[#3D2E7C] hover:font-normal' to="/">Games</Link>
                    </div>

                    <div className="min-w-[100px] mb-5 md:mb-0">
                        <h1 className='font-bold text-lg mb-4 text-[#3D2E7C]'>Business</h1>
                        <Link className='cursor-pointer block text-sm font-light mb-2 text-[#3D2E7C] hover:font-normal' to="/pricing">Pricing</Link>
                        <Link className='cursor-pointer block text-sm font-light mb-2 text-[#3D2E7C] hover:font-normal' to="/">Website</Link>
                        <Link className='cursor-pointer block text-sm font-light mb-2 text-[#3D2E7C] hover:font-normal' to="/">Games</Link>
                    </div>

                    <div className="min-w-[100px] mb-5 md:mb-0">
                        <h1 className='font-bold text-lg mb-4 text-[#3D2E7C]'>Resources</h1>
                        <Link className='cursor-pointer block text-sm font-light mb-2 text-[#3D2E7C] hover:font-normal' to="/pricing">Blog</Link>
                        <Link className='cursor-pointer block text-sm font-light mb-2 text-[#3D2E7C] hover:font-normal' to="/">Website</Link>
                        <Link className='cursor-pointer block text-sm font-light mb-2 text-[#3D2E7C] hover:font-normal' to="/">Community</Link>
                    </div>
                </div>
            </div>
            <div className="social_links bg-[#f6f6fb] px-5 pt-5 flex justify-center md:justify-between flex-wrap md:flex-nowrap md:space-x-4 items-center ">
                <div className="social_icons flex justify-center md:justify-start space-x-2 mb-2">
                    <Link to='/' className="rounded-full py-2 px-3 bg-[#EFF0FF] text-violet-600 text-lg sm:text-xl hover:bg-violet-600 hover:text-white hover:shadow-2xl hover:shadow-gray-200 duration-100">
                        <i class="bi bi-instagram"></i>
                    </Link>
                    <Link to='/' className="rounded-full py-2 px-3 bg-[#EFF0FF] text-violet-600 text-lg sm:text-xl hover:bg-violet-600 hover:text-white hover:shadow-2xl hover:shadow-gray-200 duration-100">
                        <i class="bi bi-facebook"></i>
                    </Link>
                    <Link to='/' className="rounded-full py-2 px-3 bg-[#EFF0FF] text-violet-600 text-lg sm:text-xl hover:bg-violet-600 hover:text-white hover:shadow-2xl hover:shadow-gray-200 duration-100">
                        <i class="bi bi-twitter"></i>
                    </Link>
                </div>
                <div className="copyright font-semibold mb-2 text-center md:text-end">
                    <p className='text-sm sm:text-lg'>© 2023, SILE. All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer