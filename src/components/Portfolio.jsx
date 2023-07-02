import React from 'react'
import Sidebar from './Sidebar'
import foto from '../images/listaTareas.webp'
import abogado from '../images/abogado.webp'
import labem from '../images/labem.webp'
import mikel from '../images/mikel.webp'
import portfolio from '../images/portfolio.webp'
import { BiLinkExternal } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import { SiReact, SiStyledcomponents, SiBootstrap, SiTailwindcss, SiGooglemaps } from 'react-icons/si'
import { FaSass } from 'react-icons/fa'

const Portfolio = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <div className='mx-auto pt-20 lg:pt-10'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl text-center text-[#39ff14] font-offbit'>PORTAFOLIO</h2>
            </div>
            <div className='grid gap-x-20 gap-y-10 py-4 px-4 grid-cols-1 xl:grid-cols-2 max-w-[450px] xl:max-w-[900px] xl:px-0 mx-auto'>
                <div className='w-full aspect-video bg-cover relative overflow-hidden group' style={{ backgroundImage: `url(${foto})` }}>
                    <div className='absolute h-full w-full bg-black/60 flex flex-col space-y-4 items-center justify-center -bottom-full group-hover:bottom-0 transition-all duration-500 ease-in-out'>
                        <h2 className='text-white font-share text-xl font-medium'>Lista de Tareas</h2>
                        <div className='flex flex-row text-white space-x-5'>
                            <div className='bg-black p-2 rounded-full cursor-pointer flex justify-center items-center'>
                                <AiFillGithub size='2rem'></AiFillGithub>
                            </div>
                            <a target='_blank' href='https://tareas.arturhonores.es/' className='bg-black p-2 rounded-full cursor-pointer'>
                                <BiLinkExternal size='2rem'></BiLinkExternal>
                            </a>
                        </div>
                        <div className='flex flex-row space-x-2'>
                            <IoLogoHtml5 color='#39ff14' size='1.8rem'></IoLogoHtml5>
                            <IoLogoCss3 color='#39ff14' size='1.8rem'></IoLogoCss3>
                            <SiReact color='#39ff14' size='1.8rem'></SiReact>
                        </div>
                    </div>
                </div>
                <div className='w-full aspect-video bg-cover bg-center relative overflow-hidden group' style={{ backgroundImage: `url(${abogado})` }}>
                    <div className='absolute h-full w-full bg-black/60 flex flex-col space-y-4 items-center justify-center -bottom-full group-hover:bottom-0 transition-all duration-500 ease-in-out'>
                        <h2 className='text-white font-share text-xl font-medium'>Web Profesional para Abogado</h2>
                        <div className='flex flex-row text-white space-x-5'>
                            <div className='bg-black p-2 rounded-full cursor-pointer flex justify-center items-center'>
                                <AiFillGithub size='2rem'></AiFillGithub>
                            </div>
                            <a target='_blank' href='https://modelo3.arturhonores.es/' className='bg-black p-2 rounded-full cursor-pointer'>
                                <BiLinkExternal size='2rem'></BiLinkExternal>
                            </a>
                        </div>
                        <div className='flex flex-row space-x-2'>
                            <IoLogoHtml5 color='#39ff14' size='1.8rem'></IoLogoHtml5>
                            <IoLogoCss3 color='#39ff14' size='1.8rem'></IoLogoCss3>
                            <IoLogoJavascript color='#39ff14' size='1.8rem'></IoLogoJavascript>
                        </div>
                    </div>
                </div>
                <div className='w-full aspect-video bg-cover bg-center relative overflow-hidden group' style={{ backgroundImage: `url(${labem})` }}>
                    <div className='absolute h-full w-full bg-black/60 flex flex-col space-y-4 items-center justify-center -bottom-full group-hover:bottom-0 transition-all duration-500 ease-in-out'>
                        <h2 className='text-white font-share text-xl font-medium'>Web Empresarial</h2>
                        <div className='flex flex-row text-white space-x-5'>
                            <div className='bg-black p-2 rounded-full cursor-pointer flex justify-center items-center'>
                                <AiFillGithub size='2rem'></AiFillGithub>
                            </div>
                            <a target='_blank' href='https://labem.arturhonores.es/' className='bg-black p-2 rounded-full cursor-pointer'>
                                <BiLinkExternal size='2rem'></BiLinkExternal>
                            </a>
                        </div>
                        <div className='flex flex-row space-x-2 items-center'>
                            <IoLogoHtml5 color='#39ff14' size='1.8rem'></IoLogoHtml5>
                            <IoLogoCss3 color='#39ff14' size='1.8rem'></IoLogoCss3>
                            <SiReact color='#39ff14' size='1.8rem'></SiReact>
                            <SiStyledcomponents color='#39ff14' size='3rem'></SiStyledcomponents>
                        </div>
                    </div>
                </div>
                <div className='w-full aspect-video bg-cover bg-center relative overflow-hidden group' style={{ backgroundImage: `url(${mikel})` }}>
                    <div className='absolute h-full w-full bg-black/60 flex flex-col space-y-4 items-center justify-center -bottom-full group-hover:bottom-0 transition-all duration-500 ease-in-out'>
                        <h2 className='text-white font-share text-xl font-medium'>Web Profesional</h2>
                        <div className='flex flex-row text-white space-x-5'>
                            <div className='bg-black p-2 rounded-full cursor-pointer flex justify-center items-center'>
                                <AiFillGithub size='2rem'></AiFillGithub>
                            </div>
                            <a target='_blank' href='https://modelo1.arturhonores.es/' className='bg-black p-2 rounded-full cursor-pointer'>
                                <BiLinkExternal size='2rem'></BiLinkExternal>
                            </a>
                        </div>
                        <div className='flex flex-row space-x-2'>
                            <IoLogoHtml5 color='#39ff14' size='1.8rem'></IoLogoHtml5>
                            <SiBootstrap color='#39ff14' size='1.8rem'></SiBootstrap>
                            <FaSass color='#39ff14' size='1.8rem'></FaSass>
                            <IoLogoJavascript color='#39ff14' size='1.8rem'></IoLogoJavascript>
                        </div>
                    </div>
                </div>
                <div className='w-full aspect-video bg-cover bg-center relative overflow-hidden group' style={{ backgroundImage: `url(${portfolio})` }}>
                    <div className='absolute h-full w-full bg-black/60 flex flex-col space-y-4 items-center justify-center -bottom-full group-hover:bottom-0 transition-all duration-500 ease-in-out'>
                        <h2 className='text-white font-share text-xl font-medium'>Portafolio</h2>
                        <div className='flex flex-row text-white space-x-5'>
                            <div className='bg-black p-2 rounded-full cursor-pointer flex justify-center items-center'>
                                <AiFillGithub size='2rem'></AiFillGithub>
                            </div>
                            {/* <a target='_blank' href='https://modelo3.arturhonores.es/' className='bg-black p-2 rounded-full cursor-pointer'>
                                <BiLinkExternal size='2rem'></BiLinkExternal>
                            </a> */}
                        </div>
                        <div className='flex flex-row space-x-2'>
                            <IoLogoHtml5 color='#39ff14' size='1.8rem'></IoLogoHtml5>
                            <SiTailwindcss color='#39ff14' size='1.8rem'></SiTailwindcss>
                            <SiReact color='#39ff14' size='1.8rem'></SiReact>
                            <SiGooglemaps color='#39ff14' size='1.8rem'></SiGooglemaps>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio