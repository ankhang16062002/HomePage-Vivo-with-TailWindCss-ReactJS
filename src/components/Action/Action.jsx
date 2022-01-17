import {listAction} from '../../assets/fakedata'
import Banner from './Banner'

const Action = () => {
    return (
        <div className='px-[20px] py-[40px] bg-second-color md:p-[80px]'>
            <h3 className='text-[25px] uppercase font-normal text-[#242933] mb-[20px] sm:text-[30px]'>khám phá</h3>
            <div className='flex flex-wrap gap-5 md:justify-between relative md:h-[55.725vw]'>
                {
                    listAction.map((item, index) => (
                        <Banner img={item.img} name = {item.name} desc = {item.desc} key = {index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Action
