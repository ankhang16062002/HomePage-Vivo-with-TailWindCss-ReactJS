import {useState, useEffect} from 'react'
import MenuItem from './MenuItem'
import {dataSmartPhones} from '../../assets/fakedata'
import { Swiper, SwiperSlide } from 'swiper/react';

const selectOption = [
     {
          title: 'Dòng X',
          type: 'x',
     },
     {
          title: 'Dòng V',
          type: 'v',
     },
     {
          title: 'Dòng S',
          type: 's',
     },
     {
          title: 'Dòng Y',
          type: 'y',
     },
     {
          title: 'Dòng U',
          type: 'u',
     },
]

const swiperOption = {
     spaceBetween: 0,
     slidesPerView: 'auto',
     grabCursor: true,
     speed: 250,
}

const filterData = (type) => {
     return dataSmartPhones.filter((item) => item.type === type)
}

const Menu = ({isOpen}) => {
     const [type, setType] = useState('x')
     const [openSup, setOpenSup] = useState(false)
     const [dataType, setDataType] = useState(() => {
          return filterData('x')
     })

     useEffect(() => {
          setDataType(filterData(type))
     }, [type])

     const handleClick = () => {
          setOpenSup(!openSup)
     }

    return (
        <div className={`w-full absolute top-[56px] left-0 bg-main-color h-0 overflow-hidden transtion-open-menu ${isOpen ? 'h-[calc(100vh-56px)]' : ''}`}>
           <ul className='absolute top-0 left-0 w-full h-[calc(100vh-126px)] overflow-y-auto pt-[15px]'>
               <li className='item-menu ml-[30px] mr-0 text-[#6E6E78]'>
                    <a className='link-menu' href="http://localhost:3000">Sản phẩm</a>
                    <div className='mb-[35px]'>
                         <ul className='flex flex-row justify-start'>
                              {
                                   selectOption.map((item, index) => (
                                        <li 
                                             className= {`text-[14px] mr-[15px] ${item.type === type ? 'text-[#FFFFFF]' : ''}`}
                                             onClick = {() => setType(item.type)} 
                                             key ={index}
                                        >
                                             {item.title}
                                        </li>
                                   ))
                              }
                         </ul>
                         <Swiper {...swiperOption} className='my-[30px]'>
                              {
                                   dataType[0].data.map((item, index) => (
                                        <SwiperSlide className='swiper-slide' key={index}>
                                             <MenuItem name = {item.name} img = {item.img}/>
                                        </SwiperSlide>
                                   ))
                              }
                         </Swiper>
                         
                    </div>
               </li>
               <li className='item-menu'>
                    <a className='link-menu' href="http://localhost:3000">Funtouch OS</a>
               </li>
               <li className='item-menu'>
                    <a className='link-menu' href="http://localhost:3000">vivography</a>
               </li>
               <li className='item-menu'>
                    <a className='link-menu' href="http://localhost:3000">Hệ thống cửa hàng</a>
               </li>
               <li className='item-menu'>
                    <a className='link-menu' href="http://localhost:3000">Khám phá</a>
               </li>
               <li className='item-menu relative'>
                    <a className='link-menu' href="http://localhost:3000">Hỗ trợ</a>
                    <div className='w-[13px] absolute top-[25px] right-0' onClick = {handleClick}>
                         <div className='w-full h-[7px] py-[3px] bg-clip-content bg-[#A7A9AC] absolute'></div>
                         <div 
                              className={`w-full h-[7px] py-[3px] bg-clip-content bg-[#A7A9AC] rotate-[-90deg] absolute transition-transform duration-300 ease-linear ${openSup ? 'rotate-[0deg]' : ''}`}
                         >
                         </div>
                    </div>
                    <div className={`text-[#A7A9AC] flex flex-col text-[16px] overflow-hidden h-0 ${openSup ? 'h-max' : ''}`}>
                         <a href="http://localhost:3000" className='py-[8px]'>Chăm sóc khách hàng</a>
                         <a href="http://localhost:3000" className='py-[8px]'>Cập nhật hệ thống</a>
                         <a href="http://localhost:3000" className='py-[8px]'>Câu hỏi thường gặp</a>
                    </div>
               </li>
               <li className='item-menu'>
                    <a className='link-menu' href="http://localhost:3000">Về vivo</a>
               </li>
               <li className='item-menu'>
                    <a className='link-menu' href="http://localhost:3000">Tuyển dụng</a>
               </li>
               <li className='item-menu'>
                    <a className='link-menu' href="http://localhost:3000">Liên hệ</a>
               </li>
           </ul>
        </div>
    )
}

export default Menu
