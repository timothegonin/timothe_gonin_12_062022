import { USER_MAIN_DATA } from '../data-MOCKED'

export class User {
  constructor(data) {
    this._id = data.id
    this._userInfos = data.userInfos
    this._todayScore = data.todayScore
    this._keyData = data.keyData
  }

  get id() {
    return this._id
  }
  get firstName() {
    return this._userInfos.firstName
  }
  get todayScore() {
    return this._todayScore
  }
  get caloriesCount() {
    return this._keyData.caloriesCount
  }
  get proteinCount() {
    return this._keyData.proteinCount
  }
  get carbonhydrateCount() {
    return this._keyData.carbonhydrateCount
  }
  get lipidcount() {
    return this._keyData.lipidCount
  }
}
