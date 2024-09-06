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
    <article className="gap-8 inline-flex items-center justify-between flex-col flex-wrap">
      {Object.values(counterValues).map((value, index) => {
        return (
          <CounterCard
            key={`counter-${index}`}
            className="flex items-center rounded-md h-32 w-64 lg:h-16 lg:w-40"
          >
            <figure className="flex justify-center items-center m-8 me-6 size-16  lg:m-4 lg:me-3 lg:size-11">
              <img src={countersIcons[index]} alt={`${counterLabel[index]}`} />
            </figure>
            <div>
              <span className="lg:text-lg text-2xl font-bold">{`${value}${counterUnit[index]}`}</span>
              <h3 className="text-sm font-medium">{`${counterLabel[index]}`}</h3>
            </div>
          </CounterCard>
        )
      })}
    </article>
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
  background: #fbfbfb;
`
