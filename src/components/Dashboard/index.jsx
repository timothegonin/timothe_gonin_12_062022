import React from 'react'
import { Col, Row } from 'react-bootstrap'

// Charts components
import Activity from '../Charts_collection/Activity'
import SessionsDuration from '../Charts_collection/SessionsDuration'
import ActivityType from '../Charts_collection/ActivityType'
import Score from '../Charts_collection/Score'

//Indicators
import Calories from '../Calories'
import Proteines from '../Proteines'
import Glucides from '../Glucides'
import Lipides from '../Lipides'

function Dashboard() {
  return (
    <main>
      <Row className="w-100">
        <Col>
          <section className="my-5">
            <h1>
              Bonjour <span className="text-primary">Thomas</span>
            </h1>
            <p>Féliciation ! Vous avez explosé vos objectifs hier 👏</p>
          </section>
        </Col>
      </Row>
      <Activity />
      <SessionsDuration />
      <ActivityType />
      <Score />
      <Calories />
      <Proteines />
      <Glucides />
      <Lipides />
    </main>
  )
}

export default Dashboard
