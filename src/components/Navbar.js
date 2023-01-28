import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    const [menu, setMenu] = useState(1)

    function showMenu() {
        setMenu(menu === 1 ? 2 : 1);
    }
    useEffect(() => {
      if(menu===2){
        document.getElementsByTagName("body")[0].style.overflowY="hidden";
      }
      else{
        document.getElementsByTagName("body")[0].style.overflowY="auto";
      }
    }, [menu])
    
    function showDropdown(option) {
            let x=document.getElementsByClassName(option+" hidden")[0];
            if(x===undefined){
                document.getElementsByClassName(option)[0].classList.add('hidden');
            }
            else{
                document.getElementsByClassName(option)[0].classList.remove('hidden');
            }
    }
    return (
        <>
            <div className="bg-white-800 text-black px-5 flex justify-between items-center py-4 bg-white sticky top-0 z-40">
                <Link to="/"><h2 className="font-mono text-3xl text-blue-700 font-bold">SILE</h2></Link>
                <div className="flex justify-end space-x-4 items-center">

                    <Link className="hidden sm:block font-medium text-lg sm:text-2xl hover:underline" to='/about'>About Us</Link>
                    <Link className="hidden sm:block font-medium text-lg sm:text-2xl hover:underline" to='/'>Features</Link>
                    <Link className="hidden sm:block font-medium text-lg sm:text-2xl hover:underline" to='/'>Experience</Link>
                    <button className="btn bg-[#EFF0FF] px-3 py-2 rounded-full" onClick={showMenu} id="menuBtn">
                        {(menu === 1) && <i className="bi bi-list text-2xl text-blue-600 font-bold"></i>}
                        {(menu === 2) && <i className="bi bi-x-octagon  text-2xl font-bold"></i>}
                    </button>
                </div>
            </div>

            <div className={`h-[350px] overflow-y-auto bg-white pt-5 w-[100%] ease-in duration-300 fixed ${menu === 1 ? 'left-[100%]' : 'left-[0%]'}  z-50`} id='sideMenu'>
                <div className="links ">
                    <div className='mb-2 px-4 py-5 block sm:hidden border-b-2'>
                        <Link className="font-medium text-lg sm:text-2xl hover:underline " to="/about">About</Link>
                    </div>
                    <div className='mb-2 px-4 py-5 block sm:hidden border-b-2'>
                        <Link className="font-medium text-lg sm:text-2xl hover:underline" to="/">Use Cases</Link>
                    </div>
                    <div className='mb-2 px-4 py-5 block sm:hidden border-b-2'>
                        <Link className="font-medium text-lg sm:text-2xl hover:underline " to="/">Features</Link>
                    </div>
                    <div className='mb-2 px-4 py-5 block sm:hidden border-b-2'>
                        <Link className="font-medium text-lg sm:text-2xl hover:underline" to="/">Experience</Link>
                    </div>
                    <div className='mb-2 px-4 py-5 border-b-2'>
                        <div className="flex justify-between items-center mb-1 cursor-pointer" onClick={() => showDropdown('services')}>
                            <span className='font-medium text-lg sm:text-2xl'>Services</span>
                            <span className='font-medium text-lg sm:text-2xl'><i className="bi bi-chevron-down"></i></span>
                        </div>
                        <div className='bg-slate-100 py-3 px-2 services hidden' id='services'>
                            <div className='flex flex-col'>
                                <Link to="/new" className='mb-2 font-medium text-lg hover:underline'><i className="bi bi-card-list"></i> Listing our offering</Link>
                                <Link to="/new" className='mb-2 font-medium text-lg hover:underline'><i className="bi bi-card-list"></i> Previous Project</Link>
                            </div>
                        </div>
                    </div>
                    <div className='mb-2 px-4 py-5 border-b-2'>
                        <Link className="font-medium text-lg sm:text-2xl hover:underline" to="/pricing">Pricing</Link>
                    </div>
                    

                    <div className='mb-2 px-4 py-5 border-b-2'>
                        <div className="flex justify-between items-center mb-1 cursor-pointer" onClick={() => showDropdown('resources')}>
                            <span className='font-medium text-lg sm:text-2xl'>Resources</span>
                            <span className='font-medium text-lg sm:text-2xl'><i className="bi bi-chevron-down"></i></span>
                        </div>
                        <div className='bg-slate-100 py-3 px-2 resources hidden' id='resources'>
                            <div className='flex flex-col'>
                                <Link to="/new" className='mb-2 font-medium text-lg hover:underline'><i className="bi bi-bookmarks"></i> Bolg</Link>
                                <Link to="/new" className='mb-2 font-medium text-lg hover:underline'><i className="bi bi-card-list"></i> Expert Collective</Link>
                                <Link to="/new" className='mb-2 font-medium text-lg hover:underline'><i className="bi bi-people"></i> Community</Link>
                            </div>
                        </div>
                    </div>

                    <div className='px-4 py-5  border-b-2'>
                        <Link className="font-medium text-lg sm:text-2xl hover:underline" to="/">Sign in Try SILE for Free</Link>
                    </div>

                   
                </div>
            </div>
        </>
    )
}

export default Navbar