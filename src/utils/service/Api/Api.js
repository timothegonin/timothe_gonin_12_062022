class Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    this._url = url
  }

  async get() {
    return fetch(this._url)
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.log('an error occurs', err))
  }
}

class UserApi extends Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    super(url)
  }

  async getUsers() {
    const data = await this.get()
    return data
  }
}
