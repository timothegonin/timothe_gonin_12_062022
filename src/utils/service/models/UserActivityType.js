// import { USER_PERFORMANCE } from '../data-MOCKED'

export class UserActivityType {
  constructor(data) {
    this._id = data.userId
    this._userActivityTypeData = data.data
    this._userActivityTypeDataName = data.kind
  }

  get id() {
    return this._id
  }
  get userActivityType() {
    const userActivityType = []
    this._userActivityTypeData.forEach((int, index) => {
      const activityTypeData = {
        value: int.value,
        kind: this._userActivityTypeDataName[index + 1],
      }
      userActivityType.push(activityTypeData)
    })

    return userActivityType
  }
}
