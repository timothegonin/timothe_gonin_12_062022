import React from 'react'
import UserCard from '../../components/UserCard'
const UserCards = () => {
  return (
    <div>
      <UserCard url={'/user/12'} id={12} />
      <UserCard url={'/user/18'} id={18} />
    </div>
  )
}

export default UserCards
