import React, { useContext } from 'react'
import styled from 'styled-components'
import { Col } from 'react-bootstrap'

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
  const { user } = useContext(UserContext)
  const counterLabel = ['Calories', 'Proteines', 'Glucides', 'Lipides']
  const counterUnit = ['kCal', 'g', 'g', 'g']
  const countersIcons = [CaloriesIcon, ProteinesIcon, GlucidesIcon, LipidesIcon]

  return (
    <CounterWrapper>
      {Object.values(user.userCounterValues).map((value, index) => {
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
    </CounterWrapper>
  )
}

export default Counters

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const CounterWrapper = styled(Col)`
  padding: 0;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  flex-wrap: wrap;
  min-height: 280px;
  max-width: 835px;
  @media screen and (min-width: 1395px) {
    max-width: 258px;
    justify-content: flex-end;
    align-content: space-between;
    margin: 0;
  }
`

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
