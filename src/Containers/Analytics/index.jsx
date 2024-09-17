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
    <section className="grid grid-cols-1 gap-y-4 pb-10 max-w-6xl sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-5 lg:grid-rows-custom lg:gap-1 xl:grid-cols-custom">
      <h2 className="hidden">Analytics</h2>
      <Activity
        className="row-start-1 flex flex-col w-full grow max-w-4xl sm:col-span-2 md:col-span-4"
        activity={activUser.userActivity}
      />
      <div className="flex flex-col justify-between gap-4 items-center sm:col-span-1 sm:items-start sm:gap-8 lg:col-span-4 lg:row-start-2 lg:flex-row lg:gap-1">
        <SessionsDuration sessionsDuration={activUser.userAverageSessions} />
        <ActivityType activityType={activUser.userActivityType} />
        <Score score={activUser.userTodayScore} />
      </div>
      <Counters
        className={
          'flex flex-col justify-between items-end gap-y-4 sm:col-span-1 sm:justify-start sm:gap-y-8 lg:col-span-1 lg:col-start-5 lg:row-span-2 lg:gap-1'
        }
        counterValues={activUser.userCounterValues}
      />
    </section>
  )
}

export default Analytics
