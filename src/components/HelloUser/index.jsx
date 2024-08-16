import PropTypes from 'prop-types'

/**
 * Displaying user's firstname into HelloUser component
 * @function HelloUser
 * @param {string} FirstName of active user
 * @return {HTMLElement }
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const HelloUser = ({ firstName }) => {
  return (
    <section className="mt-14 mb-20">
      <h1 className="text-4xl font-medium font-sans my-5">
        Bonjour <span className="text-primary">{firstName}</span>
      </h1>
      <p>Féliciation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  )
}

export default HelloUser

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ PROPTYPES                                                               │
  └─────────────────────────────────────────────────────────────────────────┘
 */
HelloUser.propTypes = {
  firstName: PropTypes.string,
}
