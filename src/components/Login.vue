<template>
  <div class="login">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="card">
          <div class="card-header">
            <p class="card-header-title">Log in to Mixtape</p>
          </div>

          <div class="card-content">
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" type="email" placeholder="Email" v-model="credentials.email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </p>
            </div>

            <div class="field">
              <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password" v-model="credentials.password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </p>
            </div>

            <div class="field">
              <p class="control">
                <button class="button is-success" @click="submit()">Log in</button>
              </p>
            </div>

            <div v-if="error">
              <p>{{ error }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '../auth'

export default {
  name: 'login',
  data () {
    return {
      credentials: {
        email: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    submit () {
      var credentials = {
        email: this.credentials.email,
        password: this.credentials.password
      }

      auth.login(this, credentials, '/')
    }
  }
}
</script>

<style scoped>
.login {
  margin: 20px 0;
}
</style>
