class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._header = config.headers;
  }

  getUserInfo() {
    return this._request(this._baseUrl + 'users/me', { headers: this._header })
  }

  getInitialsCards() {
    return this._request(this._baseUrl + 'cards', { headers: this._header })
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(response.status));
  }
}

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-52/',
  headers: {
    authorization: 'ae672644-5499-4af4-bef5-295b969af30e',
    'Content-Type': 'application/json',
  }
});

export default api;

