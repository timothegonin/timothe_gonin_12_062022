import styled from 'styled-components'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ TOOLTIP                                                                 │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const CustomTooltip = ({ active, payload, styles, units }) => {
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
