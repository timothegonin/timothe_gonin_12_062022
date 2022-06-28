import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

import YogaIcon from '../../assets/icons/yoga.svg'
import SwimIcon from '../../assets/icons/swim.svg'
import BikeIcon from '../../assets/icons/bike.svg'
import Dumbbell from '../../assets/icons/dumbbell.svg'

function Sidebar() {
  return (
    <aside className="sidebar col-1 bg-secondary d-flex flex-column align-items-center justify-content-end p-0">
      <nav className="sidebar__nav d-flex">
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
      <footer>
        <p className="copiryght text-light mb-0">Copiryght, SportSee 2020</p>
      </footer>
    </aside>
  )
}

export default Sidebar
