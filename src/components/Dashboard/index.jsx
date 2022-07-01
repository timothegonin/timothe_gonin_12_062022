import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Weight from '../Weight'
import SessionDuration from '../SessionDuration'
import Activities from '../Radar'
import Score from '../Score'
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
      <Weight />
      <SessionDuration />
      <Activities />
      <Score />
      <Calories />
      <Proteines />
      <Glucides />
      <Lipides />
    </main>
  )
}

export default Dashboard
