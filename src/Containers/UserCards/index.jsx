import UserCard from '../../components/UserCard'

/**
 * Displaying User's card container
 * @function UserCards
 * @returns {HTMLElement}
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const UserCards = () => {
  /**
   * @constant ids
   * Ids used to generate links to user's page
   * @type {Integer}
   */
  const ids = [12, 18]

  return (
    <section className="mt-12 flex flex-col sm:flex-row justify-center gap-10">
      {ids.map((id, index) => (
        <UserCard id={id} key={`userCard ${index}`} />
      ))}
    </section>
  )
}

export default UserCards
