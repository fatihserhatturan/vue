<template>
  <div id="app">
    <ProjectSidebar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>
<script>
import ProjectSidebar from './components/ProjectSidebar.vue'

export default {
  name: 'App',
  components: {
    ProjectSidebar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
