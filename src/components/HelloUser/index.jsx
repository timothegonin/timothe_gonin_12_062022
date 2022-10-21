import React from 'react'
import { Col } from 'react-bootstrap'

const HelloUser = () => {
  return (
    <Col>
      <h1>
        Bonjour <span className="text-primary">Thomas</span>
      </h1>
      <p>Féliciation ! Vous avez explosé vos objectifs hier 👏</p>
    </Col>
  )
}

export default HelloUser
