import React from 'react'

function Footer() {
    return (
        <>
            <div className="px-5 sm:px-10">
                <div className="bg-white box-shadow-grey  px-5 sm:px-10 py-10 sm:py-12 max-w-[800px] m-auto translate-y-[30px] rounded-3xl ">
                    <div className="flex flex-wrap justify-between md:flex-nowrap items-center">
                        <input type="text" className='px-4 py-3 border-black border-2 rounded-3xl mb-3 sm:mb-0 max-w-[100%]' placeholder='Enter your email' />
                        <button className='bg-blue-700 px-5 py-3 rounded-3xl text-white text-3sm mb-3 sm:mb-0'>Contact Now</button>
                    </div>
                </div>
            </div>
            <div className="footer  py-10 pt-[80px] px-10 bg-sub-color1">

                <div className="flex justify-evenly flex-wrap  sm:space-x-5 sm:flex-nowrap">
                    <div className="min-w-[100px] mb-5 md:mb-0">
                        <h1 className='font-bold text-xl mb-4'>Links</h1>
                        <a className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' href="/">Home</a>
                        <a className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' href="/">About</a>
                        <a className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' href="/">Home</a>
                    </div>

                    <div className="min-w-[100px] mb-5 md:mb-0">
                        <h1 className='font-bold text-xl mb-4'>Products</h1>
                        <a className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' href="/">Pricing</a>
                        <a className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' href="/">Website</a>
                        <a className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' href="/">Games</a>
                    </div>

                    <div className="min-w-[100px] mb-5 md:mb-0">
                        <h1 className='font-bold text-xl mb-4'>Business</h1>
                        <a className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' href="/">Pricing</a>
                        <a className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' href="/">Website</a>
                        <a className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' href="/">Games</a>
                    </div>

                    <div className="min-w-[100px] mb-5 md:mb-0">
                        <h1 className='font-bold text-xl mb-4'>Business</h1>
                        <a className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' href="/">Pricing</a>
                        <a className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' href="/">Website</a>
                        <a className='cursor-pointer block text-sm font-light font-["Inter"] mb-2' href="/">Games</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer