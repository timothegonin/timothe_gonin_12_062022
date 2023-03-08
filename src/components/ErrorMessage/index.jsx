import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

/**
 * Displaying page's error message
 * @function ErrorMessage
 * @returns {HTMLElement}
 */

const ErrorMessage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <section>
        <h2>ErrorMessage</h2>
        <Link to="/">Retour à la page de sélection utilisateur</Link>
      </section>
    </Container>
  )
}

export default ErrorMessage
