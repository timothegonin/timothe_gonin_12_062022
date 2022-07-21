import React from 'react'
import styled from 'styled-components'
import ListGroup from 'react-bootstrap/ListGroup'
// import Button from 'react-bootstrap/Button'
import SquareButton from '../SquareButton'
import YogaIcon from '../../assets/icons/sidebar/yoga-icon.svg'
import SwimIcon from '../../assets/icons/sidebar/swim-icon.svg'
import BikeIcon from '../../assets/icons/sidebar/bike-icon.svg'
import Dumbbell from '../../assets/icons/sidebar/dumbbell-icon.svg'

import Footer from '../Footer'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */

function Sidebar() {
  return (
    <SideBarWrapper className="bg-secondary">
      <nav>
        <ListGroup className="justify-content-between">
          <SquareButton icon={YogaIcon} alt="Yoga icon" />
          <SquareButton icon={SwimIcon} alt="Swin icon" />
          <SquareButton icon={BikeIcon} alt="Bike icon" />
          <SquareButton icon={Dumbbell} alt="Dumbbel icon" />
        </ListGroup>
      </nav>
      <Footer />
    </SideBarWrapper>
  )
}

export default Sidebar

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const SideBarWrapper = styled.aside`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  padding-top: 84px;
  width: 117px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  nav {
    height: 316px;
    display: flex;
    justify-content: center;
    margin-bottom: 164px;
  }
`
