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
    <ContentWrapper className="d-flex flex-column justify-content-center align-items-center">
      <h2>{message}</h2>
      <Link to="/">Retour à la page de sélection utilisateur</Link>
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
