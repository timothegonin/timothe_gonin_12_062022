import { USER_MAIN_DATA } from '../data-MOCKED'

export class User {
  constructor(idFromURL) {
    this._user = USER_MAIN_DATA.find((userData) => userData.id === idFromURL)
  }

  get userFirstName() {
    return this._user.userInfos.firstName
  }
  get userTodayScore() {
    return this._user.todayScore * 100
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
}
