<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to='/'>BUILD ROBOTS </router-link>
    
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to='/'>Home </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to='/buildrobot'>Build Robot</router-link>
      </li>    
    </ul>
  </div>
</nav>
  <router-view></router-view>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';
import BuildRobot from './components/BuildRobot.vue';

export default {
  name: 'app',
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
