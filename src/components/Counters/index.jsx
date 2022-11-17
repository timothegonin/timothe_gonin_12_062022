import React, { useContext } from 'react'
import styled from 'styled-components'

import CaloriesIcon from '../../assets/icons/right-counters/calories-icon.svg'
import ProteinesIcon from '../../assets/icons/right-counters/proteines-icon.svg'
import GlucidesIcon from '../../assets/icons/right-counters/glucides-icon.svg'
import LipidesIcon from '../../assets/icons/right-counters/lipides-icon.svg'

import { UserContext } from '../../utils/context/UserContext'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
function Counters() {
  const { users } = useContext(UserContext)
  const counterLabel = ['Calories', 'Proteines', 'Glucides', 'Lipides']
  const counterUnit = ['kCal', 'g', 'g', 'g']
  const countersIcons = [CaloriesIcon, ProteinesIcon, GlucidesIcon, LipidesIcon]

  return (
    <React.Fragment>
      {Object.values(users.countersValues).map((value, index) => {
        return (
          <CounterCard
            key={`counter-${index}`}
            className="d-flex align-items-center "
          >
            <figure className="d-flex justify-content-center align-items-center">
              <img src={countersIcons[index]} alt={`${counterLabel[index]}`} />
            </figure>
            <div>
              <span>{`${value}${counterUnit[index]}`}</span>
              <p className="m-0">{`${counterLabel[index]}`}</p>
            </div>
          </CounterCard>
        )
      })}
    </React.Fragment>
  )
}

export default Counters

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
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
