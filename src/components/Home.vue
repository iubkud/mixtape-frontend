<template>
  <div class="home">
    <h1>Your Playlists</h1>

    <ul class="playlists">
      <li v-for="p in playlists">
        <router-link :to="{ name: 'Playlist', params: { playlist_id: p.id } }">{{ p.title }}</router-link>
      </li>
    </ul>

    <div v-if="error">
      <p>{{ error }}</p>
    </div>

    <div class="button is-link">
      <a @click="logout()">Log Out</a>
    </div>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  name: 'home',
  data () {
    return {
      playlists: [],
      error: ''
    }
  },
  methods: {
    getPlaylists () {
      this.$http.get('playlists').then(response => {
        this.playlists = response.data
      }, response => {
        this.error = response.data.message
      })
    },
    logout () {
      auth.logout()
      this.$router.push('login')
    }
  },
  mounted () {
    this.getPlaylists()
  }
}
</script>
