import React from 'react'
import { Button } from 'react-bootstrap'

const UserCard = () => {
  return (
    <article>
      <h3 className="text-primary">Nom Prenom</h3>
      <Button className="text-white">Accéder au profile</Button>
    </article>
  )
}

export default UserCard
