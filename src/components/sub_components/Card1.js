import React from 'react'

function Card1(props) {
  return (
    <>
        <div className={`p-5 sm:p-10 rounded-[35px] ${"bg-["+props.bgColor+"] "} min-w-[300px] max-w-[400px] h-[600px] overflow-auto`}>
            <h1 className={`text-center font-semibold text-3xl ${"text-["+props.headingColor+"]"}]`}>{`${props.heading}`}</h1>
            <img src={props.img} alt="cardImg" className='my-8 w-[100%] rounded-[35px]' />
            <h6 className={`font-normal text-sm ${"text-["+props.paragraphColor+"]"}]`}>{`${props.paragraph}`}</h6>
        </div>
    </>
  )
}

export default Card1