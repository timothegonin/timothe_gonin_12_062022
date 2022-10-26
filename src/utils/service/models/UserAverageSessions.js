// import { USER_MAIN_DATA } from '../data-MOCKED'

export class UserAverageSessions {
  constructor(data) {
    this._id = data.userId
    this._userSessions = data.sessions
  }

  get id() {
    return this._id
  }
  get userSessionDay() {
    return this._userSessions.day
  }
  get userSessionLength() {
    return this._userSessions.sessionLength
  }
}
