// import { useContext } from 'react'
// import { UserContext } from '../../utils/context'
import Analytics from '../../Containers/Analytics'
import { useParams } from 'react-router-dom'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
function Dashboard() {
  // const { userID } = useContext(UserContext)
  const { id } = useParams()
  console.log(id, 'USEPARAMS Dashboard')

  return <Analytics id={Number(id)} />
}

export default Dashboard
