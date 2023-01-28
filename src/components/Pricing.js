import React from 'react';

function Pricing() {
    return (
        <>
            <div className='bg-white py-10 sm:py-16 px-5 sm:px-10'>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-[40px] text-center'>Choose the plan that fits your needs.</h1>

                <div className="mt-8 flex justify-evenly flex-wrap md:flex-nowrap md:space-x-4 ">
                    <div className="min-w-[240px] md:w-[400px] max-w-[500px] md:translate-x-[30px] bg-[#EFF0FF] ease-linear duration-200 box-shadow-grey-10 py-5 px-10 md:my-10 rounded-3xl text-start">
                        <div className='py-8'>
                            <h1 className='font-bold text-3xl mb-2'>Starter</h1>
                            <h5 className='font-light text-lg text-slate-900 mb-3'>Quick game development</h5>
                            <h3 className='text-xl font-semibold mt-2'>
                                Free
                            </h3>

                            <button className='bg-[#565ADD] text-[#EEEFFF] font-medium px-6 py-2 rounded-3xl text-sm md:text-lg mt-10'>Sign Up, It's Free</button>

                            <div className='mt-8 text-sm'>
                                <li className='mb-1'>Upto 10 games</li>
                                <li className='mb-1'>Upto 10 games</li>
                                <li className='mb-1'>Upto 10 games</li>
                            </div>

                            <hr className='h-[2px] border-0 bg-violet-200 my-5' />

                            <h1 className='font-light text-sm mb-2'>Key Features</h1>
                            <div className='text-sm'>
                                <li className='mb-1'>Upto 10 games</li>
                                <li className='mb-1'>Upto 10 games</li>
                                <li className='mb-1'>Upto 10 games</li>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-[240px] md:w-[400px] max-w-[500px] z-10 bg-white ease-linear duration-200 box-shadow-grey-10 py-5 px-10 md:my-10 rounded-3xl text-start">
                        <div className='py-8'>
                            <h1 className='font-bold text-3xl mb-2'>Business</h1>
                            <h5 className='font-light text-lg text-slate-900 mb-3'>Quick game development</h5>
                            <h3 className='text-xl font-semibold mt-2'>
                                Free
                            </h3>

                            <button className='bg-[#565ADD] text-[#EEEFFF] font-medium px-6 py-2 rounded-3xl text-sm md:text-lg mt-10'>14 day trial</button>

                            <div className='mt-8 text-sm'>
                                <li className='mb-1'>Upto 10 games</li>
                                <li className='mb-1'>Upto 10 games</li>
                                <li className='mb-1'>Upto 10 games</li>
                            </div>

                            <hr className='h-[2px] border-0 bg-violet-50 my-5' />

                            <h1 className='font-light text-sm mb-2'>Key Features</h1>
                            <div className='text-sm'>
                                <li className='mb-1'>Upto 10 games</li>
                                <li className='mb-1'>Upto 10 games</li>
                                <li className='mb-1'>Upto 10 games</li>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-[240px] md:w-[400px] max-w-[500px] md:translate-x-[-30px] bg-[#EFF0FF] ease-linear duration-200 box-shadow-grey-10 py-5 px-10 md:my-10 rounded-3xl text-start">
                        <div className='py-8'>
                            <h1 className='font-bold text-3xl mb-2'>Enterprise</h1>
                            <h5 className='font-light text-lg text-slate-900 mb-3'>Quick game development</h5>
                            <h3 className='text-xl font-semibold mt-2'>
                                Free
                            </h3>

                            <button className='bg-[#565ADD] text-[#EEEFFF] font-medium px-6 py-2 rounded-3xl text-sm md:text-lg mt-10'>Sign Up, It's Free</button>

                            <div className='mt-8 text-sm'>
                                <li className='mb-1'>Upto 10 games</li>
                                <li className='mb-1'>Upto 10 games</li>
                                <li className='mb-1'>Upto 10 games</li>
                            </div>

                            <hr className='h-[2px] border-0 bg-violet-200 my-5' />

                            <h1 className='font-light text-sm mb-2'>Key Features</h1>
                            <div className='text-sm'>
                                <li className='mb-1'>Upto 10 games</li>
                                <li className='mb-1'>Upto 10 games</li>
                                <li className='mb-1'>Upto 10 games</li>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <div className="bg-[#2B1C50] py-16 px-5 sm:px-10 text-start sm:text-center rounded-r-3xl rounded-bl-3xl text-white">
                        <h1 className='font-bold text-2xl sm:text-3xl md:text-[40px] text-center'>Easily grow your business</h1>
                        <h6 className='sm:max-w-[80%] m-auto mt-4 text-lg'>The Business plan allows you to mix Creator accounts with Creator Lite accounts – so you can easily introduce more of your team to Loom for free.</h6>
                    
                        <div className="flex justify-center flex-wrap sm:flex-nowrap mt-10">
                            <div className='py-5 sm:px-5 text-center border-yellow-100'>
                                <div className='bg-[#3D2E7C] py-2 px-3 rounded-3xl max-w-fit m-auto'><i className="bi bi-check"></i> ALWAYS FREE</div>
                                <h1 className='font-semibold mt-3 mb-6 text-2xl text-center'>Easily grow your business</h1>
                                <h5 className=' mt-3 mb-6 text-slg text-center'>Creator Lite members are free with limited video recording capabilities, available on both Starter and Business.</h5>
                            </div>
                            <div className="h-[400] bg-violet-200 w-[3px]"></div>
                            <div className='py-5 sm:px-5 text-center border-r-1 border-violet-100'>
                                <div className='bg-[#3D2E7C] py-2 px-3 rounded-3xl max-w-fit m-auto'><i className="bi bi-currency-dollar"></i> Paid</div>
                                <h1 className='font-semibold mt-3 mb-6 text-2xl text-center'>Easily grow your business</h1>
                                <h5 className=' mt-3 mb-6 text-slg text-center'>Creator Lite members are free with limited video recording capabilities, available on both Starter and Business.</h5>
                            </div>

                           
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Pricing