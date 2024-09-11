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
 * Displays the user's average session duration using a LineChart.
 * The chart visualizes the session length for each day, along with a custom tooltip and legend.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Array.<{ day: String, sessionLength: Number }>} props.sessionsDuration - Array of session data for the user.
 * @returns {JSX.Element} The rendered LineChart displaying the user's session durations.
 */

/* 
┌─────────────────────────────────────────────────────────────────────────┐
│ JSX                                                                     │
└─────────────────────────────────────────────────────────────────────────┘
*/
const SessionsDuration = ({ sessionsDuration }) => {
  const sessionsDurationTooltipUnits = ['min']

  /**
   * Custom legend title for the LineChart.
   *
   * @function LegendTitle
   * @returns {JSX.Element} The rendered title for the chart.
   */
  const LegendTitle = () => {
    return <h3>Durée moyenne des sessions</h3>
  }

  /**
   * Custom cursor component for the LineChart tooltip.
   * Displays a darkened rectangle when hovering over the chart.
   *
   * @function CustomCursor
   * @param {Object} points - Tooltip cursor position data.
   * @returns {JSX.Element} The rendered custom cursor.
   */
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
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity={0.4} />
            <stop offset="50%" stopColor="white" stopOpacity={0.8} />
            <stop offset="70%" stopColor="white" stopOpacity={1} />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
        </defs>
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
          stroke="url(#colorUv)"
          strokeWidth={3}
          strokeOpacity="0.8"
          dot={false}
          activeDot={{
            stroke: 'rgba(255, 255, 255, 0.2)',
            strokeWidth: 13,
            r: 4,
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
  ).isRequired,
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
