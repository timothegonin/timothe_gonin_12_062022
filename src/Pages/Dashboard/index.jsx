import { useContext, useEffect } from 'react'
import { UserContext } from '../../utils/context'
import { useParams } from 'react-router-dom'
import Analytics from '../../Containers/Analytics'

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
          ...id,
          id: entry,
        },
      })
    }
    setUser(id)
  }, [id])

  return <Analytics />
}

export default Dashboard
