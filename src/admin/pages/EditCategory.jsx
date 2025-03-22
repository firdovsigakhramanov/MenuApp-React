import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import Modal from '../../layouts/Modal'
import ContactForm from '../../components/ContactForm'
import NewProductForm from '../components/NewProductForm'
import CardContainer from '../components/CardContainer'
import CategoryCard from '../components/CategoryCard'
import Button from '../../components/Button'
import { PiPlusBold } from 'react-icons/pi'
import { useFoods } from '../../context/MenuContext'


function EditCategory() {
  const { category } = useFoods()

  return (
    <div>
      <div className='flex items-center justify-between mb-10'>
        <SectionTitle style="secondary">Kateqoriyalar</SectionTitle>
        <Button style="addButton" icon={<PiPlusBold />}>Kateqoriya Əlavə Et</Button>
      </div>
      <CardContainer>
        {category.map(item => (
          <CategoryCard key={item.id} category={item} />
        ))}
      </CardContainer>
    </div>
  )
}

export default EditCategory