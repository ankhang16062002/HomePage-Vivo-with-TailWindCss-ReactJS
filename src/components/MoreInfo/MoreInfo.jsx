import {useState} from 'react'
import {listMoreInfo} from '../../assets/fakedata'
import {FcNext, FcPrevious} from 'react-icons/fc'

const MoreInfo = () => {
    const [indexImg, setIndexImg] = useState(0)

    const handleClick = (type) => {
        if(type === 'prev') {
            setIndexImg(indexImg === 0 ? listMoreInfo.length - 1 : indexImg - 1)
        } else {
            setIndexImg(indexImg === listMoreInfo.length - 1 ? 0 : indexImg + 1)
        }
    }

    return (
        <div className=' bg-main-color relative px-[15px] pt-[50px] text-white'>
            <h1 className= 'text-[28px] md:text-[44px] md:mb[25px] uppercase text-center'>tiên phong dẫn đầu công nghệ</h1>
            {
                listMoreInfo.map((item, index) => (
                    <div className= {`flex flex-col items-center justify-end ${indexImg === index ? 'block' : 'hidden'}`} key={index}>
                        <p className='mb-[40px] text-center text-[14px] border-b-[1px] border-[#fff] w-max cursor-pointer'>{item.name}</p>
                        <button className='m-auto btn-outline'>Tìm hiểu thêm</button>
                        <img src= {item.img} alt="img-moreinfo" className='w-full h-1/2 object-cover' />
                    </div>
                )) 
            }
            <FcPrevious className='absolute top-1/2 left-[15px] md:left-[60px] md:text-[35px] text-[25px] cursor-pointer' onClick = {() => handleClick('prev')}/>
            <FcNext className='absolute top-1/2 right-[15px] md:right-[60px] md:text-[35px] text-[25px] cursor-pointer' onClick ={() => handleClick('next')}/>
        </div>
    )
}

export default MoreInfo
