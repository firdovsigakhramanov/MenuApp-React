import React from 'react'
import SectionTitle from './SectionTitle'
import CategoryBlock from './CategoryBlock'
import MenuList from './MenuList'
import ProductDeatils from './ProductDeatils'


function MenuBlock() {
    return (
        <div className='mt-[70px] mx-auto'>
            <SectionTitle style="primary">Menyumuz</SectionTitle>
            <CategoryBlock />
            <MenuList />
            <ProductDeatils />
        </div>
    )
}

export default MenuBlock