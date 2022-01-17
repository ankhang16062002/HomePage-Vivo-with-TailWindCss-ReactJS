import {imgDiscover} from '../../assets/fakedata'

const Discover = () => {
    const {imgDiscoverMobile,imgDiscoverTablet} = imgDiscover
    return (
        <div className='relative px-[20px] mt-[20px]'>
            <div className='absolute left-0 top-[30px] w-full px-[15px] text-center text-second-color z-10'>
                <h5 className='text-[12px] md:text[14px] mt-[10px] mb-[5px] uppercase font-semibold'>khám phá</h5>
                <h1 className='uppercase text-[24px] mb-[5px] md:text-[36px] lg:[44px]'>đối tác hình ảnh toàn cầu với zeiss</h1>
                <button className='btn-outline'>Khám phá câu chuyện</button>
            </div>
            <div className='relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.4)] after-content-[""] rounded-[40px] overflow-hidden'>
                <img src= {imgDiscoverMobile} alt="img-discover-mobile" className='md:hidden' />
                <img src= {imgDiscoverTablet} alt="img-discover-tablet" className='hidden md:block'/>
            </div>
        </div>
    )
}

export default Discover
