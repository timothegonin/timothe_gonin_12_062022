import { createContext, useReducer, useState } from 'react'
import { userReducer, initialState } from '../reducer/'
import { User } from '../service/models/User'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [userID, setUserID] = useState(0)

  const [state, dispatch] = useReducer(userReducer, initialState)
  const user = new User(state.id)

  function updateUser(id) {
    setUserID(id)
    console.log(userID)
  }

  return (
    <UserContext.Provider value={{ user, updateUser, state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
