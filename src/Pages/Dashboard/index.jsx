import { useParams } from 'react-router-dom'
import Analytics from '../../Containers/Analytics'
import { useFetch } from '../../utils/hooks'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
function Dashboard() {
  const idFromURL = useParams().id

  const { data, isLoading, error } = useFetch(idFromURL)

  if (error) {
    return <span>Fetch Problem</span>
  }

  return isLoading ? <p>Chargement</p> : <Analytics data={data} />
}

export default Dashboard
