class Auth {
    constructor() {
        this._mainUrl = 'https://auth.nomoreparties.co';
      }
      
      _sendRequest(url, options) {
        return fetch(url, options).then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Что-то пошло не так...");
        });
      }

authentication(password, email) {
      return this._sendRequest(`${this._mainUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({password, email})
      });
}

authorization(password, email) {
    return this._sendRequest(`${this._mainUrl}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({password, email})
      });
}

getInfo(jwt) {
    return this._sendRequest(`${this._mainUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${jwt}`
      },
    });
  }

}

const auth = new Auth();

export default auth;