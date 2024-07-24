import React from 'react'
import ErrorMessage from '../../components/ErrorMessage'
import { Helmet, HelmetProvider } from 'react-helmet-async'

/**
 * Displaying the error page which contains the error message
 * @function Error
 * @returns {HTMLElement}
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Error = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SportSee - Erreur</title>
      </Helmet>
      <ErrorMessage />
    </HelmetProvider>
  )
}

export default Error
