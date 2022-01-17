import {useEffect} from 'react'
import {logoFooter, backToTop} from '../../assets/fakedata'
import {GrFacebookOption, GrInstagram, GrYoutube} from 'react-icons/gr'

const Footer = () => {
    useEffect(() => {
        document.querySelectorAll('footer ul li').forEach(item => {
            item.classList.add('css-item-footer')
        })
    }, [])

    const handleClick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <footer className="">
            <div className="pt-[60px]"></div>
            <div className="container 2xl:container-set m-auto px-[15px] grid grid-cols-2 md:grid-cols-4 gap-y-[15px] py-[25px] border-t-[1px] border-b-[1px] border-solid border-[#DEDEDE]">
                <ul>
                    <li>Sản phẩm</li>
                    <li>Dòng X</li>
                    <li>Dòng Y</li>
                    <li>Dòng S</li>
                    <li>Dòng Y</li>
                    <li>Dòng U</li>
                </ul>
                <ul>
                    <li>Funtouch OS</li>
                    <li>Hệ thống cửa hàng</li>
                    <li>Khám phá</li>
                </ul>
                <ul>
                    <li>Hỗ trợ</li>
                    <li>Chăm sóc khách hàng</li>
                    <li>Hệ thống</li>
                    <li>Câu hỏi thường gặp</li>
                </ul>
                <ul>
                    <li>Về vivo</li>
                    <li>Tuyển dụng</li>
                    <li>Liên hệ</li>
                </ul>
            </div>
            <div className='container 2xl:container-set m-auto px-[15px] grid grid-cols-1 md:grid-cols-5 gap-y-[10px] my-[30px] text-[#333333] text-center md:text-left text-[14px]'>
                <div className='md:col-span-4'>
                    <h4 className='text-[16px] my-[10px] uppercase font-semibold'>công ty tnhh thương mại dịch vụ và đầu tư nhuận tín</h4>
                    <p className='mb-[4px]'><strong>Địa chỉ: </strong>Tầng 10 Tòa Nhà số 40 Phạm Ngọc Thạch,<br/>Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh, Việt Nam</p>
                    <p className='mb-[4px]'><strong>Điện thoại: </strong><a href="tel:0868718744">086.8718.744</a></p>
                    <p className='mb-[4px]'>Giấy chứng nhận đăng ký kinh doanh: Số 0316155183 do Sở Kế Hoạch & Đầu Tư TP. Hồ Chí Minh cấp lần đầu ngày 24/02/2020.</p>
                </div>
                <div className='flex items-center justify-center md:col-span-1'>
                    <a href="http://localhost:3000"><img src= {logoFooter} alt="logo-footer" className='w-[140px]'/></a>
                </div>
            </div>
            <div className='bg-[#111111]'>
                <div className='container 2xl:container-set m-auto px-[15px] py-[20px] grid grid-cols-10 text-[#959595] '>
                    <div className='col-span-7'>
                        <li className='privacy'><a href="http://localhost:3000">Chính sách bảo mật</a></li>
                        <li className='privacy'><a href="http://localhost:3000">Chính sách bảo mật thông tin</a></li>
                        <li className='privacy'><a href="http://localhost:3000">Điều khoản bảo hành</a></li>
                        <li className='privacy after:hidden'><a href="http://localhost:3000">Quy chế hoạt động</a></li>
                    </div>
                    <div className='col-span-3 flex items-center justify-end cursor-pointer'  onClick = {handleClick}>
                        <img src= {backToTop} alt="img-back-to-top" className='cursor-pointer'/>
                        <span className='text-[14px] max-w-[45px] sm:max-w-[100%] ml-[8px] hover:text-[#fff] duration-200 ease-in'>Về đầu trang</span>
                    </div>
                </div>
            </div>
            <div className='bg-[#000]'>
                <div className='container 2xl:container-set m-auto px-[15px] py-[20px] grid grid-cols-1 md:grid-cols-5 gap-y-[15px] text-[#959595] text-[14px]'>
                    <p className='col-span-4'>Copyright © 2020 Nhuan Tin Services Trading and Investment Co., Ltd. All rights reserved.</p>
                    <div className='flex items-center col-span-1'>
                        <span className='mr-[10px]'>Follow us: </span>
                        <div className='flex items-center'>
                            <div className='social-footer'>
                                <a href="http://localhost:3000"><GrFacebookOption style={{color: "#000", fontSize: "16px"}}/></a>
                            </div>
                            <div className='social-footer'>
                                <a href="http://localhost:3000"><GrInstagram style={{color: "#000", fontSize: "16px"}}/></a>
                            </div>
                            <div className='social-footer'>
                                <a href="http://localhost:3000"><GrYoutube style={{color: "#000", fontSize: "16px"}}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
