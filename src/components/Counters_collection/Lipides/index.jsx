import React from 'react'
import Lip from '../../../assets/icons/right-counters/lipides-icon.svg'

function Lipides() {
  return (
    <div className="charts-info__content d-flex align-items-center border">
      <figure className="charts-info__icon d-flex justify-content-center align-items-center">
        <img src={Lip} alt="Lipides" />
      </figure>
      <div>
        <span className="charts-info__data">50g</span>
        <p className="charts-info__name m-0">Lipides</p>
      </div>
    </div>
  )
}

export default Lipides
