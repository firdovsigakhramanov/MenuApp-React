import React from 'react'
import SectionTitle from './SectionTitle'
import CategoryBlock from './CategoryBlock'
import MenuList from './MenuList'
import ProductDeatils from './ProductDeatils'
import Button2 from './Button2'

function MenuBlock() {
    return (
        <div className='mt-[70px] px-[5%] mx-auto'>
            <SectionTitle />
            <CategoryBlock />
            <MenuList />
            <ProductDeatils />
        </div>
    )
}

export default MenuBlock