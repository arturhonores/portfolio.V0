import React from 'react'
import check from '../images/check.svg'

const Result = () => {
    return (
        <div className='flex items-center justify-center'>
            <img src={check} alt="" style={{ width: "30px" }} /> <p>Tu mensaje ha sido enviado exitosamente</p>
        </div>
    )
}

export default Result