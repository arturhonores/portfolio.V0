import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../images/logo-arturhonores.svg'
import { BsGithub } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

const Sidebar = () => {
    return (
        <div className='fixed z-20 lg:block top-0 lg:min-h-[500px] lg:bottom-0 lg:h-full lg:w-[4.5rem] bg-neutral-900 h-16 w-full left-0 right-0 flex flex-row justify-between items-center'>
            <Link to='/' className='block lg:py-2 lg:px-0 pl-4'>
                <img className='w-14 lg:mx-auto lg:my-2' src={LogoS} alt='logo'></img>
            </Link>
            <nav className='gap-4 flex lg:flex-col justify-center items-center lg:absolute lg:h-52 lg:top-1/2 lg:-mt-28 w-full flex-row h-full'>
                <NavLink exact="true" to="/" activeclassname="active" className="block no-underline text-neutral-500">
                    <div className='hover:text-[#39ff14]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </div>
                </NavLink>
                <NavLink exact="true" to="/about" activeclassname="active" className="no-underline text-neutral-500">
                    <div className='hover:text-[#39ff14]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </div>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/portfolio" className="no-underline text-neutral-500">
                    <div className='hover:text-[#39ff14]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                    </div>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/contact" className="no-underline text-neutral-500">
                    <div className='hover:text-[#39ff14]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </div>
                </NavLink>
            </nav>
            <ul className="lg:absolute lg:bottom-20 lg:w-full flex lg:flex-col items-center gap-4 text-xl lg:px-0 pr-4">
                {/* <li>
                    <a href="https://wa.me/34617691038" target="_blank" className="text-neutral-500 hover:text-[#39ff14]">
                        <IoLogoWhatsapp></IoLogoWhatsapp>
                    </a>
                </li> */}
                <li>
                    <a href="https://github.com/arturhonores" target="_blank" className="text-neutral-500 hover:text-[#39ff14]">
                        <BsGithub></BsGithub>
                    </a>
                </li>
            </ul>
        </div >
    )
}

export default Sidebar