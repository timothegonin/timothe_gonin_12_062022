import { USER_MAIN_DATA, USER_ACTIVITY } from '../data-MOCKED'

export class User {
  constructor(idFromURL) {
    this._user = USER_MAIN_DATA.find((userData) => userData.id === idFromURL)
    this._userActivity = USER_ACTIVITY.find(
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
    return this._userActivity.sessions
  }
}

// TEST START
// const test = new User(12)
// console.log(test.userActivity)
// console.log('CLASS : ', typeof test.userActivity)
// TEST END
