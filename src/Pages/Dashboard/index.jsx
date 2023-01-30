import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../utils/context'
import { useParams } from 'react-router-dom'
import Analytics from '../../Containers/Analytics'
import { User } from '../../utils/service/models/User'
import { UserAPI } from '../../utils/service/models/UserAPI'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
function Dashboard() {
  const idFromURL = useParams().id
  const { dispatch } = useContext(UserContext)
  // const [userDataFromFetch, setUserDataFromFetch] = useState([])
  // const [isDataLoading, setDataLoading] = useState(false)
  // const [error, setError] = useState(false)
  // const urls = [
  //   `http://localhost:3000/user/${idFromURL}`,
  //   `http://localhost:3000/user/${idFromURL}/activity`,
  //   `http://localhost:3000/user/${idFromURL}/average-sessions`,
  //   `http://localhost:3000/user/${idFromURL}/performance`,
  // ]

  useEffect(() => {
    // async function fetchUserData() {
    //   setDataLoading(true)
    //   try {
    //     const arrayOfResponses = await Promise.all(
    //       urls.map((url) => fetch(url).then((res) => res.json()))
    //     )
    //     setUserDataFromFetch(arrayOfResponses)
    //   } catch (err) {
    //     console.log(err)
    //     setError(true)
    //   } finally {
    //     setDataLoading(false)
    //   }
    // }
    // fetchUserData()

    const setUser = (entry) => {
      dispatch({
        type: 'SET_NEW_USER',
        payload: {
          user: new User(Number(entry)),
          userAPI: new UserAPI(Number(entry)),
        },
      })
    }
    setUser(idFromURL)
  }, [idFromURL])
  // console.log(userDataFromFetch)

  // if (error) {
  //   return <span>Fetch Problem</span>
  // }

  // return isDataLoading ? <p>Chargement</p> : <Analytics />
  return <Analytics />
}

export default Dashboard
