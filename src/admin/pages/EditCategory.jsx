import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import Modal from '../../layouts/Modal'
import ContactForm from '../../components/ContactForm'
import NewProductForm from '../components/NewProductForm'
import CardContainer from '../components/CardContainer'
import CategoryCard from '../components/CategoryCard'
import Button from '../../components/Button'
import { PiPlusBold } from 'react-icons/pi'

const data = [
  {
    id: 1,
    title: "Sorbalar",

  }
]

function EditCategory() {
  return (
    <div>
      <div className='flex items-center justify-between mb-10'>
        <SectionTitle style="secondary">Kateqoriyalar</SectionTitle>
        <Button style="addButton" icon={<PiPlusBold />}>Kateqoriya Əlavə Et</Button>
      </div>
      <CardContainer>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />

      </CardContainer>
    </div>
  )
}

export default EditCategory