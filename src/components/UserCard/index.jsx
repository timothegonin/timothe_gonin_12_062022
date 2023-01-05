import React from 'react'
import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UserContext } from '../../utils/context'
import { initialState } from '../../utils/reducer'

const UserCard = ({ id }) => {
  const { dispatch } = useContext(UserContext)
  const setUser = (entry) => {
    console.log(entry)
    console.log(initialState)
    dispatch({
      type: 'SET_NEW_USER',
      payload: {
        ...id,
        id: entry,
      },
    })
  }
  return (
    <article>
      <h3 className="text-primary">Nom Prenom</h3>
      <Link to={`/user/${id}`}>
        <Button className="text-white" onClick={() => setUser(id)}>
          Accéder au profile
        </Button>
      </Link>
    </article>
  )
}

export default UserCard
