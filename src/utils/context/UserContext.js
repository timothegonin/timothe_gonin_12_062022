import { createContext, useState } from 'react'
import { User } from '../service/models/User'
import { UserAverageSessions } from '../service/models/UserAverageSessions'
import { UserActivityType } from '../service/models/UserActivityType'
import {
  USER_MAIN_DATA,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../service/data-MOCKED'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [user, setUser] = useState('Utilisateur')
  const users = new User(USER_MAIN_DATA[0])
  const averageSessions = new UserAverageSessions(USER_AVERAGE_SESSIONS[0])
  const activityType = new UserActivityType(USER_PERFORMANCE[0])
  console.log(users.todayScore)
  // console.log(averageSessions._userSessions[1])
  // console.log(activityType)

  return (
    <UserContext.Provider value={{ users, averageSessions, activityType }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
