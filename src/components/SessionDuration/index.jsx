import React from 'react'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'L',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'M',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'M',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'J',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'V',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'S',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'D',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}`}</p>
      </div>
    )
  }

  return null
}

export default function SessionDuration() {
  return (
    <div className="sessionDuration__container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="name"
            stroke="white"
            axisLine={false}
            tickLine={false}
          />
          {/* <Tooltip
            cursor={{ stroke: 'black', strokeWidth: 1, opacity: 0.2 }}
            content={'hello'}
          /> */}
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="pv"
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
    </div>
  )
}
