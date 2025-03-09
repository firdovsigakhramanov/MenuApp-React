import React from 'react'
import Button from './Button'
import Import from "./Input"
import Input from './Input'

function ContactForm() {
    return (
        <form className='space-y-5 w-[50%]'>
            <div className='flex items-center gap-5'>
                <div className='flex-grow'>
                    <Input placeholder='Adınız və Soyadınız' type="text"  style="primary" />
                </div>
                <div className='flex flex-grow gap-2 px-4 focus-within:px-[15px] py-2 focus-within:py-[7px] border border-gray-300 focus-within:border-orange-600 focus-within:border-2 rounded-full transition duration-400' >
                    <select name="" id="" className='outline-none'>
                        <option>050</option>
                        <option>051</option>
                        <option>070</option>
                        <option>077</option>
                        <option>055</option>
                        <option>099</option>
                    </select>
                    <Input style='secondary' type="text" placeholder='Telefon nömrəniz' />
                </div>
            </div>
            <div>
                <Input style="primary" type="email" placeholder="Elektron poçtunuz" />
            </div>
            <div>
                <Input style="primary" type="text" placeholder="Təklif və şikayətiniz" />
            </div>
            <Button type="submit" style="fourth">Göndər</Button>
        </form>
    )
}

export default ContactForm