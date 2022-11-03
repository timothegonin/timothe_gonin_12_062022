// import { USER_MAIN_DATA } from '../data-MOCKED'

export class User {
  constructor(data) {
    this._id = data.id
    this._userInfos = data.userInfos
    this._todayScore = data.todayScore
    this._score = data.score
    this._keyData = data.keyData
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
  get calorieCount() {
    return this._keyData.calorieCount
  }
  get proteinCount() {
    return this._keyData.proteinCount
  }
  get carbohydrateCount() {
    return this._keyData.carbohydrateCount
  }
  get lipidCount() {
    return this._keyData.lipidCount
  }
}
