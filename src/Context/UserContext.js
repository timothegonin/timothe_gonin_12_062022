import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [user, setUser] = useState('Utilisateur')

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
