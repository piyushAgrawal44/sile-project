import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    const [menu, setMenu] = useState(1)

    function showMenu() {
        setMenu(menu === 1 ? 2 : 1);
    }

    function showDropdown(option) {
        let x = document.getElementsByClassName(option + " hidden")[0];
        if (x === undefined) {
            document.getElementsByClassName(option)[0].classList.add('hidden');
            document.getElementById(option+"_dropdown_icon").classList.remove('rotate-180');
        }
        else {
            document.getElementsByClassName(option)[0].classList.remove('hidden');
            document.getElementById(option+"_dropdown_icon").classList.add('rotate-180');

        }
    }
    return (
        <>
            <div className="text-black  px-5 flex justify-between items-center py-4 bg-white sticky
             top-0 z-40 h-[80px]">
                <Link to="/"><h2 className="font-mono text-3xl text-[#565ADD] font-bold">SILE</h2></Link>
                <div className="flex justify-end space-x-4 items-center">


                    <button className='px-5 py-3 text-white font-normal text-sm bg-[#565ADD] hover:shadow-md hover:shadow-violet-300 duration-75 hover:translate-y-[-1px] rounded-[40px] hidden sm:block'>Sign in Try SILE for Free</button>
                    <button className="btn bg-[#EFF0FF] px-3 py-2 rounded-full" onClick={showMenu} id="menuBtn">
                        {(menu === 1) && <i className="bi bi-list text-2xl text-[#565ADD] font-bold"></i>}
                        {(menu === 2) && <i className="bi bi-x-circle text-[#565ADD] text-2xl font-bold"></i>}
                    </button>
                </div>
            </div>

            <div className={`top-100vh-80px overflow-y-auto bg-white w-[100%]  duration-300 fixed ${menu === 1 ? 'right-[100%]' : 'right-[0%]'}  top-[80px] z-50 scrollbar-hidden`} id='sideMenu'>
                <div className="links ">
                    <Link to="/about" onClick={showMenu} className='duration-200 scale-95 hover:bg-gray-50 px-5 py-4 border-b-2 flex items-stretch justify-between font-normal text-lg sm:text-xl'>
                        <span>About</span>
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                    <Link to="/usecases" onClick={showMenu} className='duration-200 scale-95 hover:bg-gray-50 px-5 py-4 border-b-2 flex items-stretch justify-between font-normal text-lg sm:text-xl'>
                        <span>Use Cases</span>
                        <i className="bi bi-arrow-right"></i>
                    </Link>

                    <Link to="/features" onClick={showMenu} className='duration-200 scale-95 hover:bg-gray-50 px-5 py-4 border-b-2 flex items-stretch justify-between font-normal text-lg sm:text-xl'>
                        <span>Features</span>
                        <i className="bi bi-arrow-right"></i>
                    </Link>

                    <Link to="/experience" onClick={showMenu} className='duration-200 scale-95 hover:bg-gray-50 px-5 py-4 border-b-2 flex items-stretch justify-between font-normal text-lg sm:text-xl'>
                        <span>Experience</span>
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                    <div className='duration-200 scale-95 hover:bg-gray-50 border-b-2 px-5 py-4'>
                        <div className="flex justify-between  items-center  cursor-pointer" onClick={() => showDropdown('services')}>
                            <span className='font-normal text-lg sm:text-xl'>Services</span>
                            <span className='font-normal text-lg sm:text-xl duration-200' 
                            id='services_dropdown_icon'><i className="bi bi-chevron-down"></i></span>
                        </div>
                        <div className=' py-3 px-2 services hidden' id='services'>
                            <div className='flex flex-col'>
                                <Link onClick={showMenu} to="/new" className='font-normal text-lg mb-1'><i className="bi bi-card-list"></i> Listing our offering</Link>
                                <Link onClick={showMenu} to="/new" className='font-normal text-lg mb-1'><i className="bi bi-card-list"></i> Previous Project</Link>
                            </div>
                        </div>
                    </div>
                    <Link to="/pricing" onClick={showMenu} className='duration-200 scale-95 hover:bg-gray-50 px-5 py-4 border-b-2 flex items-stretch justify-between font-normal text-lg sm:text-xl'>
                        <span>Pricing</span>
                        <i className="bi bi-arrow-right"></i>
                    </Link>


                    <div className='duration-200 scale-95 hover:bg-gray-50 px-5 py-4 border-b-2'>
                        <div className="flex justify-between items-center mb-1 cursor-pointer" onClick={() => showDropdown('resources')}>
                            <span className='font-normal text-lg sm:text-xl'>Resources</span>
                            <span className='font-normal text-lg sm:text-xl duration-200' id='resources_dropdown_icon'><i className="bi bi-chevron-down"></i></span>
                        </div>
                        <div className=' py-3 px-2 resources hidden' id='resources'>
                            <div className='flex flex-col'>
                                <Link onClick={showMenu} to="/new" className=' font-normal text-lg mb-1'><i className="bi bi-bookmarks"></i> Bolg</Link>
                                <Link onClick={showMenu} to="/experts-collective" className=' font-normal text-lg mb-1'><i className="bi bi-card-list"></i> Expert Collective</Link>
                                <Link onClick={showMenu} to="/community" className=' font-normal text-lg mb-1'><i className="bi bi-people"></i> Community</Link>
                            </div>
                        </div>
                    </div>

                    <Link to="/about" onClick={showMenu} className='duration-200 scale-95 hover:bg-gray-50 px-5 py-4 border-b-2 flex items-stretch justify-between font-normal text-lg sm:text-xl'>
                        <span>Signin to try SILE for free </span>
                        <i className="bi bi-arrow-right"></i>
                    </Link>



                    <div className='px-5 py-4  border-b-2 block sm:hidden'>
                        <button className='px-5 py-3 text-white font-normal text-sm bg-[#565ADD] hover:shadow-2xl hover:shadow-violet-300 duration-75 hover:translate-y-[-1px] rounded-[40px] '>Sign in Try SILE for Free</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar