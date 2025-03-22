import React, { useState } from 'react'
import FoodCard from '../../components/FoodCard'
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'
import { PiPlusBold } from "react-icons/pi";
import Modal from '../../layouts/Modal';
import NewProductForm from '../components/NewProductForm';
import { useFoods } from '../../context/MenuContext';
function MenuManage() {
  const [showModal, setShowModal] = useState(false)
  const { foods } = useFoods()
  console.log(foods);
  return (
    <div>
      {showModal &&
        <Modal setShowModal={setShowModal} showModal={showModal}>
          <NewProductForm />
        </Modal>
      }
      <div className='flex items-center justify-between mb-10'>
        <SectionTitle style="secondary">Menyu İdarəsi</SectionTitle>
        <Button onClick={() => { setShowModal(true) }} style="addButton" icon={<PiPlusBold />}>Məhsul Əlavə Et</Button>
      </div>
      <div className='flex flex-wrap gap-6'>
        {foods.map(food => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  )
}

export default MenuManage