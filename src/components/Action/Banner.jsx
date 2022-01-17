import React from 'react'

const Banner = ({img, name, desc}) => {
    return (
        <div className='w-full md:list-action md:rounded-b-[15px] rounded-t-[15px] overflow-hidden'>
            <img src= {img} alt="img-banner" className='w-full h-[58.3333vw] object-cover cursor-pointer hover:scale-105 transition-all duration-200 ease-in'/>
            <div className='px-[27px] list-action-text'>
                <p className='text-[3.3vw] mt-[15px] mb-[10px] md:list-action-name'>{name}</p>
                <h4 className='text-[5.5vw] mt-[4px] mb-[25px] leading-[1.1] md:list-action-desc'>{desc}</h4>
            </div>
        </div>
    )
}

export default Banner
