import React from 'react'
import UserCard from '../../components/UserCard'
const UserCards = () => {
  return (
    <div>
      <UserCard url={'/user/12'} />
      <UserCard url={'/user/18'} />
    </div>
  )
}

export default UserCards
