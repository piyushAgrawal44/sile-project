import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="px-5 sm:px-10 translate-y-[30px]">
                <div className="bg-white box-shadow-grey  px-5 sm:px-10 py-10 sm:py-12 max-w-[800px] m-auto  rounded-3xl ">
                    <div className="flex flex-wrap justify-between md:flex-nowrap items-center">
                        <input type="text" className='px-4 py-3 border-black border-2 rounded-3xl mb-3 sm:mb-0 max-w-[100%]' placeholder='Enter your email' />
                        <button className='bg-blue-700 px-5 py-3 rounded-3xl text-white text-3sm mb-3 sm:mb-0'>Contact Now</button>
                    </div>
                </div>
            </div>
            <div className="footer  py-10 pt-[80px] px-10 bg-[#EFF0FF]">

                <div className="flex justify-evenly flex-wrap  sm:space-x-5 sm:flex-nowrap">
                    <div className="min-w-[100px] mb-5 md:mb-0">
                        <h1 className='font-bold text-xl mb-4'>Links</h1>
                        <Link className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' to="/">Home</Link>
                        <Link className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' to="/about">About</Link>
                        <Link className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' to="/">Home</Link>
                    </div>

                    <div className="min-w-[100px] mb-5 md:mb-0">
                        <h1 className='font-bold text-xl mb-4'>Products</h1>
                        <Link className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' to="/pricing">Pricing</Link>
                        <Link className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' to="/">Website</Link>
                        <Link className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' to="/">Games</Link>
                    </div>

                    <div className="min-w-[100px] mb-5 md:mb-0">
                        <h1 className='font-bold text-xl mb-4'>Business</h1>
                        <Link className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' to="/pricing">Pricing</Link>
                        <Link className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' to="/">Website</Link>
                        <Link className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' to="/">Games</Link>
                    </div>

                    <div className="min-w-[100px] mb-5 md:mb-0">
                        <h1 className='font-bold text-xl mb-4'>Business</h1>
                        <Link className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' to="/pricing">Pricing</Link>
                        <Link className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' to="/">Website</Link>
                        <Link className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' to="/">Games</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer