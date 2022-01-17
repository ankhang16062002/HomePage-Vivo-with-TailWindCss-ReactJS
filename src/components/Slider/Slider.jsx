import {useState, useEffect, useMemo} from 'react'
import {listImgSlider} from '../../assets/fakedata'
import {GrPrevious, GrNext} from 'react-icons/gr'

const Slider = ({autoPlay, timeOut}) => {
    const [slideIndex, setSlideIndex] = useState(1)
    const time = timeOut || 4000

    const handleClick = useMemo(() => {
        return (type) => {
            if(type === 'prev') {
                setSlideIndex(slideIndex === 0 ? listImgSlider.length - 1 : slideIndex - 1)
            } else {
                setSlideIndex(slideIndex === listImgSlider.length - 1 ? 0 : slideIndex + 1)
            }
        }
    }, [slideIndex])

    useEffect(() => {
        let interval
        if(autoPlay) {
            interval = setInterval(() => handleClick('next'), time)
        }

        return () => {
            autoPlay && clearInterval(interval)
        } 
    }, [time, handleClick, autoPlay])

    return (
        <div className='h-[calc(100vh-56px)] sm:h-[calc(0.5*100vw)] xl:h-[calc(100vh-56px)] overflow-hidden relative mt-[56px] cursor-pointer'>
            <div className='h-full relative'>
                {
                    listImgSlider.map((item, index) => (
                        <SliderItem img = {item.img} imgLarge = {item.imgLarge} key = {index} active = {index === slideIndex}/>
                    ))
                }
            </div>
            <GrPrevious 
                className='absolute top-1/2 left-[20px] translate-y-[-100%] text-28 cursor-pointer'
                onClick = {() => handleClick('prev')}
            />
            <GrNext 
                className='absolute top-1/2 right-[20px] translate-y-[-100%] text-28 cursor-pointer'
                onClick = {() => handleClick('next')}
            />
            <div className='absolute bottom-[25px] lg:bottom-[35px] left-1/2 translate-x-[-50%] flex'>
                {
                    listImgSlider.map((item, index) => (
                        <div 
                            className= {`${index === slideIndex ? 'opacity-100' : 'opacity-40'} bg-white w-[30px] lg:w-[40px] lg:mx-2 h-[11px] py-[4px] bg-clip-content rounded-[3px] mx-1 cursor-pointer`}
                            onClick = {() => setSlideIndex(index)}
                            key={index}
                        ></div>
                    ))
                }
            </div>
        </div>
    )
}

const SliderItem = ({img, imgLarge, active}) => {
    return (
        <div className= {`${active ? 'visible opacity-100' : 'invisible opacity-0'} w-full h-full absolute transition-all duration-300 ease-linear`}>
            <picture className='w-full h-full sm:h-auto'>
                <source media='(max-width: 500px)' srcSet={img} alt='vivo vietnam' className='w-full h-full object-cover'></source>
                <img src= {imgLarge} alt="vivo vietnam" className='w-full h-full object-cover'/>
            </picture>
        </div>
    )
}

export default Slider
