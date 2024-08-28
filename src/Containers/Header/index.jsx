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
    <header className="bg-secondary flex flex-row items-center justify-between  p-3 sm:py-4 sm:px-9 sticky top-0 z-10">
      <div className="flex justify-center items-center">
        <img alt="SportSee's Logo" src={Logo} />{' '}
        <h1 className="text-red-500 font-medium ms-4 text-2xl">SportSee</h1>
      </div>
      <nav className="relative flex justify-end w-2/6">
        <button className=" text-slate-50 font-medium text-xl p-2">Menu</button>
        <div className="absolute right-0 bg-secondary top-full w-full rounded-b-md">
          <ul className="flex flex-col items-end p-3 gap-2">
            <Link to="/">
              <li className="text-slate-100 font-medium text-l">Accueil</li>
            </Link>
            <li className="text-slate-100 font-medium text-l">Profil</li>
            <li className="text-slate-100 font-medium text-l">Réglage</li>
            <li className="text-slate-100 font-medium text-l">Communauté</li>
          </ul>
        </div>
      </nav>
      {/* <nav className="flex w-3/4 pe-14">
        <ul className="flex flex-row grow justify-between">
          <Link to="/">
            <li className="text-slate-50 font-medium text-xl">Accueil</li>
          </Link>
          <li className="text-slate-50 font-medium text-xl">Profil</li>
          <li className="text-slate-50 font-medium text-xl">Réglage</li>
          <li className="text-slate-50 font-medium text-xl">Communauté</li>
        </ul>
      </nav> */}
    </header>
  )
}

export default Header
