import styled from 'styled-components'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    subject: 'Intensité',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Vitesse',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Force',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Endurance',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Energie',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Cardio',
    A: 65,
    B: 85,
    fullMark: 150,
  },
]

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
export default function ActivityTye() {
  return (
    <ActivityTypeWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} width={200} height={200} data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            dy={4}
            stroke="white"
            style={{
              fontSize: '12px',
              fontWeight: '500',
            }}
            tickLine={false}
          />
          <Radar
            name="Mike"
            dataKey="A"
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
