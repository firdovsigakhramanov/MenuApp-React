import React, { useState } from 'react'
import Button from './Button'
import Slider from "react-slick";
import { useFoods } from '../context/MenuContext';


function CategoryBlock() {
  const [isSelected, setIsSelected] = useState(false)
  const { category } = useFoods()

  return (
    <div className="flex whitespace-nowrap space-x-4 
     md:px-[10%] md:overflow-hidden md:flex-wrap md:gap-3 md:space-x-0 md:justify-center px-4 py-2 mb-10 overflow-scroll scrollbar-hide">
      {
        category.map(item => (
          <Button style="primary" selected={isSelected} key={item.id} >{item.categoryName}</Button>
        ))
      }

    </div>

  )
}

export default CategoryBlock