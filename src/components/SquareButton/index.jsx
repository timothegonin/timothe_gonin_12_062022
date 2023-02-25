import styled from 'styled-components'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

/**
 * Design pattern of square button in the sidebar
 * @function SquareButton
 * @param {{icon: String, alt: String}} Icons links and alternativ texte
 * @returns {HTMLElement}
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
function SquareButton(props) {
  console.log(props)
  return (
    <ButtonWrapper>
      <Button variant="light">
        <img src={props.icon} alt={props.alt} />
      </Button>{' '}
    </ButtonWrapper>
  )
}

export default SquareButton

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const ButtonWrapper = styled(ListGroup.Item)`
  height: 64px;
  width: 64px;
  border-radius: 6px;
  &:hover {
    cursor: pointer;
  }
  button {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`
