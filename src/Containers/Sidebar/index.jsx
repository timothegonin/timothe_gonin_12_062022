import React from 'react'

import YogaIcon from '../../assets/icons/sidebar/yoga-icon.svg'
import SwimIcon from '../../assets/icons/sidebar/swim-icon.svg'
import BikeIcon from '../../assets/icons/sidebar/bike-icon.svg'
import Dumbbell from '../../assets/icons/sidebar/dumbbell-icon.svg'

//Components
import SquareButton from '../../components/SquareButton'
import Footer from '../../components/Footer'

/**
 * Displaying page's Sidebar (square buttons)
 * @function Sidebar
 * @returns {HTMLElement}
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */

function Sidebar() {
  return (
    <aside className="bg-secondary h-full fixed top-0 left-0 flex flex-col justify-end z-11 px-8">
      <nav className="flex justify-center mb-40">
        <ul className=" flex flex-col justify-between h-full">
          <SquareButton icon={YogaIcon} alt="Yoga icon" />
          <SquareButton icon={SwimIcon} alt="Swin icon" />
          <SquareButton icon={BikeIcon} alt="Bike icon" />
          <SquareButton icon={Dumbbell} alt="Dumbbel icon" />
        </ul>
      </nav>
      <Footer />
    </aside>
  )
}

export default Sidebar
