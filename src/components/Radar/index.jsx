import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'

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

export default function Activities() {
  return (
    <RadarChart
      outerRadius={150}
      width={500}
      height={500}
      data={data}
      className="radar__container"
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey="subject" stroke="white" />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#FF0101"
        fill="#FF0101"
        fillOpacity={0.6}
      />
    </RadarChart>
  )
}
