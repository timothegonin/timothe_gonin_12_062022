import { createContext } from 'react'
import { User } from '../service/models/User'
import { UserAverageSessions } from '../service/models/UserAverageSessions'
import { UserActivityType } from '../service/models/UserActivityType'
import { USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../service/data-MOCKED'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const user = new User(12)
  const averageSessions = new UserAverageSessions(USER_AVERAGE_SESSIONS[0])
  const activityType = new UserActivityType(USER_PERFORMANCE[0])

  return (
    <UserContext.Provider value={{ user, averageSessions, activityType }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
