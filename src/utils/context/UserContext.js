import { createContext } from 'react'
import { User } from '../service/models/User'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const user = new User(12)

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
