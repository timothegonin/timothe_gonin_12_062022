import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Activity = ({ activity }) => {
  return (
    <ActivityWrapper>
      <ActivityContainer>
        <ActivityInfo>
          <ActivityTitle className="ms-4">
            <p className="m-0">Activité quotidienne</p>
          </ActivityTitle>
          <ActivityLegend>
            <div className="d-flex align-items-center me-4">
              <span className="point point--black me-2"></span>
              <p className="m-0">Poids(kg)</p>
            </div>
            <div className="d-flex align-items-center me-4">
              <span className="point point--red me-2"></span>
              <p className="m-0">Calories brûlées (kCal)</p>
            </div>
          </ActivityLegend>
        </ActivityInfo>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart
            width={500}
            height={300}
            data={activity}
            margin={{
              top: 50,
              right: 30,
              left: 20,
              bottom: 20,
            }}
            barSize={7}
            barGap={8}
          >
            <CartesianGrid vertical={false} strokeDasharray="2" />
            <XAxis
              dataKey="day"
              axisLine={false}
              fontSize={14}
              fontWeight="bold"
              stroke="#9B9EAC"
              tickLine={false}
              tickMargin={20}
            />
            <YAxis
              axisLine={false}
              fontSize={14}
              fontWeight="bold"
              orientation="right"
              stroke="#9B9EAC"
              tickCount={3}
              tickLine={false}
              tickMargin={20}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="calories" fill="#282D30" radius={[3, 3, 0, 0]} />
            <Bar dataKey="kilogram" fill="#E60000" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ActivityContainer>
    </ActivityWrapper>
  )
}
export default Activity

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ TOOLTIP                                                                 │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const CustomTooltip = ({ active, payload }) => {
  const content = payload.map((current, index) => (
    <p key={`${current}-${index}`} className="label">{`${current.value}`}</p>
  ))

  if (active && payload && payload.length) {
    return <ActivityCustomTooltip>{content}</ActivityCustomTooltip>
  }
  return null
}

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ PROPTYPES                                                               │
  └─────────────────────────────────────────────────────────────────────────┘
 */

Activity.propTypes = {
  activity: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
}

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const ActivityWrapper = styled.div`
  height: 320px;
  max-width: 835px;
`

const ActivityContainer = styled.div`
  border-radius: 5px;
  background: #fbfbfb;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ActivityInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const ActivityTitle = styled.div`
  p {
    color: #20253a;
    font-weight: 700;
    font-size: 15px;
  }
`
const ActivityLegend = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    color: #74798c;
    font-weight: 700;
    font-size: 14px;
  }
  .point {
    height: 8px;
    width: 8px;
    display: inline-block;
    border-radius: 50%;
    &--black {
      background-color: #282d30;
    }
    &--red {
      background-color: #e60000;
    }
  }
`
const ActivityCustomTooltip = styled.div`
  background-color: #e60000;
  .label {
    color: white;
    font-weight: 500;
    font-size: 7px;
    padding: 7px 10px;
  }
`
