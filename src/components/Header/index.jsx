import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Logo from '../../assets/logo.svg'

function Header() {
  return (
    <Navbar bg="dark" className="d-flex justify-content-between">
      <Container className="m-0" fluid>
        <Navbar.Brand href="/" className="col-2">
          <img alt="" src={Logo} />{' '}
          <span className="text-primary">SportSee</span>
        </Navbar.Brand>
        <Nav className="col-10 d-flex justify-content-around text-primary">
          <Nav.Link href="/" className="text-light fw-bold">
            Accueil
          </Nav.Link>
          <Nav.Link href="/" className="text-light fw-bold">
            Profil
          </Nav.Link>
          <Nav.Link href="/" className="text-light fw-bold">
            Réglage
          </Nav.Link>
          <Nav.Link href="/" className="text-light fw-bold">
            Communauté
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
