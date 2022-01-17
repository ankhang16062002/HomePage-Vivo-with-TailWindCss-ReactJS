import {useRef, useState, useEffect} from 'react'
import logo from '../../assets/img/logo.svg'
import {IoIosSearch} from 'react-icons/io'
import Menu from '../Menu/Menu'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navRef = useRef(null)
    const menuOne = useRef(null)
    const menuTwo = useRef(null)
    const menuThree = useRef(null)

    useEffect(() => {
        var lastScrolllTop = 0
        const handleScroll = () => {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            if(scrollTop > lastScrolllTop) {
                navRef.current.style.top = "-56px"
            } else {
                navRef.current.style.top = "0px"
            }
            lastScrolllTop = scrollTop
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleClick = () => {
        menuOne.current.classList.toggle('rotate-menu-one')
        menuTwo.current.classList.toggle('menu-three')
        menuThree.current.classList.toggle('rotate-menu-three')

        setIsOpen(!isOpen)
    }

    return (
        <div className='bg-main-color fixed top-0 z-30 left-0 lg:text-center w-screen'>
            <nav className='container 2xl:container-set m-auto px-[15px] h-[56px] flex flex-row items-center justify-between transition-all duration-300 ease-in-out' ref = {navRef}>
                <div 
                    className='w-[30px] h-[16px] cursor-pointer relative lg:hidden'
                    onClick={handleClick}
                >
                    <div className='w-full h-[1px] bg-[#d5d5d5] absolute top-0 left-0 transition-all duration-300 ease-in-out' ref = {menuOne}></div>
                    <div className='w-[27px] h-[1px] bg-[#707070] absolute top-1/2 translate-y-2/4 visible opacity-100 transition-all duration-300 ease-in-out' ref = {menuTwo}></div>
                    <div className='w-full h-[1px] bg-[#d5d5d5] absolute bottom-0 left-0 transition-all duration-300 ease-in-out' ref = {menuThree}></div>
                </div>
                <div className='w-[80px] cursor-pointer'>
                    <a href="http://localhost:3000"><img src= {logo} alt="Logo" className='max-w-full' /></a>
                </div>
                <ul className='hidden lg:flex lg:flex-row text-[#fff]'>
                    <li><a className='link-nav' href="http://localhost:3000">Trang chủ</a></li>
                    <li><a className='link-nav' href="http://localhost:3000">Sản phẩm</a></li>
                    <li><a className='link-nav' href="http://localhost:3000">E-store</a></li>
                    <li><a className='link-nav' href="http://localhost:3000">Funtouch-OS</a></li>
                    <li><a className='link-nav' href="http://localhost:3000">vivography</a></li>
                    <li><a className='link-nav' href="http://localhost:3000">Khám phá</a></li>
                    <li><a className='link-nav' href="http://localhost:3000">Hỗ trợ</a></li>
                </ul>
                <IoIosSearch style={{fontSize: "28px", cursor: "pointer"}} className='text-[#d5d5d5] hover:text-[#959595] transition-colors duration-200 ease-in-out'/>
                <Menu isOpen = {isOpen}/>
            </nav>
        </div>
    )
}

export default Navbar
