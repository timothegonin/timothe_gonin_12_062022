import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'

/**
 * Displaying user's type of activity in Radarchart
 * @function ActivityType
 * @param {Array.<{ value: Integer, kind: String}> } ActivityType User's type of activity data
 * @return {HTMLElement }
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const ActivityType = ({ activityType }) => {
  return (
    <ActivityTypeWrapper>
      <h3 className="hidden">Activity type</h3>
      <RadarChart
        outerRadius={89}
        width={258}
        height={263}
        data={activityType}
        strokeWidth="1.2px"
      >
        <PolarGrid
          radialLines={false}
          polarRadius={[84, 59, 39, 20, 10]}
          strokeWidth="1.2px"
          stroke="#fff"
          fill="#fff"
        />
        <PolarAngleAxis
          axisLine={false}
          dataKey="kind"
          dy={4}
          dx={-1}
          stroke="white"
          style={{
            fontSize: '12px',
            fontWeight: '500',
          }}
          tickLine={false}
        />
        <Radar dataKey="value" fill="#e60000" fillOpacity={0.8} />
      </RadarChart>
    </ActivityTypeWrapper>
  )
}
export default ActivityType

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ PROPTYPES                                                               │
  └─────────────────────────────────────────────────────────────────────────┘
 */
ActivityType.propTypes = {
  activityType: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.string,
    })
  ),
}

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */

const ActivityTypeWrapper = styled.article`
  border-radius: 5px;
  background: #282d30;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
`
