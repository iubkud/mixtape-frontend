<template>
  <div class="playlist">
    <h1>{{ playlist.title }}</h1>

    <ul class="songs">
      <li v-for="song in songs">
        Title: {{ song.title }} Artist: {{ song.artist }} Length {{ song.length }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data () {
    return {
      playlist: {},
      songs: []
    }
  },
  methods: {
    getSongsInPlaylist () {
      this.$http.get('http://localhost:3000/playlists/' + this.$route.params.id + '/songs').then(response => {
        this.songs = response.data
      }, response => {
        console.log(response.data)
      })
    },
    getPlaylist () {
      this.$http.get('http://localhost:3000/playlists/' + this.$route.params.id).then(response => {
        this.playlist = response.data
      }, response => {
        console.log(response.data)
      })
    }
  },
  mounted () {
    this.getSongsInPlaylist()
    this.getPlaylist()
  }
}
</script>
