import styled from 'styled-components'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
export default function ActivityTye({ activityType }) {
  return (
    <ActivityTypeWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={90}
          width={200}
          height={200}
          data={activityType}
          strokeWidth="1.2px"
        >
          <PolarGrid
            radialLines={false}
            polarRadius={[70, 50, 25, 12]}
            strokeWidth="1.2px"
          />
          <PolarAngleAxis
            dataKey="kind"
            dy={4}
            stroke="white"
            style={{
              fontSize: '12px',
              fontWeight: '500',
            }}
            tickLine={false}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </ActivityTypeWrapper>
  )
}

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */

const ActivityTypeWrapper = styled.div`
  border-radius: 5px;
  height: 263px;
  width: 258px;
  background: #282d30;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
`
