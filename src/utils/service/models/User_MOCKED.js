import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data-MOCKED'

/**
 * User_MOCKED object, generate with mocked data (file: ../data-MOCKED.js).
 * @class User_MOCKED
 * @param {Object} this._user - User's main data
 * @param {Object} this._userActivity- User's activities data
 * @param {Object} this._userAverageSessions - User's average sessions data
 * @param {Object} this._userActivityType - User's activity types data
 * @returns {User_MOCKED} A new instance of User_MOCKED with these methods
 */
export class User_MOCKED {
  constructor(idFromURL) {
    this._user = USER_MAIN_DATA.find((userData) => userData.id === idFromURL)
    if (!this._user) {
      throw new Error('User not found')
    }
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

  /**
   * Return user's first name
   * @typedef {String} user's first name
   * @memberof User_MOCKED
   */
  get userFirstName() {
    return this._user.userInfos.firstName
  }

  /**
   * Return user's today score
   * @typedef {Object} userTodayScore
   * @property {Integer} value - user's score value
   * @memberof User_MOCKED
   */
  get userTodayScore() {
    const userScoreValue = this._user.todayScore
      ? this._user.todayScore
      : this._user.score
    return {
      value: userScoreValue * 100,
    }
  }

  /**
   * Return user's couters values
   * @typedef {Object}
   * @property {Integer} userCaloriesCount
   * @property {Integer} userCarbohydratesCount
   * @property {Integer} userLipidsCount
   * @property {Integer} userProteinsCount
   * @memberof User_MOCKED
   */
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

  /**
   * Return an array of objects containing the user's activity
   * @typedef {Array.<Object>}
   * @property {Integer} day - Number of the day
   * @property {Integer} kilogram - Kilograms burned during the day
   * @property {Integer} calories - Calories burned during the day
   * @memberof User_MOCKED
   */
  get userActivity() {
    //Creating an empty array. Store the formatted data from the sessionData constant
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

  /**
   * Return an array of objects containing the user's average session
   * @typedef {Array.<Object>}
   * @property {String} day - First letter of the day
   * @property {Integer} sessionLength - Session length
   * @memberof User_MOCKED
   */
  get userAverageSessions() {
    //Creating an empty array. Store the formatted data from the average sessionData constant
    const userSessions = []
    const data = this._userAverageSessions.sessions
    //Array needed for the chart layout
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

  /**
   * Return an array of objects containing the user's activities type
   * @typedef {Array.<Object>}
   * @property {Integer} value
   * @property {String} kind - Performance type label
   * @memberof User_MOCKED
   */
  get userActivityType() {
    //Creating an empty array. Store the formatted data from the activityTypeData constant
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
