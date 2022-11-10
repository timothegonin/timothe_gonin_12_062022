// import { USER_AVERAGE_SESSIONS } from '../data-MOCKED'

export class UserAverageSessions {
  constructor(data) {
    this._id = data.userId
    this._userSessions = data.sessions
  }

  get id() {
    return this._id
  }
  get userSessions() {
    const userSessions = []
    const daysFirstLetter = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    this._userSessions.forEach((session, index) => {
      const sessionData = {
        day: daysFirstLetter[index],
        sessionLength: session.sessionLength,
      }
      userSessions.push(sessionData)
    })
    return userSessions
  }
}
