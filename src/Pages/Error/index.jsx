import React from 'react'
import ErrorMessage from '../../components/ErrorMessage'

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
const Error = ({ message }) => {
  return <ErrorMessage message={message} />
}

export default Error
