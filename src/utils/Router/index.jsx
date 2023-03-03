import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home'
import Dashboard from '../../Pages/Dashboard'
import Error from '../../Pages/Error'

/**
 * Returning routes for single page application SPA
 * @function Router
 * @property {HTMLElement} element Page direction
 * @returns {HTMLElement}
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<Dashboard />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Router
