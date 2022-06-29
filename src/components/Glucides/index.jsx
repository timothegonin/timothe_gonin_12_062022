import React from 'react'
import Glu from '../../assets/icons/right-counters/glucides-icon.svg'

function Glucides() {
  return (
    <div className="charts-info__content d-flex align-items-center border">
      <figure className="charts-info__icon d-flex justify-content-center align-items-center">
        <img src={Glu} alt="Glucides" />
      </figure>
      <div>
        <span className="charts-info__data">290g</span>
        <p className="charts-info__name m-0">Glucides</p>
      </div>
    </div>
  )
}

export default Glucides
