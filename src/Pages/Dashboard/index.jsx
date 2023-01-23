import { useContext, useEffect } from 'react'
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
  const { id } = useParams()
  const { dispatch } = useContext(UserContext)

  useEffect(() => {
    const setUser = (entry) => {
      dispatch({
        type: 'SET_NEW_USER',
        payload: {
          id: entry,
          user: new User(Number(entry)),
        },
      })
    }
    setUser(id)
  }, [id])

  return <Analytics />
}

export default Dashboard
