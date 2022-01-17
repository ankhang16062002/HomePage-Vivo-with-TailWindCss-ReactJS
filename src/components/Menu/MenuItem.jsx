import React from 'react'

const MenuItem = ({name, img}) => {
    return (
        <div className='w-full'>
            <a href="http://localhost:3000" className='block'>
                <img src= {img} alt="img-smart-phone" className='w-full mb-[12px]'/>
                <p className='text-[#fff] text-[12px] text-center'>{name}</p>
            </a>
        </div>
    )
}

export default MenuItem
