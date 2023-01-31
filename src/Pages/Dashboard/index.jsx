import { useContext, useEffect } from 'react'
import { UserContext } from '../../utils/context'
import { useParams } from 'react-router-dom'
import Analytics from '../../Containers/Analytics'
import { User } from '../../utils/service/models/User'
import { UserAPI } from '../../utils/service/models/UserAPI'
import { useFetch } from '../../utils/hooks'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
function Dashboard() {
  const idFromURL = useParams().id
  const { dispatch } = useContext(UserContext)
  const urls = [
    `http://localhost:3000/user/${idFromURL}`,
    `http://localhost:3000/user/${idFromURL}/activity`,
    `http://localhost:3000/user/${idFromURL}/average-sessions`,
    `http://localhost:3000/user/${idFromURL}/performance`,
  ]

  const { data, isLoading, error } = useFetch(urls)
  console.log(data[0])

  useEffect(() => {
    const setUser = (entry) => {
      dispatch({
        type: 'SET_NEW_USER',
        payload: {
          user: new User(Number(entry)),
          // userAPI: new UserAPI(Number(entry)),
        },
      })
    }
    setUser(idFromURL)
  }, [idFromURL])

  if (error) {
    return <span>Fetch Problem</span>
  }

  return isLoading ? <p>Chargement</p> : <Analytics />
}

export default Dashboard
