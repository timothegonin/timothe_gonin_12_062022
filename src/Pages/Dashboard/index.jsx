import React from 'react'

// User's name
import HelloUser from '../../components/HelloUser'
// Charts and Counters Group
import Analytics from '../../Containers/Analytics'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
function Dashboard() {
  return (
    <React.Fragment>
      <section>
        <HelloUser />
      </section>
      <section>
        <Analytics />
      </section>
    </React.Fragment>
  )
}

export default Dashboard
