import { useParams } from 'react-router-dom'
import HelloUser from '../../components/HelloUser'
import Analytics from '../../Containers/Analytics'
import DataInfo from '../../components/DataInfo'
import Loader from '../../components/Loader'
import { useFetchUserData } from '../../utils/hooks'
import { Fragment } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

/**
 * Dashboard component that fetches and displays user-specific data including activity and analytics.
 *
 * - Uses `useParams` to extract the user ID from the URL.
 * - Fetches user data via the `useFetchUserData` hook.
 * - Displays a loader while data is being fetched.
 * - Renders various components to present user data once loaded.
 *
 * @component
 * @returns {JSX.Element} A React component that renders the dashboard page.
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
