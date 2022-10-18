import styled from 'styled-components'
import { Col, Container, Row } from 'react-bootstrap'

// Charts components
import Activity from '../../components/Charts_collection/Activity'
import SessionsDuration from '../../components/Charts_collection/SessionsDuration'
import ActivityType from '../../components/Charts_collection/ActivityType'
import Score from '../../components/Charts_collection/Score'

//Counters
import Counters from '../../components/Counters'

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
        <ContentWrapper fluid className="mx-0">
          <Row className="d-flex justify-content-center">
            <ChartsWrapper>
              <Row>
                <ChartFullSize>
                  <Activity />
                </ChartFullSize>
              </Row>
              <Row>
                <ChartsGroup>
                  <SessionsDuration />
                  <ActivityType />
                  <Score />
                </ChartsGroup>
              </Row>
            </ChartsWrapper>
            <CounterWrapper>
              <Counters />
            </CounterWrapper>
          </Row>
        </ContentWrapper>
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
    max-width: 1126px;
  }
`

const ContentWrapper = styled(Container)`
  max-width: 1126px;
`

const ChartsWrapper = styled(Container)`
  width: 835px;
  height: 611px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ChartFullSize = styled(Col)`
  margin: 0;
  padding: 0;
`

const ChartsGroup = styled(Col)`
  max-width: 835px;
  height: 265px;
  margin: 10px 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1406px) {
    margin-bottom: 0;
  }
`

const CounterWrapper = styled(Col)`
  padding: 0;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  flex-wrap: wrap;
  min-height: 280px;
  max-width: 835px;
  @media screen and (min-width: 1395px) {
    max-width: 258px;
    justify-content: flex-end;
    align-content: space-between;
    margin: 0;
  }
`
