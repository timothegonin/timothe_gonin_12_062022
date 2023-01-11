import { createContext, useEffect, useReducer, useState } from 'react'
import { userReducer, initialState } from '../reducer/'
// import { User } from '../service/models/User'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState)
  const userID = state.id
  const [items, setItem] = useState()

  useEffect(() => {
    localStorage.setItem('userID', JSON.stringify(userID))
    const items = JSON.parse(localStorage.getItem('userID'))
    if (items) {
      console.log(items, 'LOCAL')
    }
  }, [userID])

  return (
    <UserContext.Provider value={{ userID, dispatch }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
