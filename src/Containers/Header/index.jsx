import { Link } from 'react-router-dom'
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
    <header className="bg-secondary flex flex-row items-center justify-between py-4 px-9 sticky top-0 z-10">
      <div className="flex justify-center items-center">
        <img alt="SportSee's Logo" src={Logo} />{' '}
        <h1 className="text-red-500 font-medium ms-4 text-2xl">SportSee</h1>
      </div>
      <nav className="flex w-3/4 pe-14">
        <ul className="flex flex-row grow justify-between">
          <Link to="/">
            <li className="text-slate-50 font-medium text-xl">Accueil</li>
          </Link>
          <li className="text-slate-50 font-medium text-xl">Profil</li>
          <li className="text-slate-50 font-medium text-xl">Réglage</li>
          <li className="text-slate-50 font-medium text-xl">Communauté</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
