import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Sidebar from './Sidebar'
import Map from './Map'
import Result from './Result'

const Contact = () => {

    const [result, showResult] = useState(false)

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_te4r94q', 'template_ak5gik9', form.current, 'TMIjoP5fGLPhe-FqO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        showResult(true)
    };

    //ocultar mensaje de confirmación de envío de formulario

    setTimeout(() => {
        showResult(false);
    }, 4000)

    return (
        <>
            <Sidebar></Sidebar>
            <section className='flex flex-col gap-10 xl:space-x-20 justify-start md:justify-center items-center xl:flex-row text-white h-screen mx-auto pt-20 xl:pb-40'>
                <div className='max-w-lg'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl text-center xl:text-left text-[#39ff14] pb-2 font-offbit'>CONTACTO</h2>
                    <div className='px-4 lg:px-0 font-share lg:text-lg'>
                        <p>Deseas que trabajemos juntos o hacerme una pregunta. ¡Escríbeme!</p><p>Vivo en el barrio de Aravaca(Madrid) a 10km del centro, puedo desplazarme allí o donde se me necesite. ¿Hablamos? </p>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col px-4 lg:px-0 pt-4 space-y-3 text-neutral-900 font-share'>
                        <div className='flex flex-col lg:flex-row justify-between max-w-lg space-y-3 lg:space-y-0 lg:space-x-3'>
                            <input className='lg:w-1/2 focus:outline-[#39ff14] bg-slate-200 pl-2' type="text" name='user_name' placeholder='Nombre' required />
                            <input className='lg:w-1/2 focus:outline-[#39ff14] bg-slate-200 pl-2' type="email" name='user_email' placeholder='Email' required />
                        </div>
                        <textarea className='block w-full max-w-lg h-20 md:h-28 max-h-28 bg-slate-200 focus:outline-[#39ff14] pl-2' name='message' placeholder='Mensaje' required />
                        <input className='w-20 text-[#39ff14] border border-[#39ff14] hover:bg-[#39ff14] hover:text-white cursor-pointer transition-all' type="submit" value='ENVIAR' />
                        <div className='text-white'>{result ? <Result /> : null}</div>
                    </form>
                </div>
                <div className='pb-5'>
                    <Map></Map>
                </div>
            </section>
        </>
    )
}

export default Contact