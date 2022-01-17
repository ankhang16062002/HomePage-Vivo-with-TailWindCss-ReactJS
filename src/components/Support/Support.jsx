import {RiQuestionLine} from 'react-icons/ri'

const Support = () => {
    return (
        <div className='fixed bg-[#2d68c4] w-[99px] h-[43px] bottom-[20px] right-[20px] rounded-full'>
            <a href="http://localhost:3000" className='h-full flex items-center justify-center'>
                <RiQuestionLine style={{color: "#FFFFFF", fontSize: '25px', marginRight: '5px'}}/>
                <span className='text-[14px] font-semibold text-[#FFFFFF]'>Hỗ trợ</span>
            </a>
        </div>
    )
}

export default Support
