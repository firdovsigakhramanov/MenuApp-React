import React, { useState } from 'react'
import FoodCard from '../../components/FoodCard'
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'
import { PiPlusBold } from "react-icons/pi";
import Modal from '../../layouts/Modal';
import NewProductForm from '../components/NewProductForm';
function MenuManage() {
  const [showModal, setShowModal] = useState(false)
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
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  )
}

export default MenuManage