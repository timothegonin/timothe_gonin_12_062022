import PropTypes from 'prop-types'
import styled from 'styled-components'

//ICONS
import CaloriesIcon from '../../assets/icons/right-counters/calories-icon.svg'
import ProteinesIcon from '../../assets/icons/right-counters/proteines-icon.svg'
import GlucidesIcon from '../../assets/icons/right-counters/glucides-icon.svg'
import LipidesIcon from '../../assets/icons/right-counters/lipides-icon.svg'

/**
 * Displaying user's calories, proteins, glucides and lipides counters
 * @function Counters
 * @param {Array.<{userCaloriesCount: Integer, userProteinsCount: Integer, userCarbohydratesCount: Integer, userLipidsCount: Integer}> } Values
 * @return {HTMLElement }
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Counters = ({ counterValues }) => {
  const counterLabel = ['Calories', 'Proteines', 'Glucides', 'Lipides']
  const counterUnit = ['kCal', 'g', 'g', 'g']
  const countersIcons = [CaloriesIcon, ProteinesIcon, GlucidesIcon, LipidesIcon]

  return (
    <aside className="gap-8 inline-flex items-center justify-between flex-col">
      {Object.values(counterValues).map((value, index) => {
        return (
          <CounterCard key={`counter-${index}`} className="flex items-center">
            <figure className="flex justify-center items-center">
              <img src={countersIcons[index]} alt={`${counterLabel[index]}`} />
            </figure>
            <div>
              <span>{`${value}${counterUnit[index]}`}</span>
              <p className="m-0">{`${counterLabel[index]}`}</p>
            </div>
          </CounterCard>
        )
      })}
    </aside>
  )
}

export default Counters

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ PROPTYPES                                                               │
  └─────────────────────────────────────────────────────────────────────────┘
 */
Counters.propTypes = {
  counterValues: PropTypes.objectOf(PropTypes.number),
}

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
