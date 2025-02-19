import React, { useState } from 'react'
import Button from './Button'

function CategoryBlock() {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <div className='flex px-[5%] gap-x-2 gap-y-4 justify-center py-10 flex-wrap'>
      <Button type="primary" selected={isSelected}>Hamısı</Button>
      <Button type="primary">Səhər Yeməkləri</Button>
      <Button type="primary">Salatlar</Button>
      <Button type="primary">Şorbalar</Button>
      <Button type="primary">Qazan Yeməkləri</Button>
      <Button type="primary">Hamısı</Button>
      <Button type="primary">Səhər Yeməkləri</Button>
      <Button type="primary">Salatlar</Button>
      <Button type="primary">Şorbalar</Button>
      <Button type="primary">Qazan Yeməkləri</Button>
    </div>
  )
}

export default CategoryBlock