import React from 'react'
import Loader from './Loader'
import Sidebar from './Sidebar'
import TagCloud from '@frank-mayer/react-tag-cloud'

const About = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <section className='flex flex-col space-y-10 xl:space-x-20 justify-start md:justify-center items-center xl:flex-row text-white h-screen mx-auto pt-20 xl:pb-40'>
                <div className='max-w-xl'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-center xl:text-left text-[#39ff14] pb-2 font-offbit'>SOBRE MI</h2>
                    <div className='px-4 lg:px-0 font-share lg:text-lg'>
                        <p>Soy un <span className='font-medium'>DESARROLLADOR WEB JUNIOR</span>, que busca seguir aprendiendo a través de proyectos desafiantes y diversos. Si tuviera que definirme en una oración, sería: Padre de familia, entusiasta del running, fanático de los videojuegos y APASIONADO POR LA TECNOLOGÍA.</p><br />
                        <p>En esta página quiero que conozcas algunas de las tecnologías que domino. ¡ME GUSTAN LOS RETOS!, si tienes uno, ¡NO DUDES EN COMUNICARTE CONMIGO!. </p>
                    </div>
                </div>
                <div className='relative z-0 py-10'>
                    <TagCloud options={(w) => ({
                        radius: Math.min(310, w.innerWidth, w.innerHeight) / 2,
                    })}>
                        {[
                            "VSCode",
                            "TypeScript",
                            "React",
                            "Javascript",
                            "SASS",
                            "Tailwind",
                            "CSS",
                            "HTML",
                            "Framer Motion",
                            "WordPress",
                            "Bootstrap",
                        ]}
                    </TagCloud>
                </div>
            </section>
            {/* <Loader></Loader> */}
        </>
    )
}

export default About