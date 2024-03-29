import styled from 'styled-components'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Logo from '../../assets/logo.svg'

/**
 * Displaying page's Header (brand, navlinks)
 * @function Header
 * @returns {HTMLElement}
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
function Header() {
  return (
    <HeaderWrapper bg="secondary" expand="md" variant="dark">
      <Container className="m-0 px-4" fluid>
        <LinkContainer to="/">
          <LogoWrapper>
            <img alt="SportSee's Logo" src={Logo} /> <span>SportSee</span>
          </LogoWrapper>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="w-100 d-flex justify-content-around text-primary">
            <LinkContainer to="/">
              <NavLink>Accueil</NavLink>
            </LinkContainer>
            <NavLink>Profil</NavLink>
            <NavLink>Réglage</NavLink>
            <NavLink>Communauté</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const HeaderWrapper = styled(Navbar)`
  display: flex;
  justify-content: space-between;
  z-index: 999;
`
const LogoWrapper = styled(Navbar.Brand)`
  margin: 0;
  display: flex;
  align-items: center;
  span {
    color: #ff0000;
    margin-left: 8px;
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 1px;
  }
`

const NavLink = styled(Nav.Link)`
  letter-spacing: 1px;
  font-weight: 400;
  font-size: 24px;
  color: white !important;
`
