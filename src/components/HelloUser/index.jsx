import PropTypes from 'prop-types'
import { Col, Container, Row } from 'react-bootstrap'

/**
 * Displaying user's firstname into HelloUser component
 * @function HelloUser
 * @param {string} FirstName of active user
 * @return {HTMLElement }
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const HelloUser = ({ firstName }) => {
  return (
    <Container className="mx-2">
      <Row className="my-5">
        <Col>
          <h1>
            Bonjour <span className="text-primary">{firstName}</span>
          </h1>
          <p>Féliciation ! Vous avez explosé vos objectifs hier 👏</p>
        </Col>
      </Row>
    </Container>
  )
}

export default HelloUser

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ PROPTYPES                                                               │
  └─────────────────────────────────────────────────────────────────────────┘
 */
HelloUser.propTypes = {
  firstName: PropTypes.string,
}
