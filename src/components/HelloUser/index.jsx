import React, { useContext } from 'react'
import { Col } from 'react-bootstrap'
import { UserContext } from '../../utils/context/UserContext'

const HelloUser = () => {
  const { user } = useContext(UserContext)

  return (
    <Col>
      <h1>
        Bonjour <span className="text-primary">{user}</span>
      </h1>
      <p>Féliciation ! Vous avez explosé vos objectifs hier 👏</p>
    </Col>
  )
}

export default HelloUser
