import { useContext } from 'react'
import styled from 'styled-components'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { UserContext } from '../../../utils/context/UserContext'

/* 
┌─────────────────────────────────────────────────────────────────────────┐
│ JSX                                                                     │
└─────────────────────────────────────────────────────────────────────────┘
*/
export default function SessionsDuration() {
  // const { users } = useContext(UserContext)
  const { averageSessions } = useContext(UserContext)

  //TOOLTIP
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <SessionDurationTooltip className="custom-tooltip">
          <p className="label">{`${payload[0].value}`}</p>
        </SessionDurationTooltip>
      )
    }

    return null
  }

  return (
    <SessionsDurationWrapper>
      <SessionDurationInfo className="sessionDuration__info">
        <p>Durée moyenne des sessions</p>
      </SessionDurationInfo>
      <ResponsiveContainer width="100%" height="60%">
        <LineChart
          data={averageSessions.userSessions}
          margin={{
            top: 15,
            right: 20,
            left: 20,
            bottom: -5,
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
          <Tooltip content={<CustomTooltip />} />
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
      </ResponsiveContainer>
    </SessionsDurationWrapper>
  )
}

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const SessionsDurationWrapper = styled.div`
  background: red;
  border-radius: 5px;
  height: 263px;
  width: 258px;
`
const SessionDurationInfo = styled.div`
  max-width: 150px;
  padding-top: 29px;
  padding-left: 34px;
  font-weight: 500;
  font-size: 15px;
  color: rgba(255, 255, 0255, 0.5);
`
const SessionDurationTooltip = styled.div`
  background: white;
  .label {
    padding: 7px;
    font-weight: 500;
    font-size: 8px;
  }
`
