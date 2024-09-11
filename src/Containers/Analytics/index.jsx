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
 * @param {String} activUser.userFirstname User's firstName
 * @param {Object} activUser.userActivity User's activity
 * @param {Object} activUser.userAverageSessions User's average sessions
 * @param {Object} activUser.userActivityType User's activity type
 * @param {Object} activUser.userTodayScore User's today score
 * @param {Object} activUser.userCounterValues User's counters values
 * @returns {HTMLElement}
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Analytics = ({ data }) => {
  const activUser = data

  return (
    <section className="flex flex-col lg:flex-row gap-4 md:gap-1 lg:justify-between pb-10 max-w-6xl">
      <h2 className="hidden">Analytics</h2>
      <div className="flex flex-col gap-7 md:gap-1 w-full lg:w-2/3 grow max-w-4xl">
        <Activity activity={activUser.userActivity} />
        <div className="flex flex-col sm:flex-row justify-between gap-8 md:gap-1 items-center">
          <SessionsDuration sessionsDuration={activUser.userAverageSessions} />
          <ActivityType activityType={activUser.userActivityType} />
          <Score score={activUser.userTodayScore} />
        </div>
      </div>
      <Counters counterValues={activUser.userCounterValues} />
    </section>
  )
}

export default Analytics
