import { Fragment } from 'react'
import styled from 'styled-components'

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
      <HelloUser firstName={activeUser.userFirstName} />
      <div className="flex">
        <div className="w-3/4">
          <Activity activity={activeUser.userActivity} />
          <ChartsGroup>
            <SessionsDuration
              sessionsDuration={activeUser.userAverageSessions}
            />
            <ActivityType activityType={activeUser.userActivityType} />
            <Score score={activeUser.userTodayScore} />
          </ChartsGroup>
        </div>
        <Counters counterValues={activeUser.userCounterValues} />
      </div>
      {/* <HelloUser firstName={activeUser.userFirstName} />
      <AnalyticsWrapper>
        <Activity activity={activeUser.userActivity} />
        <ChartsGroup>
          <SessionsDuration sessionsDuration={activeUser.userAverageSessions} />
          <ActivityType activityType={activeUser.userActivityType} />
          <Score score={activeUser.userTodayScore} />
        </ChartsGroup>
        <Counters counterValues={activeUser.userCounterValues} />
      </AnalyticsWrapper> */}
    </Fragment>
  )
}

export default Analytics

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */

const AnalyticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ChartsGroup = styled.div`
  max-width: 835px;
  width: 75%;
  /* height: 265px; */
  margin: 10px 0;
  padding: 0;
  display: inline-flex;
  justify-content: space-between;
  @media screen and (min-width: 1406px) {
    margin-bottom: 0;
  }
`
