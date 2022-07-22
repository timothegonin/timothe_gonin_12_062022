import React from 'react'
import styled from 'styled-components'

import Cal from '../../assets/icons/right-counters/calories-icon.svg'
import Prot from '../../assets/icons/right-counters/proteines-icon.svg'
import Glu from '../../assets/icons/right-counters/glucides-icon.svg'
import Lip from '../../assets/icons/right-counters/lipides-icon.svg'

function Counters() {
  return (
    <React.Fragment>
      <CounterCard className="charts-info__content d-flex align-items-center border">
        <figure className="charts-info__icon d-flex justify-content-center align-items-center">
          <img src={Cal} alt="Calories" />
        </figure>
        <div>
          <span className="charts-info__data">1.930kCal</span>
          <p className="charts-info__name m-0">Calories</p>
        </div>
      </CounterCard>
      <CounterCard className="charts-info__content d-flex align-items-center border">
        <figure className="charts-info__icon d-flex justify-content-center align-items-center">
          <img src={Prot} alt="Proteines" />
        </figure>
        <div>
          <span className="charts-info__data">155g</span>
          <p className="charts-info__name m-0">Proteines</p>
        </div>
      </CounterCard>
      <CounterCard className="charts-info__content d-flex align-items-center border">
        <figure className="charts-info__icon d-flex justify-content-center align-items-center">
          <img src={Glu} alt="Glucides" />
        </figure>
        <div>
          <span className="charts-info__data">290g</span>
          <p className="charts-info__name m-0">Glucides</p>
        </div>
      </CounterCard>
      <CounterCard className="charts-info__content d-flex align-items-center border">
        <figure className="charts-info__icon d-flex justify-content-center align-items-center">
          <img src={Lip} alt="Lipides" />
        </figure>
        <div>
          <span className="charts-info__data">50g</span>
          <p className="charts-info__name m-0">Lipides</p>
        </div>
      </CounterCard>
    </React.Fragment>
  )
}

export default Counters

const CounterCard = styled.div`
  height: 124px;
  width: 258px;
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;

  figure {
    height: 60px;
    width: 60px;
    margin: 32px;
    margin-right: 24px;
  }
  span {
    font-size: 24px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
    font-weight: 500;
  }
`
