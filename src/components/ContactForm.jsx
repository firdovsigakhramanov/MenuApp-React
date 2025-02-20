import React from 'react'

function ContactForm() {
    return (
        <form className='w-[50%]'>
            <div className='flex'>
                <input placeholder='Adınız və Soyadınız' type="text" />
                <div className='flex'>
                    <select name="" id="">
                        <option>050</option>
                        <option>051</option>
                        <option>070</option>
                        <option>077</option>
                        <option>055</option>
                        <option>099</option>
                    </select>
                    <input type="text" placeholder='Telefon nömrəniz' />
                </div>
            </div>
            <div>
                <input type="email" placeholder='Elektron poçtunuz' />
            </div>
            <div>
                <input type="text" placeholder='Təklif və ya şikayətiniz' />
            </div>
            
        </form>
    )
}

export default ContactForm