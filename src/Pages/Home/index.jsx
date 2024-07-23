import React from 'react'
import UserCards from '../../Containers/UserCards'
import { Helmet, HelmetProvider } from 'react-helmet-async'

/**
 * Displaying the home page which contains the user cards container
 * @function Home
 * @returns {HTMLElement}
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SportSee - Accueil</title>
      </Helmet>
      <UserCards />
    </HelmetProvider>
  )
}

export default Home
