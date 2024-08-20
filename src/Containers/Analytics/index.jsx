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
    <div className="flex gap-5">
      <div className="flex flex-col gap-6">
        <Activity activity={activeUser.userActivity} />
        <div className="flex justify-between">
          <SessionsDuration sessionsDuration={activeUser.userAverageSessions} />
          <ActivityType activityType={activeUser.userActivityType} />
          <Score score={activeUser.userTodayScore} />
        </div>
      </div>
      <Counters counterValues={activeUser.userCounterValues} />
    </div>
  )
}

export default Analytics
