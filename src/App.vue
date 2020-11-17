<template>
  <div id="app">
    <notifications></notifications>
    <img alt="Todo logo" src="./assets/images.png" width="100" style="border-radius: 30px">
    <p>Seize the day!</p>
    <div class="row">
      <div class="col-md-12">
         <router-view></router-view>
      </div> 
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
/* body{
background: linear-gradient(to bottom, #8d05e7, #dee5e7);
background-attachment: fixed;
} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p{
  color: black
};

</style>


