import UserCard from '../../components/UserCard'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const UserCards = () => {
  const ids = [12, 18]
  return (
    <section className="mt-5 d-flex justify-content-evenly">
      {ids.map((id, index) => (
        <UserCard id={id} key={`userCard ${index}`} />
      ))}
    </section>
  )
}

export default UserCards
