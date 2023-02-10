import UserCard from '../../components/UserCard'
const UserCards = () => {
  const ids = [12, 18]
  return (
    <div>
      {ids.map((id, index) => (
        <UserCard id={id} key={`userCard ${index}`} />
      ))}
    </div>
  )
}

export default UserCards
