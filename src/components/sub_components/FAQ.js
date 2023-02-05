import React from 'react'

function FAQ() {

    function showFAQ(option) {
        let x = document.getElementsByClassName(option + " hidden")[0];
        if (x === undefined) {
            document.getElementsByClassName(option)[0].classList.add('hidden');
            document.getElementById(option+"_plus_icon").classList.remove("rotate-45");
        }
        else {
            document.getElementsByClassName(option)[0].classList.remove('hidden');
            document.getElementById(option+"_plus_icon").classList.add("rotate-45");
        }
    }
    return (
        <>
            <div className='py-16 px-5 sm:px-16 bg-[#EFF0FF] my-[80px] '>
                <h1 className='text-center text-3xl sm:text-[35px] font-bold text-[#2B1C50] mb-16'>FAQs</h1>

                <div className='mb-10 px-4 sm:px-10 py-8 bg-[#D1D1F7] rounded-[45px]  cursor-pointer' onClick={() => showFAQ('ques1')}>
                    <div className="flex justify-between space-x-3 items-center mb-1">
                        <span className='font-semibold text-lg sm:text-2xl md:text-3xl text-[#3D2E7C]'>Can I start a free trial of paid plans?</span>
                        <span className='font-semibold text-lg sm:text-2xl md:text-3xl text-[#3D2E7C] duration-300' id='ques1_plus_icon'><i className="bi bi-plus-lg " ></i></span>
                    </div>
                    <div className='p-1 ques1 hidden' id='ques1'>
                        <hr className='bg-[#3D2E7C]' />
                        <p className='mt-2 text-sm sm:text-lg text-[#3D2E7C]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, saepe eius? Dicta hic ipsum sit, magni nobis numquam aut quisquam repellat exercitationem odio, eum voluptatem fugiat modi dolores velit.</p>
                    </div>
                </div>

                <div className='mb-10 px-4 sm:px-10 py-8 bg-[#D1D1F7] rounded-[45px]  cursor-pointer' onClick={() => showFAQ('ques2')}>
                    <div className="flex justify-between space-x-3 items-center mb-1">
                        <span className='font-semibold text-lg sm:text-2xl md:text-3xl text-[#3D2E7C]'>What are my payment options?</span>
                        <span className='font-semibold text-lg sm:text-2xl md:text-3xl text-[#3D2E7C] duration-300' id='ques2_plus_icon'><i className="bi bi-plus-lg " ></i></span>
                    </div>
                    <div className='p-1 ques2 hidden' id='ques2'>
                        <hr className='bg-[#3D2E7C]' />
                        <p className='mt-2 text-sm sm:text-lg text-[#3D2E7C]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, saepe eius? Dicta hic ipsum sit, magni nobis numquam aut quisquam repellat exercitationem odio, eum voluptatem fugiat modi dolores velit.</p>
                    </div>
                </div>

                <div className='mb-10 px-4 sm:px-10 py-8 bg-[#D1D1F7] rounded-[45px]  cursor-pointer' onClick={() => showFAQ('ques3')}>
                    <div className="flex justify-between space-x-3 items-center mb-1">
                        <span className='font-semibold text-lg sm:text-2xl md:text-3xl text-[#3D2E7C]'>What is the difference between Creator Lite and Creator?</span>
                        <span className='font-semibold text-lg sm:text-2xl md:text-3xl text-[#3D2E7C] duration-300' id='ques3_plus_icon'><i className="bi bi-plus-lg " ></i></span>
                    </div>
                    <div className='p-1 ques3 hidden' id='ques3'>
                        <hr className='bg-[#3D2E7C]' />
                        <p className='mt-2 text-sm sm:text-lg text-[#3D2E7C]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, saepe eius? Dicta hic ipsum sit, magni nobis numquam aut quisquam repellat exercitationem odio, eum voluptatem fugiat modi dolores velit.</p>
                    </div>
                </div>
            </div>
            <br /><br />
        </>
    )
}

export default FAQ