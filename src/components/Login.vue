<template>
  <div class="login">
    <h1>Log in to mixtape</h1>
    <div>
      <label for="email">Email </label>
      <input type="text" name="email" id="email" v-model="credentials.email"/>
    </div>
    <div>
      <label for="password">Password </label>
      <input type="password" name="password" id="password" v-model="credentials.password"/>
    </div>
    <div>
      <button @click="submit()">Log in</button>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
