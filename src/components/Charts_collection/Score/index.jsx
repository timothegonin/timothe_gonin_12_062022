import React from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 90,
    fill: '#FF0000',
  },
]

export default function Score() {
  return (
    <div className="bg-light charts__content--small d-flex flex-column align-items-center">
      <h3 className="charts__title w-100 px-5 mt-4 mb-1">Score</h3>
      <div className="score__container">
        <div className="score__info">
          <p className="score__percent mb-1">12%</p>
          <p>de votre objectif</p>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            width={160}
            height={160}
            startAngle={180}
            endAngle={500}
            innerRadius={90}
            outerRadius={75}
            barSize={10}
            data={data}
          >
            <RadialBar cornerRadius={50} dataKey="uv" />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
