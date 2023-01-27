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
  const [userDataFromFetch, setUserDataFromFetch] = useState([])
  const [isDataLoading, setDataLoading] = useState(false)
  const urls = [
    `http://localhost:3000/user/${idFromURL}`,
    `http://localhost:3000/user/${idFromURL}/activity`,
    `http://localhost:3000/user/${idFromURL}/average-sessions`,
    `http://localhost:3000/user/${idFromURL}/performance`,
  ]

  useEffect(() => {
    async function fetchUserData() {
      // setDataLoading(true)
      // try {
      //   const response = await fetch(
      //     `http://localhost:3000/user/${idFromURL}/activity`
      //   )
      //   const { data } = await response.json()
      //   setUserDataFromFetch(data)
      // } catch (err) {
      //   console.log(err)
      //   // setError(true)
      // } finally {
      //   setDataLoading(false)
      // }
      const arrayOfResponses = await Promise.all(
        urls.map((url) =>
          fetch(url)
            .then((res) => res.json())
            .then(({ data }) =>
              setUserDataFromFetch((userDataFromFetch) => [
                ...userDataFromFetch,
                data,
              ])
            )
        )
      )
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
