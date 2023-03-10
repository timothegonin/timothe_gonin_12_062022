import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
const ErrorMessage = ({ message }) => {
  return (
    <ContentWrapper className="d-flex flex-column justify-content-center align-items-center">
      <h2>{message ? message : `La page que vous demandez n'éxiste pas.`}</h2>
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
