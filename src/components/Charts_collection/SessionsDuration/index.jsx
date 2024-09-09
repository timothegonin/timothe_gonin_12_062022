import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import CustomTooltip from '../../CustomTootip'

/**
 * Displaying user's duration of sessions in RadialBarchart
 * @function SessionsDuration
 * @param {Array.<{ day: String, sessionLength: Integer}> } SessionsDuration User's duration of sessions data
 * @return {HTMLElement }
 */

/* 
┌─────────────────────────────────────────────────────────────────────────┐
│ JSX                                                                     │
└─────────────────────────────────────────────────────────────────────────┘
*/
const SessionsDuration = ({ sessionsDuration }) => {
  const sessionsDurationTooltipUnits = ['min']
  return (
    <SessionsDurationWrapper>
      <SessionDurationInfo className="sessionDuration__info">
        <h3>Durée moyenne des sessions</h3>
      </SessionDurationInfo>
      <LineChart
        data={sessionsDuration}
        height={189}
        width={258}
        margin={{
          top: 15,
          right: 20,
          left: 20,
          bottom: 15,
        }}
      >
        <XAxis
          dataKey="day"
          stroke="rgba(255, 255, 255, 0.5)"
          fontSize={12}
          axisLine={false}
          tickLine={false}
        />
        <YAxis axisLine={false} mirror={true} tickCount={false} />
        <Tooltip
          content={
            <CustomTooltip
              styles="session"
              units={sessionsDurationTooltipUnits}
            />
          }
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#fff"
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: 'rgba(255, 255, 255, 0.3)',
            strokeWidth: 12,
            r: 5,
          }}
        />
      </LineChart>
    </SessionsDurationWrapper>
  )
}

export default SessionsDuration

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ PROPTYPES                                                               │
  └─────────────────────────────────────────────────────────────────────────┘
 */
SessionsDuration.propTypes = {
  sessionsDuration: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      sessionLength: PropTypes.number,
    })
  ),
}

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const SessionsDurationWrapper = styled.article`
  background: red;
  border-radius: 5px;
`
const SessionDurationInfo = styled.div`
  max-width: 150px;
  padding-top: 29px;
  padding-left: 34px;
  font-weight: 500;
  font-size: 15px;
  color: rgba(255, 255, 0255, 0.5);
`
