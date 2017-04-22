import router from '../main'

const API_URL = 'http://localhost:3000/'
const LOGIN_URL = API_URL + 'auth/login'
const SIGNUP_URL = API_URL + 'signup'

export default {
  user: {
    authenticated: false
  },

  /*
  login (context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token)

      this.user.authenticated = true

      if (redirect) {
        router.go(redirect)
      }
    }).error((err) => {
      context.error = err
    })
  },
  */
  login (context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds).then(response => {
      localStorage.setItem('id_token', response.body.auth_token)
      console.log(response.body.auth_token)

      this.user.authenticated = true

      if (redirect) {
        context.$router.push(redirect)
      }
    }, response => {
      console.log(response)
    })
  },

  signup (context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, data => {
      localStorage.setItem('id_token', data.id_token)

      this.user.authenticated = true

      if (redirect) {
        router.go(redirect)
      }
    }).error((err) => {
      context.error = err
    })
  },

  logout () {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
  },

  check_auth () {
    var jwt = localStorage.getItem('id_token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  getAuthHeader () {
    return {
      'Authorization': localStorage.getItem('id_token')
    }
  }
}
