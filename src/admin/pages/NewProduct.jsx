import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import NewProductForm from '../components/NewProductForm'

function NewProduct() {
  return (
    <div>
      <SectionTitle style="secondary">Yeni Məhsul Yarat</SectionTitle>
      <NewProductForm/>
    </div>
  )
}

export default NewProduct