import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

/**
 * Template of usercard, user's profile selector
 * @function UserCard
 * @param {Integer} id Id of activ user,throught the url
 * @returns {HTMLElement}
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const UserCard = ({ id }) => {
  return (
    <article className="d-inline-flex flex-column align-items-center p-3 pt-2 border border-black-50 rounded">
      <h3 className="text-primary fs-4">Utilisateur - {id}</h3>
      <Link to={`/user/${id}`}>
        <Button className="text-white">Accéder au profile</Button>
      </Link>
    </article>
  )
}

export default UserCard
