import { createContext, useState } from 'react'
import { User } from '../service/models/User'
import { UserAverageSessions } from '../service/models/UserAverageSessions'
import { UserActivityType } from '../service/models/UserActivityType'
import { UserActivity } from '../service/models/UserActivity'
import {
  USER_MAIN_DATA,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
  USER_ACTIVITY,
} from '../service/data-MOCKED'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [user, setUser] = useState('Utilisateur')
  const users = new User(USER_MAIN_DATA[0])
  const averageSessions = new UserAverageSessions(USER_AVERAGE_SESSIONS[0])
  const activityType = new UserActivityType(USER_PERFORMANCE[0])
  const activity = new UserActivity(USER_ACTIVITY[1])
  console.log(activity.sessions)

  return (
    <UserContext.Provider
      value={{ users, averageSessions, activityType, activity }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
