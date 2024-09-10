import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  LineChart,
  Line,
  Legend,
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
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
  const LegendTitle = () => {
    return <h3>Durée moyenne des sessions</h3>
  }
  const CustomCursor = ({ points }) => {
    const [{ x }] = points
    return (
      <Rectangle fill="hsla(0, 0%, 0%, 8.50%)" x={x} width={258} height={263} />
    )
  }
  return (
    <SessionsDurationWrapper>
      <LineChart
        data={sessionsDuration}
        height={263}
        width={258}
        margin={{
          top: 30,
          right: 20,
          left: 20,
          bottom: 30,
        }}
      >
        <Legend
          content={LegendTitle}
          verticalAlign="top"
          wrapperStyle={{
            maxWidth: '150px',
            paddingLeft: '14px',
            fontWeight: 500,
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 0255, 0.5)',
          }}
        />
        <Tooltip
          animationEasing={'ease-out'}
          animationDuration={300}
          content={<CustomTooltip units={sessionsDurationTooltipUnits} />}
          cursor={<CustomCursor />}
        />
        <XAxis
          dataKey="day"
          stroke="rgba(255, 255, 255, 0.5)"
          fontSize={12}
          axisLine={false}
          tickLine={false}
          tickMargin={20}
        />
        <YAxis type="number" domain={['dataMin', 'dataMax + 5']} hide="true" />
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
