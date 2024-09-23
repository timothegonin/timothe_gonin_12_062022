import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

/**
 * Displaying page's error message
 * @function ErrorMessage
 * @returns {HTMLElement}
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const ErrorMessage = () => {
  const location = useLocation()
  const message = location.state
    ? location.state.message
    : `La page demandée n'éxiste pas.`

  return (
    <ContentWrapper className="flex flex-col justify-start items-center gap-10 mt-20">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-4xl text-primary inline-flex">404</h2>
        <p className="font-bold text-2xl text-secondary text-center">
          {message}
        </p>
      </div>
      <Link
        to="/"
        className="text-white text-center bg-primary p-2 rounded hover:bg-red-700 transition duration-150 ease-in-out delay-50"
      >
        Retour à la page de sélection utilisateur
      </Link>
    </ContentWrapper>
  )
}

export default ErrorMessage

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const ContentWrapper = styled.section`
  height: calc(100vh - 84px);
`
