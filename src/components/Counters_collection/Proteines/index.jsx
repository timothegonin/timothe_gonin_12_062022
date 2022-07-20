import React from 'react'
import Prot from '../../../assets/icons/right-counters/proteines-icon.svg'

function Proteines() {
  return (
    <div className="charts-info__content d-flex align-items-center border">
      <figure className="charts-info__icon d-flex justify-content-center align-items-center">
        <img src={Prot} alt="Proteines" />
      </figure>
      <div>
        <span className="charts-info__data">155g</span>
        <p className="charts-info__name m-0">Proteines</p>
      </div>
    </div>
  )
}

export default Proteines
