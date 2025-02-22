import React, { useState } from 'react'
import Button from './Button'
import Slider from "react-slick";


function CategoryBlock() {
  const [isSelected, setIsSelected] = useState(false)


  return (
      <div className="flex whitespace-nowrap space-x-4 
      px-4 py-2 mb-10 overflow-scroll scrollbar-hide">
        <Button style="primary" selected={isSelected}>Hamısı</Button>
        <Button style="primary">Səhər Yeməkləri</Button>
        <Button style="primary">Salatlar</Button>
        <Button style="primary">Şorbalar</Button>
        <Button style="primary">Qazan Yeməkləri</Button>
        <Button style="primary">Hamısı</Button>
        <Button style="primary">Səhər Yeməkləri</Button>
        <Button style="primary">Salatlar</Button>
        <Button style="primary">Şorbalar</Button>
        <Button style="primary">Qazan Yeməkləri</Button>
      </div>
    
  )
}

export default CategoryBlock