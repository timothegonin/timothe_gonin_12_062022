import { createContext, useEffect, useReducer, useState } from 'react'
import { userReducer, initialState } from '../reducer/'
import { User } from '../service/models/User'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState)
  const userID = state.id
  const [user, setUser] = useState()

  useEffect(() => {
    localStorage.setItem('userID', JSON.stringify(userID))
    const items = JSON.parse(localStorage.getItem('userID'))
    if (items) {
      console.log(items, 'LOCAL')
      setUser(new User(Number(items)))
      localStorage.setItem('userDATA', JSON.stringify(user))
    }
  }, [userID, user])

  return (
    <UserContext.Provider value={{ userID, dispatch }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
