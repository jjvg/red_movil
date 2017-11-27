<template>
  <v-ons-page id="app">
      <v-ons-toolbar class="toolbar--material" modifier="material" >
          <div class="center"><img src='../assets/img/rc1.png'  class="logo"></div>
          
      </v-ons-toolbar>
    <tab></tab>
   
  </v-ons-page>
</template>
<script>
import Tabbar from './Tabbar.vue' 
export default {
  name: 'principal',
  components: {
      'tab': Tabbar
  }
}
</script>

<style scoped>
.toolbar--material{
  background-color: purple;
}
.logo{
  margin: 0 auto;
  padding: 0px;
    width: 45px;
    height: 45px;
    align: center;
    margin-left: 140px; 
}
</style>
