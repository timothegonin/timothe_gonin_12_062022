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
    // <aside className="h-full top-0 z-11">
    <aside className="bg-secondary w-full fixed bottom-0 left-0 flex flex-col justify-end z-50 p-4 gap-2 sm:h-full sm:w-24 sm:top-0 sm:z-11 xl:p-8">
      <nav className="flex justify-center h-2/5">
        <ul className="flex justify-center items-center h-full grow gap-6 sm:flex-col sm:justify-between">
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
