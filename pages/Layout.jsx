import React, { useState, useEffect } from 'react'
import Hero from '../src/components/Hero'
import Saludo from '../src/components/Saludo'
import Sidebar from '../src/components/Sidebar'
import Loader from '../src/components/Loader'

const Layout = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <>
            <Hero></Hero>
            <Sidebar></Sidebar>
            <Saludo></Saludo>
            {
                loading ?
                    <Loader></Loader>
                    :
                    null
            }
        </>
    )
}
export default Layout