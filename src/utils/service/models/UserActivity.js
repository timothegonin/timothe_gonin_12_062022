// import { USER_ACTIVITY } from '../data-MOCKED'

export class UserActivity {
  constructor(data) {
    this._id = data.userId
    this._sessions = data.sessions
  }

  get id() {
    return this._id
  }
  get userActivity() {
    const userActivity = []
    this._sessions.forEach((session, index) => {
      const sessionData = {
        day: index + 1,
        kilogram: session.kilogram,
        calories: session.calories,
      }
      userActivity.push(sessionData)
    })
    return userActivity
  }
}
