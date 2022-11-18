import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { UserContext } from '../../utils/context/UserContext'

const HelloUser = () => {
  const { users } = useContext(UserContext)

  return (
    <Container className="mx-2">
      <Row className="my-5">
        <Col>
          <h1>
            Bonjour <span className="text-primary">{users.firstName}</span>
          </h1>
          <p>Féliciation ! Vous avez explosé vos objectifs hier 👏</p>
        </Col>
      </Row>
    </Container>
  )
}

export default HelloUser
