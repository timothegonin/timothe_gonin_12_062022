import styled from 'styled-components'
import { Col, Container, Row } from 'react-bootstrap'

// Charts components
import Activity from '../Charts_collection/Activity'
import SessionsDuration from '../Charts_collection/SessionsDuration'
import ActivityType from '../Charts_collection/ActivityType'
import Score from '../Charts_collection/Score'

//Indicators
import Calories from '../Counters_collection/Calories'
import Proteines from '../Counters_collection/Proteines'
import Glucides from '../Counters_collection/Glucides'
import Lipides from '../Counters_collection/Lipides'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
function Dashboard() {
  return (
    <MainWrapper>
      <section>
        <Container fluid>
          <Row className="my-5">
            <Col>
              <h1>
                Bonjour <span className="text-primary">Thomas</span>
              </h1>
              <p>Féliciation ! Vous avez explosé vos objectifs hier 👏</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container fluid>
          <Row>
            <Col>
              <Activity />
            </Col>
          </Row>
          <ChartsGroup>
            <SessionsDuration />
            <ActivityType />
            <Score />
          </ChartsGroup>
        </Container>
        <CounterCards>
          <Calories />
          <Proteines />
          <Glucides />
          <Lipides />
        </CounterCards>
      </section>
    </MainWrapper>
  )
}

export default Dashboard

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const MainWrapper = styled.main`
  margin-left: 117px;
  padding: 0 90px;
  @media screen and (max-width: 1155px) {
    padding: 0 16px;
  }
`
const ChartsGroup = styled(Row)`
  max-width: 835px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`
const CounterCards = styled(Container)`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 280px;
`
