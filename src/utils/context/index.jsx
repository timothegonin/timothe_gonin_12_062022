import { createContext, useEffect, useReducer } from 'react'
import { userReducer, initialState } from '../reducer/'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState)
  const activeUser = state.user

  useEffect(() => {
    localStorage.setItem('activeUser', JSON.stringify(activeUser))
  }, [activeUser])

  return (
    <UserContext.Provider value={{ activeUser, dispatch }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
