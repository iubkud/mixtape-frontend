<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="footer">
      <div class="container">
        <div class="content has-text-centered">
        <b>Mixtape</b> is a work in progress
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 25px 0;
}
</style>
