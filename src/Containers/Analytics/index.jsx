import { Fragment, useContext } from 'react'
import { UserContext } from '../../utils/context/UserContext'
import styled from 'styled-components'
import { Col, Container, Row } from 'react-bootstrap'
import Activity from '../../components/Charts_collection/Activity'

//User banner
import HelloUser from '../../components/HelloUser'
// Charts components
import SessionsDuration from '../../components/Charts_collection/SessionsDuration'
import ActivityType from '../../components/Charts_collection/ActivityType'
import Score from '../../components/Charts_collection/Score'
// Counters
import Counters from '../../components/Counters'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Analytics = () => {
  const { user } = useContext(UserContext)

  return (
    <Fragment>
      <section>
        <HelloUser firstName={user.userFirstName} />
      </section>
      <section>
        <ContentWrapper fluid className="mx-0">
          <Row className="d-flex justify-content-center">
            <ChartsWrapper>
              <Row>
                <ChartFullSize>
                  <Activity activity={user.userActivity} />
                </ChartFullSize>
              </Row>
              <Row>
                <ChartsGroup>
                  <SessionsDuration
                    sessionsDuration={user.userAverageSessions}
                  />
                  <ActivityType activityType={user.userActivityType} />
                  <Score score={user.userTodayScore} />
                </ChartsGroup>
              </Row>
            </ChartsWrapper>
            <Counters counterValues={user.userCounterValues} />
          </Row>
        </ContentWrapper>
      </section>
    </Fragment>
  )
}

export default Analytics

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
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
