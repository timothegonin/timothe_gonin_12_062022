import React from 'react'
import { useParams } from 'react-router-dom'

import Analytics from '../../Containers/Analytics'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
function Dashboard() {
  const { id } = useParams()
  console.log(id)

  return <Analytics />
}

export default Dashboard
