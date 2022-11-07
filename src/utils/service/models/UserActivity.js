// import { USER_ACTIVITY } from '../data-MOCKED'

export class UserActivity {
  constructor(data) {
    this._id = data.userId
    this._sessions = data.sessions
  }

  get id() {
    return this._id
  }
  get sessions() {
    return this._sessions
  }
}
