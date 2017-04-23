<template>
  <div class="login">
    <h1>Log in to mixtape</h1>
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
