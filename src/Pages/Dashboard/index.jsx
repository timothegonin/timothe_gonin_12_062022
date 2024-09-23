import { useParams } from 'react-router-dom'
import HelloUser from '../../components/HelloUser'
import Analytics from '../../Containers/Analytics'
import DataInfo from '../../components/DataInfo'
import Loader from '../../components/Loader'
import { useFetchUserData } from '../../utils/hooks'
import { Fragment } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

/**
 * Displaying the dashboard page, loader, data info Toast
 * @function DashBoard
 * @returns {HTMLElement} Returns a React Fragment that contains a DataInfo component and an Analytics component with data passed in as props
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Dashboard = () => {
  const idFromURL = useParams().id
  const { data, isLoading } = useFetchUserData(idFromURL)
  const activUser = data

  return (
    <HelmetProvider>
      <Helmet>
        <title>SportSee - Profil</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <DataInfo />
          <HelloUser firstName={activUser.userFirstName} />
          <Analytics data={data} />
        </Fragment>
      )}
    </HelmetProvider>
  )
}

export default Dashboard
