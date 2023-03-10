import { useParams } from 'react-router-dom'
import Analytics from '../../Containers/Analytics'
import Loader from '../../components/Loader'
import { useFetchUserData } from '../../utils/hooks'
import Error from '../Error'

/**
 * Displaying the dashboard page, loader, error
 * @function DashBoard
 * @returns {HTMLElement}
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Dashboard = () => {
  const idFromURL = useParams().id

  //Routes used for api calls
  const urls = [
    `http://localhost:3000/user/${idFromURL}`,
    `http://localhost:3000/user/${idFromURL}/activity`,
    `http://localhost:3000/user/${idFromURL}/average-sessions`,
    `http://localhost:3000/user/${idFromURL}/performance`,
  ]

  const { data, isLoading, error } = useFetchUserData(idFromURL, urls)

  if (error.status) {
    return <Error message={error.message} />
  }

  return isLoading ? <Loader /> : <Analytics data={data} />
}

export default Dashboard
