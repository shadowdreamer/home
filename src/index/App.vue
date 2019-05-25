<template>
  <div id="app">
      index     
      <a @click="$router.push('/producer')">1111</a>
      <a href="/producer">2222</a>
      <router-view/>
  </div>
</template>

<script>
 

export default {
  name: 'app',
  components: {
     
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
