import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Cal from '../../assets/Calories.png'
import Obj from '../../assets/Objectifs.png'
import Poid from '../../assets/poids.png'

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

      <div className="charts d-flex justify-content-between">
        {/* Charts Block */}
        <div className="charts__containers">
          <div className="charts__content bg-danger mb-4">
            <img src={Poid} alt="Poid" />
          </div>
          <div className="d-flex justify-content-between">
            <div className="charts__content--small bg-warning">
              <img src={Obj} alt="Objectifs" />
            </div>
            <div className="charts__content--small bg-warning">
              <img src={Obj} alt="Objectifs" />
            </div>
            <div className="charts__content--small bg-warning">
              <img src={Obj} alt="Objectifs" />
            </div>
          </div>
        </div>
        {/* Charts Info */}
        <div className="charts-info__container d-flex flex-column justify-content-between">
          <div className="charts-info__content bg-success">
            <img src={Cal} alt="Calories" />
          </div>
          <div className="charts-info__content bg-success">
            <img src={Cal} alt="Calories" />
          </div>
          <div className="charts-info__content bg-success">
            <img src={Cal} alt="Calories" />
          </div>
          <div className="charts-info__content bg-success">
            <img src={Cal} alt="Calories" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
