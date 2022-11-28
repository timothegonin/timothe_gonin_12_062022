import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data-MOCKED'

export class User {
  constructor(idFromURL) {
    this._user = USER_MAIN_DATA.find((userData) => userData.id === idFromURL)
    this._userActivity = USER_ACTIVITY.find(
      (userData) => userData.userId === idFromURL
    )
    this._userAverageSessions = USER_AVERAGE_SESSIONS.find(
      (userData) => userData.userId === idFromURL
    )
    this._userActivityType = USER_PERFORMANCE.find(
      (userData) => userData.userId === idFromURL
    )
  }

  /* 
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │   USER_MAIN_DATA                                                            │
  └─────────────────────────────────────────────────────────────────────────────┘
 */
  get userFirstName() {
    return this._user.userInfos.firstName
  }
  get userTodayScore() {
    const userScoreValue = this._user.todayScore
      ? this._user.todayScore
      : this._user.score
    return {
      value: userScoreValue * 100,
    }
  }
  get userCounterValues() {
    const userCouterValues = {
      userCaloriesCount: this._user.keyData.calorieCount,
      userProteinsCount: this._user.keyData.proteinCount,
      userCarbohydratesCount: this._user.keyData.carbohydrateCount,
      userLipidsCount: this._user.keyData.lipidCount,
    }
    return userCouterValues
  }

  /* 
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │   USER_ACTIVITY                                                             │
  └─────────────────────────────────────────────────────────────────────────────┘
 */
  get userActivity() {
    const userActivity = []
    this._userActivity.sessions.forEach((session, index) => {
      const sessionData = {
        day: index + 1,
        kilogram: session.kilogram,
        calories: session.calories,
      }
      userActivity.push(sessionData)
    })
    return userActivity
  }

  /* 
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │   USER_AVERAGE_SESSIONS                                                     │
  └─────────────────────────────────────────────────────────────────────────────┘
 */
  get userAverageSessions() {
    const userSessions = []
    const data = this._userAverageSessions.sessions
    const daysFirstLetter = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    data.forEach((session, index) => {
      const sessionData = {
        day: daysFirstLetter[index],
        sessionLength: session.sessionLength,
      }
      userSessions.push(sessionData)
    })
    return userSessions
  }

  /* 
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │   USER_PERFORMANCE                                                          │
  └─────────────────────────────────────────────────────────────────────────────┘
 */
  get userActivityType() {
    const userActivityType = []
    const data = this._userActivityType.data
    const kind = this._userActivityType.kind

    data.forEach((current, index) => {
      const activityTypeData = {
        value: current.value,
        kind: kind[index + 1],
      }
      userActivityType.push(activityTypeData)
    })
    return userActivityType
  }
}

// TEST START
// const test = new User(12)
// console.log(test.userAverageSessions)
// console.log('CLASS : ', typeof test.userAverageSessions)
// TEST END
