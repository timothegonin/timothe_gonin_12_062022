import { USER_MAIN_DATA } from '../data-MOCKED'

export class User {
  constructor(id) {
    // this._id = data.id
    // this._userInfos = data.userInfos
    // this._todayScore = data.todayScore
    // this._score = data.score
    // this._keyData = data.keyData
    this._idEntry = id
    this._user = USER_MAIN_DATA.find(
      (userData) => userData.id === this._idEntry
    )
  }

  get id() {
    return this._id
  }
  get firstName() {
    return this._userInfos.firstName
  }
  get todayScore() {
    return this._todayScore ? this._todayScore : this._score
  }
  get countersValues() {
    const usersCouterValues = {
      userCaloriesCount: this._keyData.calorieCount,
      userProteinCount: this._keyData.proteinCount,
      userCarbohydrateCount: this._keyData.carbohydrateCount,
      userLipidCount: this._keyData.lipidCount,
    }
    return usersCouterValues
  }
  // get mainData() {
  //   const mainData = USER_MAIN_DATA.find((data) => data.id === this._idEntries)
  //   return mainData
  // }
  // get user() {
  //   return this._user
  // }
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

// let obj = USER_MAIN_DATA.find((o) => o.id === 18)
// console.log(obj)
let test = new User(12)
// test.user === undefined ? console.log('bad user') : console.log(test)
console.log(test.user)
console.log(test.userFirstName)
console.log(test.userTodayScore * 100)
console.log(test.userCounterValues)
