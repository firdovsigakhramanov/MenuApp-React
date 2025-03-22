import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import Button from '../../components/Button'
import { PiPlusBold } from 'react-icons/pi'
import CardContainer from '../components/CardContainer'
import UserCard from '../components/UserCard'
import { useFoods } from '../../context/MenuContext'

function Users() {
  const { users } = useFoods()
  return (
    <div>
      <div className='flex items-center justify-between mb-10'>
        <SectionTitle style="secondary">Menyu İdarəsi</SectionTitle>
        <Button style="addButton" icon={<PiPlusBold />}>Məhsul Əlavə Et</Button>
      </div>
      <CardContainer>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </CardContainer>
    </div>
  )
}

export default Users