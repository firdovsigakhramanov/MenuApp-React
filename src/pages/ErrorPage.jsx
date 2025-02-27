import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    const navigate = useNavigate()

    function handleClick() {
        navigate(-1)
    }
    return (
        <div className='px-[10%] text-center pt-[40%] sm:pt-[20%] font-primary'>
            <h3 className='text-2xl md:text-3xl font-medium mb-10'> 😒<span className='ml-1'>Təəssüf ki, bu səhifə tapılmadı</span></h3>
            {/* <Button style="fourth" to="/">Ana səhifəyə qayıt</Button> */}
            <Button style="fourth" onClick={handleClick}>Geriyə Dön</Button>
        </div>
    )
}

export default ErrorPage