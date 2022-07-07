import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

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
    <main className="container">
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
      <Container
        fluid
        className="d-flex flex-column align-items-center flex-xl-row justify-content-xl-center"
      >
        <Col className="charts-collection__wrapper">
          <Row>
            <Col className="d-flex justify-content-center">
              <Activity />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center px-0">
              <SessionsDuration />
            </Col>
            <Col className="d-flex justify-content-center px-0">
              <ActivityType />
            </Col>
            <Col className="d-flex justify-content-center px-0">
              <Score />
            </Col>
          </Row>
        </Col>
        <Container>
          <Row>
            <Col className="d-flex justify-content-evenly flex-wrap">
              <Calories />
              <Proteines />
              <Glucides />
              <Lipides />
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  )
}

export default Dashboard
