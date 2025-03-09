import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'
import { PiPlusBold } from 'react-icons/pi'
import CardContainer from '../components/CardContainer'
import Card from '../components/Card'

function Users() {
  return (
    <div>
      <div className='flex items-center justify-between mb-10'>
        <SectionTitle style="secondary">Menyu İdarəsi</SectionTitle>
        <Button style="addButton" icon={<PiPlusBold />}>Məhsul Əlavə Et</Button>
      </div>
      <CardContainer>
        <Card/>
        <Card/>

        <Card/>
        <Card/>

      </CardContainer>
    </div>
  )
}

export default Users