<template>
  <div class="search">
    <div class="field">
      <label class="label">Search for Songs/Albums/Artists</label>
      <p class="control">
        <input class="input" type="text" v-model="searchTerm" />
      </p>
    </div>

    <div class="field">
      <button @click="search()" class="button is-primary">Search</button>
    </div>

    <div class="content artists" v-if="artists">
      <h1>Artists</h1>
      <ul>
        <li v-for="artist in artists">
          {{ artist.name }}
        </li>
      </ul>
    </div>

    <div class="content albums" v-if="albums">
      <h1>Albums</h1>
      <ul>
        <li v-for="album in albums">
          {{ album.name }}
        </li>
      </ul>
    </div>

    <div class="content songs" v-if="songs">
      <h1>Songs</h1>
      <ul>
        <li v-for="song in songs">
          {{ song.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchTerm: '',
      artists: '',
      songs: '',
      albums: ''
    }
  },
  methods: {
    search () {
      var searchTerm = this.searchTerm
      this.$http.post('search', {term: searchTerm}).then(response => {
        Object.assign(this.$data, this.$options.data())
        if (Object.keys(response.data.artists).length !== 0) {
          this.artists = response.data.artists
        }
        if (Object.keys(response.data.tracks).length !== 0) {
          this.songs = response.data.tracks
        }
        if (Object.keys(response.data.albums).length !== 0) {
          this.albums = response.data.albums
        }
      }, response => {
        console.log(response.data)
      })
    }
  }
}
</script>
