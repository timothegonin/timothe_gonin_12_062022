import { useContext } from 'react'
import { UserContext } from '../../utils/context'
import Analytics from '../../Containers/Analytics'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
function Dashboard() {
  const { userID } = useContext(UserContext)

  return <Analytics id={userID} />
}

export default Dashboard
