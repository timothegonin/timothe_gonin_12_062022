import React from 'react'
import Cal from '../../../assets/icons/right-counters/calories-icon.svg'

function Calories() {
  return (
    <div className="charts-info__content d-flex align-items-center border">
      <figure className="charts-info__icon d-flex justify-content-center align-items-center">
        <img src={Cal} alt="Calories" />
      </figure>
      <div>
        <span className="charts-info__data">1.930kCal</span>
        <p className="charts-info__name m-0">Calories</p>
      </div>
    </div>
  )
}

export default Calories
