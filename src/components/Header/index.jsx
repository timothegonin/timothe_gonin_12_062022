import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Logo from '../../assets/logo.svg'

function Header() {
  return (
    <Navbar bg="secondary" className="d-flex justify-content-between">
      <Container className="m-0 px-4" fluid>
        <Navbar.Brand
          href="/"
          className="col-2 m-0 d-flex align-items-center justify-content-between"
        >
          <img alt="" src={Logo} />{' '}
          <span className="text-primary">SportSee</span>
        </Navbar.Brand>
        <Nav className="col-10 d-flex justify-content-around text-primary">
          <Nav.Link href="/" className="nav-bar__link text-light">
            Accueil
          </Nav.Link>
          <Nav.Link href="/" className="nav-bar__link text-light ">
            Profil
          </Nav.Link>
          <Nav.Link href="/" className="nav-bar__link text-light ">
            Réglage
          </Nav.Link>
          <Nav.Link href="/" className="nav-bar__link text-light ">
            Communauté
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
