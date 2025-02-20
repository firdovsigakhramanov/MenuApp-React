import React, { useState } from 'react'
import Button from './Button'

function CategoryBlock() {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <div className='flex px-[5%] gap-x-2 gap-y-4 justify-center py-5 flex-wrap'>
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