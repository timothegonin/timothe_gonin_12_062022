import { createContext } from 'react'
import { User } from '../service/models/User'
import { UserAverageSessions } from '../service/models/UserAverageSessions'
import { USER_AVERAGE_SESSIONS } from '../service/data-MOCKED'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const user = new User(12)
  const averageSessions = new UserAverageSessions(USER_AVERAGE_SESSIONS[0])

  return (
    <UserContext.Provider value={{ user, averageSessions }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
