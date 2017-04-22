<template>
  <div class="home">
    <h1>Your Playlists</h1>

    <ul class="playlists">
      <li v-for="p in playlists">
        {{ p.title }}
      </li>
    </ul>

    <div v-if="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
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
      this.$http.get('http://localhost:3000/playlists').then(response => {
        this.playlists = response.data
        console.log(this.playlists)
      }, response => {
        this.error = response.data.message
      })
    }
  },
  mounted () {
    this.getPlaylists()
  }
}
</script>
