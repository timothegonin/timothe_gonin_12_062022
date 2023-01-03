import { createContext, useState } from 'react'
import { User } from '../service/models/User'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  // const user = new User(12)
  const [userID, setUserID] = useState(0)
  const user = new User(userID)

  function updateUser(id) {
    setUserID(id)
    console.log(userID)
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
