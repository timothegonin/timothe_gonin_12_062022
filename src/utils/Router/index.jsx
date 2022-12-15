import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home'
import Dashboard from '../../Pages/Dashboard'
import Error from '../../Pages/Error'

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
