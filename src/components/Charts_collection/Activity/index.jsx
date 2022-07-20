import React from 'react'
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
      <div className="custom-tooltip--activity">
        <p className="label">{`${payload[0].value}`}</p>
        <p className="label">{`${payload[1].value}`}</p>
      </div>
    )
  }

  return null
}

export default function Activity() {
  return (
    <div className="charts__content">
      <div className="activity__container">
        <div className="activity__info">
          <div className="activity__title ms-4">
            <p className="m-0">Activité quotidienne</p>
          </div>
          <div class="activity__legend">
            <div className="d-flex align-items-center me-4">
              <span className="point point--black me-2"></span>
              <p className="m-0">Poids(kg)</p>
            </div>
            <div className="d-flex align-items-center me-4">
              <span className="point point--red me-2"></span>
              <p className="m-0">Calories brûlées (kCal)</p>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  )
}
