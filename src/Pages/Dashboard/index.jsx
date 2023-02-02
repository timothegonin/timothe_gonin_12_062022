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
  const urls = [
    `http://localhost:3000/user/${idFromURL}`,
    `http://localhost:3000/user/${idFromURL}/activity`,
    `http://localhost:3000/user/${idFromURL}/average-sessions`,
    `http://localhost:3000/user/${idFromURL}/performance`,
  ]
  // const url = `http://localhost:3000/user/${idFromURL}`

  const { data, isLoading, error } = useFetch(urls)
  // const { data, isLoading, error } = useFetch(url)

  if (error) {
    return <span>Fetch Problem</span>
  }

  return isLoading ? (
    <p>Chargement</p>
  ) : (
    <Analytics data={data} id={idFromURL} />
  )
}

export default Dashboard
