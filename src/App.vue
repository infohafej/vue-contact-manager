<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> 
  <h2>App Component</h2>
  <button class="btn btn-success">Home</button>
  <i class="fa fa-home fa-4x text-danger"></i>-->
  <NavBar></NavBar>
  <router-view/>
</template>
<script>
import NavBar from './components/NavBar.vue'

  export default{
    name : 'App',
    components: {
      NavBar
    }
  }
</script>


<style>

</style>
