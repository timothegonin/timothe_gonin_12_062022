import React from 'react'
import styled from 'styled-components'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Logo from '../../assets/logo.svg'

function Header() {
  return (
    <HeaderWrapper
      bg="secondary"
      className="d-flex justify-content-between px-0"
      expand="md"
      variant="dark"
    >
      <Container className="m-0 px-4" fluid>
        <Navbar.Brand href="/" className="m-0 d-flex align-items-center">
          <img alt="" src={Logo} />{' '}
          <span className="text-primary ms-2">SportSee</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="w-100 d-flex justify-content-around text-primary">
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
        </Navbar.Collapse>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled(Navbar)`
  z-index: 999;
`
