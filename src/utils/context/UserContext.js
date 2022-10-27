import { createContext, useState } from 'react'
import { User } from '../service/models/User'
import { UserAverageSessions } from '../service/models/UserAverageSessions'
import { USER_MAIN_DATA, USER_AVERAGE_SESSIONS } from '../service/data-MOCKED'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [user, setUser] = useState('Utilisateur')
  const users = new User(USER_MAIN_DATA[0])
  const averageSessions = new UserAverageSessions(USER_AVERAGE_SESSIONS[0])
  // console.log(users.id)
  // console.log(averageSessions._userSessions[1])

  return (
    <UserContext.Provider value={{ users, averageSessions }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
