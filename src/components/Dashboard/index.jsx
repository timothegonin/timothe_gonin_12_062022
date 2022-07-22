import styled from 'styled-components'
import { Col, Container, Row } from 'react-bootstrap'

// // Charts components
// import Activity from '../Charts_collection/Activity'
// import SessionsDuration from '../Charts_collection/SessionsDuration'
// import ActivityType from '../Charts_collection/ActivityType'
// import Score from '../Charts_collection/Score'

// //Counters
import Counters from '../Counters'

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
        <Container fluid className="bg-success mx-0">
          <Row className="d-flex justify-content-center">
            <ChartsWrapper>
              <Row>
                <ChartFullSize className="bg-danger"></ChartFullSize>
              </Row>
              <Row>
                <ChartsGroup className="bg-info"></ChartsGroup>
              </Row>
            </ChartsWrapper>
            <CounterWrapper className="bg-warning">
              <Counters />
            </CounterWrapper>
          </Row>
        </Container>
        {/* <Container fluid>
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
        <CountersWrapper>
          <Counters />
        </CountersWrapper> */}
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
// const ChartsGroup = styled(Row)`
//   max-width: 835px;
//   margin: 10px 0;
//   display: flex;
//   justify-content: space-between;
// `
// const CountersWrapper = styled(Container)`
//   margin: 10px 0;
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   min-height: 280px;
// `

const ChartsWrapper = styled(Container)`
  width: 835px;
  height: 611px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ChartFullSize = styled(Col)`
  height: 320px;
  /* width: 835px; */
`
const ChartsGroup = styled(Col)`
  height: 265px;
  /* width: 835px; */
`
const CounterWrapper = styled(Col)`
  /* margin-left: 30px; */
  padding: 0;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-height: 280px;
  max-width: 835px;
`
