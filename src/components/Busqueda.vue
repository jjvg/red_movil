<template>
<div id="home">
    <v-ons-toolbar class="toolbar--material">
      <div class="left">
        <router-link to="/principal"><v-ons-back-button style="color:white"></v-ons-back-button></router-link>
      </div>
      <div class="center"><img src='../assets/img/rc1.png'  class="logo"></div>
    </v-ons-toolbar>
    <p>
      <v-ons-search-input placeholder="Search something"></v-ons-search-input>
    </p>
</div>
</template>

<script>
export default {
   name: 'buscar'
}
</script>
<style scoped>
.logo{
  margin: 0 auto;
  padding: 0px;
    width: 40px;
    height: 40px;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 8px;    
}
</style>