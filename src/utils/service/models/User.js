import { USER_MAIN_DATA, USER_ACTIVITY, USER_PERFORMANCE } from '../data-MOCKED'

export class User {
  constructor(idFromURL) {
    this._user = USER_MAIN_DATA.find((userData) => userData.id === idFromURL)
    this._userActivity = USER_ACTIVITY.find(
      (userData) => userData.userId === idFromURL
    )
    this._userActivityType = USER_PERFORMANCE.find(
      (userData) => userData.userId === idFromURL
    )
  }

  get userFirstName() {
    return this._user.userInfos.firstName
  }
  get userTodayScore() {
    return { value: this._user.todayScore * 100 }
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
// console.log(test.userActivityType)
// console.log('CLASS : ', typeof test.userActivityType)
// TEST END
