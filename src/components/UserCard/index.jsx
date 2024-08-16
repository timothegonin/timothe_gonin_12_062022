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
    <article className="border border-slate-300 rounded inline-flex justify-center flex-col items-center px-3 py-6">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>
      </div>
      <h3 className="text-primary fs-4 my-2">Utilisateur - {id}</h3>
      <div>
        <Link to={`/user/${id}`}>
          <button className="text-white bg-primary p-2 rounded hover:bg-red-700 transition duration-150 ease-in-out delay-50">
            Accéder au profile
          </button>
        </Link>
      </div>
    </article>
  )
}

export default UserCard
