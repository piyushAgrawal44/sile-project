import React from 'react'
import img2 from "../images/man.png";

function Carousel() {

    function leftClick(){
        let activeCard=document.getElementsByClassName("card active")[0].id;

        if(activeCard === 'card2'){
            document.getElementById("card2").style.left="98%";
            document.getElementById(activeCard).classList.remove('active');
            document.getElementById("card1").classList.add('active');
            document.getElementById("card1").style.left="5%";
            document.getElementsByClassName('btn1')[0].classList.add('disabled')

        } else if(activeCard === 'card3'){
            document.getElementById("card3").style.left="98%";
            document.getElementById(activeCard).classList.remove('active');
            document.getElementById("card2").classList.add('active');
            document.getElementById("card2").style.left="5%";
            document.getElementsByClassName('btn2')[0].classList.remove('disabled')

        }

    }

    function rightClick(){
        let activeCard=document.getElementsByClassName("card active")[0].id;
        if(activeCard === 'card2'){
            document.getElementById("card2").style.left="-98%";
            document.getElementById(activeCard).classList.remove('active');
            document.getElementById("card3").classList.add('active');
            document.getElementById("card3").style.left="5%";
            document.getElementsByClassName('btn2')[0].classList.add('disabled')


        } else if(activeCard === 'card1'){
            document.getElementById("card1").style.left="-88%";
            document.getElementById(activeCard).classList.remove('active');
            document.getElementById("card2").classList.add('active');
            document.getElementById("card2").style.left="5%";
            document.getElementsByClassName('btn1')[0].classList.remove('disabled')
        }
    }
    return (
        <>
            <div className='relative p-0 overflow-hidden w-[100%] h-[340px] '>
                <div className="card card1 absolute ease-in duration-700 bg-sub-color3 p-5 sm:px-10 sm:py-10 w-[90%] h-[340px] left-[-88%] rounded-3xl" id='card1'>
                    <div className="text-center img h-[100px]">
                        <img src={img2} className='max-w-[100px] m-auto' alt="customer" />
                    </div>
                    <div className='h-[150px] overflow-auto scrollbar-hidden mt-3 text-justify'>

                        <span className='text-sm sm:text-lg'>1st Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatem sit quia nesciunt fuga aliquid debitis quod aut totam a! Sed, iure? Rerum, soluta fuga quia perferendis fugit sequi, iusto nihil deleniti doloremque eius ipsa harum quo minus cum nesciunt hic consequatur? Reiciendis, impedit.</span>

                    </div>
                </div>

                <div className="card active card2 absolute ease-in duration-700 bg-sub-color1 p-5 sm:px-10 sm:py-10 w-[90%] h-[340px] left-[5%] rounded-3xl" id='card2'>
                    <div className="text-center img h-[100px]">
                        <img src={img2} className='max-w-[100px] m-auto' alt="customer" />
                    </div>
                    <div className='h-[165px] overflow-auto scrollbar-hidden mt-3 text-justify'>
                        <span className='text-sm sm:text-lg'>2nd Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatem sit quia nesciunt fuga aliquid debitis quod aut totam a! Sed, iure? Rerum, soluta fuga quia perferendis fugit sequi, iusto nihil deleniti doloremque eius ipsa harum quo minus cum nesciunt hic consequatur? Reiciendis, impedit.</span>

                    </div>
                </div>
                <div className="card card3 absolute ease-in duration-700 bg-sub-color2 p-5 sm:px-10 sm:py-10 w-[90%] h-[340px] left-[98%] rounded-3xl" id='card3'>
                    <div className="text-center img h-[100px]">
                        <img src={img2} className='max-w-[100px] m-auto' alt="customer" />
                    </div>
                    <div className='h-[150px] overflow-auto scrollbar-hidden mt-3 text-justify'>

                        <span className='text-sm sm:text-lg'>3rd Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatem sit quia nesciunt fuga aliquid debitis quod aut totam a! Sed, iure? Rerum, soluta fuga quia perferendis fugit sequi, iusto nihil deleniti doloremque eius ipsa harum quo minus cum nesciunt hic consequatur? Reiciendis, impedit.</span>

                    </div>
                </div>
            </div>


            <div className="flex items-center  justify-center space-x-4 mt-3">
                <span className='btn1 cursor-pointer' onClick={leftClick}>
                    <i className="bi bi-caret-left-square-fill text-2xl "></i>
                </span>
                <span className='btn2 cursor-pointer' onClick={rightClick}>
                    <i className="bi bi-caret-right-square-fill text-2xl "></i>
                </span>
            </div>
        </>
    )
}

export default Carousel