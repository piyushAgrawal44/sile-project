import React from 'react'
import img from "../images/man.png";
import img2 from "../images/news.webp";
import img3 from "../images/team1.webp";
import img4 from "../images/team2.webp";
function Slider() {
    let images = [{key:1, img:img},{key:2, img:img2},{key:3, img:img3},{key:4, img:img4},{key:5, img:img2},{key:6, img:img4},{key:7, img:img3}]
    return (
        <>
            <div className=" flex items-center justify-center">
                {/* 1. */}
                <div className="w-[200%] h-[100px] relative overflow-hidden ">
                    {/* 2. */}
                    <div className="w-[200%] flex items-center justify-around absolute left-0 animate gap-20 animate">
                        {/* 3 */}
                        {images.map((i) => {
                            return (
                                <div className="" key={i.key}>
                                    <img src={i.img} className="min-w-[60px] max-w-[100px]" alt="customer" />
                                </div>
                            );
                        })}
                        {images.map((i) => {
                            return (
                                <div className="" key={i.key}>
                                    <img src={i.img} className="min-w-[60px] max-w-[100px]" alt="customer" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider