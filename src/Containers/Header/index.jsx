import styled from 'styled-components'
// import { LinkContainer } from 'react-router-bootstrap'
// import { Nav, Navbar, Container } from 'react-bootstrap'
// import { Link } from "react-router-dom";
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
    <header className="bg-secondary flex flex-row items-center justify-between py-4 px-9">
      <div className="flex justify-center items-center">
        <img alt="SportSee's Logo" src={Logo} />{' '}
        <span className="text-red-600 font-medium ms-4 text-2xl">SportSee</span>
      </div>
      <nav className="flex w-3/4 pe-14">
        <ul className="flex flex-row grow justify-between">
          <li className="text-slate-50 font-medium text-xl">Accueil</li>
          <li className="text-slate-50 font-medium text-xl">Profil</li>
          <li className="text-slate-50 font-medium text-xl">Réglage</li>
          <li className="text-slate-50 font-medium text-xl">Communauté</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
// const HeaderWrapper = styled(Navbar)`
//   display: flex;
//   justify-content: space-between;
//   z-index: 999;
// `
// const LogoWrapper = styled(Navbar.Brand)`
//   margin: 0;
//   display: flex;
//   align-items: center;
//   span {
//     color: #ff0000;
//     margin-left: 8px;
//     font-weight: 400;
//     font-size: 24px;
//     letter-spacing: 1px;
//   }
// `

// const NavLink = styled(Nav.Link)`
//   letter-spacing: 1px;
//   font-weight: 400;
//   font-size: 24px;
//   color: white !important;
// `
