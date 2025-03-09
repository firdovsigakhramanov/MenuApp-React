import Input from '../../components/Input'
import React from 'react'
import Select from '../../components/Select'
import { FaImage } from "react-icons/fa6";
import Button from '../../components/Button';

function NewProductForm() {
    const categories = [
        {
            id: 1,
            title: 'Sorbalar'
        },
        {
            id: 2,
            title: "Salatlar"
        },
        {
            id: 3,
            title: "Qazan yemekleri"
        }
    ]
    const spanStyle = "mb-2 px-4 inline-block font-medium"
    return (
        <form action="">
            <div className='flex flex-col gap-7'>
                <div>
                    <span className={spanStyle}>Məhsulun adı:</span>
                    <Input placeholder="Məhsulun adı" style="primary" />
                </div>
                <div>
                    <span className={spanStyle}>Məhsulun adı:</span>
                    <Select data={categories} />
                </div>
                <div>
                    <span className={spanStyle}>Məhsulun qiyməti (AZN):</span>
                    <Input placeholder="Məhsulun qiyməti" style="primary" />
                </div>
                <div>
                    <span className={spanStyle}>Məhsulun təsviri:</span>
                    <textarea className='px-4 py-2 border border-gray-300 rounded-2xl outline-orange-600 w-full transition duration-400 resize-none' placeholder="Məhsulun təsviri" type="textarea" />
                </div>
                <div>
                    <span className={spanStyle}>Məhsulun fotosu:</span>
                    <div className='mt-3 px-3 mb-3 flex gap-5'>
                        <label htmlFor="image-radio-1" className='cursor-pointer'>
                            <input type="radio" className="mr-1" id="image-radio-1" name='trueWay' />
                            <span>URL ilə</span>
                        </label>
                        <label htmlFor="image-radio-2" className='cursor-pointer'>
                            <input type="radio" className="mr-1" id="image-radio-2" name='trueWay' />
                            <span>Cihazdan yüklə</span>
                        </label>
                    </div>
                    <Input placeholder="URL" style="primary" />
                    <label htmlFor='upLoadImg' className='flex items-center gap-2 cursor-pointer mt-3 text-orange-600'>
                        <FaImage />
                        <input id="upLoadImg" className='cursor-pointer' type="file" id="imageInput" accept="image/*" />
                    </label>
                </div>
                <Button type="submit" style="fifth">Məhsulu Əlavə Et</Button>
            </div>
        </form>
    )
}

export default NewProductForm