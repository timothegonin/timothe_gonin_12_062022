import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Score = ({ score }) => {
  return (
    <ScoreWrapper>
      <h3>Score</h3>
      <ScoreChartContent>
        <ScoreChartInfo>
          <p className="score__percent">{score.value}%</p>
          <p>de votre objectif</p>
        </ScoreChartInfo>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            width={160}
            height={160}
            innerRadius={90}
            outerRadius={75}
            barSize={10}
            data={[score]}
            transform="rotate(-90 0 0)"
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              tick={false}
              fill="red"
            />
            <RadialBar cornerRadius={50} dataKey="value" fill="#FF0000" />
          </RadialBarChart>
        </ResponsiveContainer>
      </ScoreChartContent>
    </ScoreWrapper>
  )
}

export default Score

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ PROPTYPES                                                               │
  └─────────────────────────────────────────────────────────────────────────┘
 */
Score.propTypes = {
  score: PropTypes.objectOf(PropTypes.number),
}

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */

const ScoreWrapper = styled.div`
  background-color: #fbfbfb;
  border-radius: 5px;
  height: 263px;
  width: 258px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    width: 100%;
    font-weight: 500;
    font-size: 15px;
    padding: 0 48px;
    margin-top: 24px;
    margin-bottom: 4px;
  }
`

const ScoreChartContent = styled.div`
  height: 160px;
  width: 160px;
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 5px;
`
const ScoreChartInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  position: absolute;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  p {
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    color: #74798c;
  }
  p.score__percent {
    margin-bottom: 5px;
    color: black;
    font-weight: 700;
    font-size: 26px;
  }
`
