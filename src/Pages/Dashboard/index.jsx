import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../utils/context'
import { useParams } from 'react-router-dom'
import Analytics from '../../Containers/Analytics'
import { User } from '../../utils/service/models/User'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
function Dashboard() {
  const idFromURL = useParams().id
  const { dispatch } = useContext(UserContext)
  const [userDataFromFetch, setUserDataFromFetch] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    async function fetchUserData() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:3000/user/${idFromURL}`)
        const { data } = await response.json()
        setUserDataFromFetch(data)
      } catch (err) {
        console.log(err)
        // setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchUserData()

    const setUser = (entry) => {
      dispatch({
        type: 'SET_NEW_USER',
        payload: {
          user: new User(Number(entry)),
        },
      })
    }
    setUser(idFromURL)
  }, [idFromURL])
  console.log(userDataFromFetch)

  return isDataLoading ? <p>Chargement</p> : <Analytics />
}

export default Dashboard
