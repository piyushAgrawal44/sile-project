import React from 'react'
import img1 from "../images/company.svg";
import img2 from "../images/man.png";

function Carousel() {

    function leftClick() {
        let activeCard = document.getElementsByClassName("card active")[0].id;

        if (activeCard === 'card2') {
            document.getElementById("card2").style.left = "98%";
            document.getElementById(activeCard).classList.remove('active');
            document.getElementById("card1").classList.add('active');
            document.getElementById("card1").style.left = "5%";
            document.getElementsByClassName('btn1')[0].classList.add('disabled')

        } else if (activeCard === 'card3') {
            document.getElementById("card3").style.left = "98%";
            document.getElementById(activeCard).classList.remove('active');
            document.getElementById("card2").classList.add('active');
            document.getElementById("card2").style.left = "5%";
            document.getElementsByClassName('btn2')[0].classList.remove('disabled')

        }

    }

    function rightClick() {
        let activeCard = document.getElementsByClassName("card active")[0].id;
        if (activeCard === 'card2') {
            document.getElementById("card2").style.left = "-98%";
            document.getElementById(activeCard).classList.remove('active');
            document.getElementById("card3").classList.add('active');
            document.getElementById("card3").style.left = "5%";
            document.getElementsByClassName('btn2')[0].classList.add('disabled')


        } else if (activeCard === 'card1') {
            document.getElementById("card1").style.left = "-88%";
            document.getElementById(activeCard).classList.remove('active');
            document.getElementById("card2").classList.add('active');
            document.getElementById("card2").style.left = "5%";
            document.getElementsByClassName('btn1')[0].classList.remove('disabled')
        }
    }
    return (
        <>
            <div className='relative p-0 overflow-hidden w-[100%] h-[360px] '>
                <div className="card card1 absolute  duration-300 bg-[#E3F3FF] p-5 sm:px-10 sm:py-10 w-[90%] h-[360px] left-[-88%] rounded-3xl" id='card1'>
                    <div className="text-center img h-[50px] mb-5 sm:mb-10">
                        <img src={img1} className='max-w-[100px] m-auto' alt="company" />
                    </div>
                    <div className='h-[120px] overflow-auto scrollbar-hidden text-justify sm:w-[90%] m-auto mb-5'>
                        <span className='text-sm sm:text-xl font-medium text-[#2B1C50]'>"1st Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatem sit quia nesciunt ? Reiciendis, impedit Reiciendis, impedit. Reiciendis, impedit Reiciendis, impedit."</span>
                    </div>
                    <div className='h-[60px] flex items-center justify-center space-x-2'>
                        <div>
                            <img src={img2} className='max-w-[50px] sm:max-w-[70px] m-auto' alt="customer" />
                        </div>
                        <div className="flex flex-col space-y-1 h-[60px] overflow-auto scrollbar-hidden">
                            <span className='font-medium text-sm sm:text-lg text-[#2B1C50]'>Kieran Flanagan</span>
                            <span className='font-light text-xs text-[#2B1C50]'>VP of Marketing, HubSpot</span>
                        </div>
                    </div>
                </div>

                <div className="card active card2 absolute  duration-300 bg-[#EFF0FF] p-5 sm:px-10 sm:py-10 w-[90%] h-[360px] left-[5%] rounded-3xl" id='card2'>
                    <div className="text-center img h-[50px] mb-5 sm:mb-10">
                        <img src={img1} className='max-w-[100px] m-auto' alt="company" />
                    </div>
                    <div className='h-[120px] overflow-auto scrollbar-hidden text-justify sm:w-[90%] m-auto mb-5'>
                        <span className='text-sm sm:text-xl font-medium text-[#2B1C50]'>"2nd Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatem sit quia nesciunt ? Reiciendis, impedit Reiciendis, impedit. Reiciendis, impedit Reiciendis, impedit."</span>
                    </div>
                    <div className='h-[60px] flex items-center justify-center space-x-2'>
                        <div>
                            <img src={img2} className='max-w-[50px] sm:max-w-[70px] m-auto' alt="customer" />
                        </div>
                        <div className="flex flex-col space-y-1 h-[60px] overflow-auto scrollbar-hidden">
                            <span className='font-medium text-sm sm:text-lg text-[#2B1C50]'>Kieran Flanagan</span>
                            <span className='font-light text-xs text-[#2B1C50]'>VP of Marketing, HubSpot</span>
                        </div>
                    </div>
                </div>

                <div className="card card3 absolute  duration-300 bg-[#F8EDFB] p-5 sm:px-10 sm:py-10 w-[90%] h-[360px] left-[98%] rounded-3xl" id='card3'>
                    <div className="text-center img h-[50px] mb-5 sm:mb-10">
                        <img src={img1} className='max-w-[100px] m-auto' alt="company" />
                    </div>
                    <div className='h-[120px] overflow-auto scrollbar-hidden text-justify sm:w-[90%] m-auto mb-5'>
                        <span className='text-sm sm:text-xl font-medium text-[#2B1C50]'>"3rd Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatem sit quia nesciunt ? Reiciendis, impedit Reiciendis, impedit. Reiciendis, impedit Reiciendis, impedit."</span>
                    </div>
                    <div className='h-[60px] flex items-center justify-center space-x-2'>
                        <div>
                            <img src={img2} className='max-w-[50px] sm:max-w-[70px] m-auto' alt="customer" />
                        </div>
                        <div className="flex flex-col space-y-1 h-[60px] overflow-auto scrollbar-hidden">
                            <span className='font-medium text-sm sm:text-lg text-[#2B1C50]'>Kieran Flanagan</span>
                            <span className='font-light text-xs text-[#2B1C50]'>VP of Marketing, HubSpot</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex items-center  justify-center space-x-4 mt-3 translate-y-[-40px]">
                <span className='btn1 cursor-pointer rounded-full bg-white shadow-lg px-3 py-2 flex items-center justify-center' onClick={leftClick}>
                    <i className="bi bi-arrow-left text-2xl font-extrabold "></i>
                </span>
                <span className='btn2 cursor-pointer rounded-full bg-white shadow-lg px-3 py-2 flex items-center justify-center' onClick={rightClick}>
                    <i className="bi bi-arrow-right text-2xl font-extrabold "></i>
                </span>
            </div>
        </>
    )
}

export default Carousel