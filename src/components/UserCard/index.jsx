import React from 'react'
import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UserContext } from '../../utils/context'

const UserCard = ({ url, id }) => {
  // const userIDTest = 1351
  const { updateUser } = useContext(UserContext)
  return (
    <article>
      <h3 className="text-primary">Nom Prenom</h3>
      <Link to={url}>
        <Button className="text-white" onClick={() => updateUser(id)}>
          Accéder au profile
        </Button>
      </Link>
    </article>
  )
}

export default UserCard
