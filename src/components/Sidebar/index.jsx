import React from 'react'
import styled from 'styled-components'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

import YogaIcon from '../../assets/icons/sidebar/yoga-icon.svg'
import SwimIcon from '../../assets/icons/sidebar/swim-icon.svg'
import BikeIcon from '../../assets/icons/sidebar/bike-icon.svg'
import Dumbbell from '../../assets/icons/sidebar/dumbbell-icon.svg'

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
          <ListGroup.Item className="p-0 rounded">
            <Button className="sidebar__button rounded" variant="light">
              <img src={YogaIcon} alt="Yoga icon" />
            </Button>{' '}
          </ListGroup.Item>
          <ListGroup.Item className="p-0 rounded">
            <Button className="sidebar__button rounded" variant="light">
              <img src={SwimIcon} alt="Swin icon" />
            </Button>{' '}
          </ListGroup.Item>
          <ListGroup.Item className="p-0 rounded">
            <Button className="sidebar__button rounded" variant="light">
              <img src={BikeIcon} alt="Bike icon" />
            </Button>{' '}
          </ListGroup.Item>
          <ListGroup.Item className="p-0 rounded">
            <Button className="sidebar__button rounded" variant="light">
              <img src={Dumbbell} alt="Dumbbell icon" />
            </Button>{' '}
          </ListGroup.Item>
        </ListGroup>
      </nav>
      {/* <footer>
        <p className="copiryght text-light mb-0">Copiryght, SportSee 2020</p>
      </footer> */}
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

  nav {
    height: 316px;
    display: flex;
    justify-content: center;
  }
`
