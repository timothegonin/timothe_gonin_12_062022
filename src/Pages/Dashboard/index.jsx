import { useContext, useState } from 'react'
import { UserContext } from '../../utils/context'
import Analytics from '../../Containers/Analytics'
import { useParams } from 'react-router-dom'

//CONTEXT TEST IMPORT START
import { useEffect } from 'react'
//CONTEXT TEST IMPORT END

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
function Dashboard() {
  // const { userID } = useContext(UserContext)
  const { id } = useParams()
  console.log(id, 'USEPARAMS Dashboard')

  const [isLoaded, setIsLoaded] = useState(true)

  //TEST CONTEXT START
  const { dispatch } = useContext(UserContext)
  useEffect(() => {
    const setUser = (entry) => {
      dispatch({
        type: 'SET_NEW_USER',
        payload: {
          ...id,
          id: entry,
        },
      })
    }
    setUser(id)
  }, [id])

  //TEST CONTEXT END

  return !isLoaded ? <p>Chargement...</p> : <Analytics id={Number(id)} />
}

export default Dashboard
