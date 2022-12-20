import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = () => {
  const userIDTest = 1351
  return (
    <article>
      <h3 className="text-primary">Nom Prenom</h3>
      <Link to={`/user/${userIDTest}`}>
        <Button className="text-white">Accéder au profile</Button>
      </Link>
    </article>
  )
}

export default UserCard
