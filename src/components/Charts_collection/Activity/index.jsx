import React from 'react'
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

const data = [
  {
    name: '1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '8',
    uv: 5490,
    pv: 1300,
    amt: 2100,
  },
  {
    name: '9',
    uv: 8490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '10',
    uv: 6490,
    pv: 2300,
    amt: 2100,
  },
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <ActivityTooltip>
        <p className="label">{`${payload[0].value}`}</p>
        <p className="label">{`${payload[1].value}`}</p>
      </ActivityTooltip>
    )
  }

  return null
}

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
export default function Activity() {
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
            data={data}
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
              dataKey="name"
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
            <Bar dataKey="pv" fill="#282D30" radius={[3, 3, 0, 0]} />
            <Bar dataKey="uv" fill="#E60000" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ActivityContainer>
    </ActivityWrapper>
  )
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
const ActivityTooltip = styled.div`
  background-color: #e60000;
  .label {
    color: white;
    font-weight: 500;
    font-size: 7px;
    padding: 7px 10px;
  }
`
