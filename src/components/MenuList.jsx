import React from 'react'
import FoodCard from './FoodCard'

function MenuList() {
  return (
    <div className='flex px-[10%] gap-5 justify-center flex-wrap'>
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
    </div>
  )
}

export default MenuList