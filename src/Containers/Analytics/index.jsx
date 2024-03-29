import { Fragment } from 'react'
import styled from 'styled-components'
import { Col, Container, Row } from 'react-bootstrap'

//User banner
import HelloUser from '../../components/HelloUser'
// Charts components
import Activity from '../../components/Charts_collection/Activity'
import SessionsDuration from '../../components/Charts_collection/SessionsDuration'
import ActivityType from '../../components/Charts_collection/ActivityType'
import Score from '../../components/Charts_collection/Score'
// Counters
import Counters from '../../components/Counters'

/**
 * Displaying Chart's container and transmits the data to the components
 * @function Analitics
 * @param {Object} data Derived from Dashborad's page (fetch)
 * @param {String} activeUser.userFirstname User's firstName
 * @param {Object} activeUser.userActivity User's activity
 * @param {Object} activeUser.userAverageSessions User's average sessions
 * @param {Object} activeUser.userActivityType User's activity type
 * @param {Object} activeUser.userTodayScore User's today score
 * @param {Object} activeUser.userCounterValues User's counters values
 * @returns {HTMLElement}
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Analytics = ({ data }) => {
  const activeUser = data

  return (
    <Fragment>
      <section>
        <HelloUser firstName={activeUser.userFirstName} />
      </section>
      <section>
        <ContentWrapper fluid className="mx-0">
          <Row className="d-flex justify-content-center">
            <ChartsWrapper>
              <Row>
                <ChartFullSize>
                  <Activity activity={activeUser.userActivity} />
                </ChartFullSize>
              </Row>
              <Row>
                <ChartsGroup>
                  <SessionsDuration
                    sessionsDuration={activeUser.userAverageSessions}
                  />
                  <ActivityType activityType={activeUser.userActivityType} />
                  <Score score={activeUser.userTodayScore} />
                </ChartsGroup>
              </Row>
            </ChartsWrapper>
            <Counters counterValues={activeUser.userCounterValues} />
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
