import React from 'react'
import FoodCard from './FoodCard'
import { useFoods } from '../context/MenuContext'

function MenuList() {
  const { foods } = useFoods()
  return (
    <div className='flex px-[10%] gap-5 justify-center flex-wrap'>
      {foods.map(food => (
        <FoodCard food={food} key={food.id} />
      ))}
    </div>
  )
}

export default MenuList