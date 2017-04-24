const API_URL = 'http://localhost:3000/'
const LOGIN_URL = API_URL + 'auth/login'
const SIGNUP_URL = API_URL + 'signup'

export default {
  user: {
    authenticated: false
  },
  login (context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds).then(response => {
      localStorage.setItem('auth_token', response.body.auth_token)

      this.user.authenticated = true

      if (redirect) {
        context.$router.push(redirect)
      }
    }, response => {
      console.log(response)
      context.error = response.body.message
    })
  },
  signup (context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds).then(response => {
      localStorage.setItem('auth_token', response.body.auth_token)

      this.user.authenticated = true

      if (redirect) {
        context.$router.push(redirect)
      }
    }, response => {
      console.log(response)
      context.error = response.body.message
    })
  },
  logout () {
    localStorage.removeItem('auth_token')
    this.user.authenticated = false
  },

  check_auth () {
    var jwt = localStorage.getItem('auth_token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  isUserLoggedIn () {
    if (localStorage.getItem('auth_token') !== '') {
      return true
    } else {
      return false
    }
  },

  getAuthHeader () {
    return {
      'Authorization': localStorage.getItem('auth_token')
    }
  }
}
