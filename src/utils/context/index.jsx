import { createContext, useReducer } from 'react'
import { userReducer, initialState } from '../reducer/'
// import { User } from '../service/models/User'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState)
  const userID = state.id

  return (
    <UserContext.Provider value={{ userID, dispatch }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
