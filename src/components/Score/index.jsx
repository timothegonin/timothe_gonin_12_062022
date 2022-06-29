import React from 'react'
import { RadialBarChart, RadialBar } from 'recharts'

const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#FF0000',
  },
]

export default function Score() {
  return (
    <div className="bg-light">
      <RadialBarChart
        width={160}
        height={160}
        startAngle={180}
        endAngle={90}
        innerRadius={90}
        outerRadius={55}
        barSize={10}
        data={data}
      >
        <RadialBar cornerRadius={50} dataKey="uv" />
      </RadialBarChart>
    </div>
  )
}
