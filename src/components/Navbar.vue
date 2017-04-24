<template>
  <div class="navbar nav">
    <div class="nav-left">
      <router-link :to="{ name: 'Home' }" class="nav-item">Mixtape</router-link>
    </div>
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class="nav-right nav-menu">
      <router-link :to="{ name: 'Home' }" class="nav-item" v-if="this.isLoggedIn">Home</router-link>
      <router-link :to="{ name: 'Search' }" class="nav-item" v-if="this.isLoggedIn">Search</router-link>
      <router-link :to="{ name: 'Login' }" class="nav-item" v-if="!this.isLoggedIn">Log In</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoggedIn: true
    }
  },
  methods: {
    checkLogin () {
      if (localStorage.getItem('auth_token') === null) {
        this.isLoggedIn = false
      } else {
        this.isLoggedIn = true
      }
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
