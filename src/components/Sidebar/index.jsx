import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

function Sidebar() {
  return (
    <aside className="sidebar col-1 bg-secondary d-flex flex-column align-items-center justify-content-center">
      <nav className="sidebar__nav d-flex">
        <ListGroup className="justify-content-between">
          <ListGroup.Item className="p-0">
            <Button className="sidebar__button" variant="light">
              X
            </Button>{' '}
          </ListGroup.Item>
          <ListGroup.Item className="p-0">
            <Button className="sidebar__button" variant="light">
              X
            </Button>{' '}
          </ListGroup.Item>
          <ListGroup.Item className="p-0">
            <Button className="sidebar__button" variant="light">
              X
            </Button>{' '}
          </ListGroup.Item>
          <ListGroup.Item className="p-0">
            <Button className="sidebar__button" variant="light">
              X
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
