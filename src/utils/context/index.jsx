import { createContext, useEffect, useReducer } from 'react'
import { userReducer, initialState } from '../reducer/'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState)
  const userID = state.id
  const userDATA = state.user

  useEffect(() => {
    localStorage.setItem('userID', JSON.stringify(userID))
    const items = JSON.parse(localStorage.getItem('userID'))
    if (items) {
      console.log(items, 'LOCAL')
      localStorage.setItem('userDATA', JSON.stringify(userDATA))
    }
  }, [userID, userDATA])

  return (
    <UserContext.Provider value={{ userID, userDATA, dispatch }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
