import React from 'react'
import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UserContext } from '../../utils/context'
import { initialState } from '../../utils/reducer'

const UserCard = ({ id }) => {
  // const userID = id
  const { updateUser, dispatch } = useContext(UserContext)
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
        <Button className="text-white" onClick={() => updateUser(id)}>
          Accéder au profile
        </Button>
      </Link>
      <Button className="text-black" onClick={() => setUser(id)}>
        REDUCER TEST
      </Button>
    </article>
  )
}

export default UserCard
