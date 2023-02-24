import styled from 'styled-components'

/**
 * Diplaying custom tooltip, used throught charts
 * @function CustomTooltip
 * @param {boolean} active Enable/Disable  with mouse over the chart
 * @param {string} payload Used to choose between Activity or SessionDuration
 * @param {String[]} units Activity(kg, Kcal) - SessionDuration(min)
 * @returns {HTMLElement}
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const CustomTooltip = ({ active, payload, styles, units }) => {
  /**
   * CustomToolTip Content
   * @type {HTMLElement}
   */
  const content = payload.map((current, index) => (
    <p
      key={`${current}-${index}`}
      className="label"
    >{`${current.value} ${units[index]}`}</p>
  ))

  if (active && payload && payload.length) {
    return styles === 'activity' ? (
      <ActivityCustomTooltip>{content}</ActivityCustomTooltip>
    ) : (
      <SessionDurationCustomTooltip>{content}</SessionDurationCustomTooltip>
    )
  }
  return null
}

export default CustomTooltip

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const ActivityCustomTooltip = styled.div`
  background-color: #e60000;
  .label {
    color: white;
    font-weight: 500;
    font-size: 7px;
    padding: 7px 10px;
  }
`
const SessionDurationCustomTooltip = styled.div`
  background: white;
  .label {
    padding: 7px;
    font-weight: 500;
    font-size: 8px;
  }
`
