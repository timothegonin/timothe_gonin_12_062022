import { createContext, useState } from 'react'
import { User } from '../service/models/User'
import { USER_MAIN_DATA } from '../service/data-MOCKED'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [user, setUser] = useState('Utilisateur')
  const users = new User(USER_MAIN_DATA[0])
  console.log(users.firstName)

  return (
    <UserContext.Provider value={{ users }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
