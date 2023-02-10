import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const UserCard = ({ id }) => {
  return (
    <article
      className="d-inline-flex flex-column align-items-center p-3 pt-2"
      style={{ border: '1px solid black' }}
    >
      <h3 className="text-primary fs-4">Utilisateur - {id}</h3>
      <Link to={`/user/${id}`}>
        <Button className="text-white">Accéder au profile</Button>
      </Link>
    </article>
  )
}

export default UserCard
