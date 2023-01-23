import { createContext, useEffect, useReducer, useState } from 'react'
import { userReducer, initialState } from '../reducer/'
import { User } from '../service/models/User'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState)
  const userID = state.id
  const userDATA = state.user
  // const [user, setUser] = useState()

  useEffect(() => {
    localStorage.setItem('userID', JSON.stringify(userID))
    const items = JSON.parse(localStorage.getItem('userID'))
    if (items) {
      console.log(items, 'LOCAL')
      // setUser(new User(Number(items)))
      localStorage.setItem('userDATA', JSON.stringify(userDATA))
    }
  }, [userID])

  return (
    <UserContext.Provider value={{ userID, userDATA, dispatch }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
