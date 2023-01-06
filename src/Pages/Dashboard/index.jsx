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
  console.log('<DashBoard/> USEPARAMS : ' + id)

  return <Analytics />
}

export default Dashboard
